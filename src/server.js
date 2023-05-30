import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import watcher from "@parcel/watcher";
import * as path from "path";
import * as esbuild from "esbuild";
import crypto from "crypto";

const hasher = (name) => crypto.createHash("md5").update(name).digest("hex");
const port = 19407;

const argv = process.argv.slice(2);
if (argv.length === 0) throw new Error(`Must specify an input file`);
const inFile = path.resolve(argv[0]);
const fileBasename = path.basename(inFile);
const extension = path.extname(fileBasename);
const name = path.basename(fileBasename, extension);
const watchDir = path.dirname(inFile);
const hash = hasher(inFile);
const cwd = process.cwd();

const options = {
  preview: true,
};

let result = { code: null, error: null };
await readInput();

const app = express();
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const wss = new WebSocketServer({ server });
wss.on("connection", function connection(ws) {
  broadcastState([ws]);
  ws.on("error", console.error);
  ws.on("message", function message(data) {
    // rebroadcast to other clients
    broadcastRaw(wss.clients, data.toString());
  });
});

console.log(`Watching: ${path.relative(cwd, inFile)}`);
let subscription = await watcher.subscribe(watchDir, async (err, events) => {
  if (err) console.error(err);
  else {
    const match = events.find((p) => path.resolve(p.path) === inFile);
    if (match) {
      await readInput();
      broadcastState(wss.clients);
    }
  }
});

async function readInput() {
  try {
    const res = await esbuild.build({
      entryPoints: [inFile],
      bundle: true,
      sourcemap: false,
      format: "iife",
      globalName: "_program_",
      minify: true,
      write: false,
    });
    const { errors, outputFiles } = res;
    result = {
      code: outputFiles[0].text,
      error: errors.length ? errors[0] : null,
    };
  } catch (err) {
    result = {
      code: null,
      error: {
        message: err.errors[0].text,
        lineNumber: err.errors[0].location.line,
      },
    };
  }
}

function broadcastRaw(clients = [], rawStr) {
  clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(rawStr);
    }
  });
}

function broadcastState(clients = []) {
  return broadcastRaw(
    clients,
    JSON.stringify({
      type: "update",
      code: result.code,
      error: result.error,
      hash,
      file: fileBasename,
      name,
      options,
    })
  );
}
