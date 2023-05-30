import createContext from "./renderer.js";
import {
  setSeed,
  reseed,
  randomizeSeed,
  getSeed,
  patchMath,
  unpatchMath,
} from "./util.js";

const quitMessage = "Plugin closed";

let message, msgTimeout;
const notify = (msg, opts = {}) => {
  if (message && message.cancel) {
    message.cancel();
  }
  clearTimeout(msgTimeout);
  msgTimeout = setTimeout(() => {
    message = figma.notify(msg, opts);
  }, 0);
};

const exit = (msg) => figma.closePlugin(msg);

let connected = false,
  hasError = false;

let curState;
let imageBytes;

const showError = (message, lineNumber) => {
  hasError = true;
  connected = false;
  notify(`Script Error: ${message} on line ${lineNumber}`, {
    error: true,
    timeout: Infinity,
    onDequeue: (reason) => {
      exit(quitMessage);
    },
  });
};

const reDraw = (useOldSeed = true) => {
  if (curState && curState.error) {
    const { lineNumber, message } = curState.error;
    showError(message, lineNumber);
    return;
  }

  try {
    const curCode = curState ? curState.code : "";
    const src = `const module = {
id: ".",
exports: {},
parent: null
};
${curCode};
return _program_;`;
    // reset random seed
    reseed();
    const runner = new Function(src);
    const mExports = runner() || {};

    if (mExports && typeof mExports.default === "function") {
      draw(mExports.default, useOldSeed);
    }
    const wasError = hasError;
    hasError = false;
    if (wasError !== hasError) {
      connected = false;
      firstConnect();
    }
  } catch (err) {
    const { lineNumber, message } = err;
    console.error("Error evaluating script:");
    console.error(err.message);
    console.error(err.stack);
    showError(message, lineNumber);
  }
};

const firstConnect = () => {
  connected = true;
  const file = (curState ? curState.file : null) || "[unknown]";
  notify(`✨ Connected to ${file}`, {
    timeout: Infinity,
    button: {
      text: "🎲",
      action() {
        randomizeSeed();
        reDraw(false);
        return false;
      },
    },
    onDequeue: (reason) => {
      exit(quitMessage);
    },
  });
};

function findCanvas(expectedHash) {
  return figma.currentPage.findOne((node) => {
    const str = node.getPluginData("sketch");
    if (str) {
      try {
        const data = JSON.parse(str);
        return data.hash === expectedHash;
      } catch (err) {
        return false;
      }
    } else return false;
  });
}

function getCanvas(useOldSeed = true) {
  const expectedHash = curState.hash;
  let doc = findCanvas(expectedHash);

  if (!doc) {
    const frame = figma.createFrame();
    frame.resize(1024, 1024);
    doc = frame;
  } else {
    if (useOldSeed) {
      // doc exists, pull its seed
      try {
        const data = JSON.parse(doc.getPluginData("sketch"));
        if (data.seed) {
          setSeed(data.seed);
        }
      } catch (err) {}
    }
  }

  const curStateWithSeed = Object.assign({}, curState, { seed: getSeed() });
  doc.setPluginData("sketch", JSON.stringify(curStateWithSeed));
  doc.name = curStateWithSeed.name;
  // doc.name = `${curStateWithSeed.name}-${curStateWithSeed.seed}`;
  const oldSel = figma.currentPage.selection;
  if (!oldSel.includes(doc)) {
    figma.currentPage.selection = [doc];
    figma.viewport.scrollAndZoomIntoView([doc]);
  }
  return doc;
}

function draw(fn, useOldSeed = true) {
  const doc = getCanvas(useOldSeed);
  for (const child of doc.children) {
    child.remove();
  }

  const { width, height } = doc;
  const context = createContext(doc, { width, height });
  fn({ context, width, height });
  doc.expanded = false;
}

async function run() {
  patchMath();
  figma.on("close", () => {
    unpatchMath();
  });

  figma.showUI(__html__, { visible: false });
  figma.ui.onmessage = (msg) => {
    if (msg.type === "disconnect") {
      exit(`⚠️ ${msg.reason}`);
    } else if (msg.type === "error") {
      exit(`⚠️ ${msg.reason}`);
    } else if (msg.type === "update") {
      curState = Object.assign({}, msg);
      if (!connected) {
        firstConnect();
      }
      reDraw();
    }
  };
}

run();
