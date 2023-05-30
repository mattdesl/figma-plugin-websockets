# figma-plugin-websockets

A proof of concept connecting a Node.js server to Figma via local websockets. This allows for certain applications like live-coding JavaScript and piping the results to a Figma renderer, allowing for some interesting generative workflows.

See [this teaser video](https://twitter.com/mattdesl/status/1661877697533059074).

How it works:

1. A Node.js server is opened at a specific port on localhost.
2. A Figma plugin creates a new UI thread that connects a WebSocket to that localhost port.
3. The Node server watches for file changes to a given file, and sends the code to the Figma plugin's main thread to evaluate it as a rendered set of objects (frames, rectangles, shapes).

This creates a two-way communication and allows for other interesting features. The plugin UI is currently hidden, but you could imagine it to include buttons such as "Export Metadata" (random seed, code) or "Export GIF/MP4" (spawning an `ffmpeg` process locally).

## Setup

### 1. Clone this repository and run the server

When you first clone this repo, you will need to install the dependencies:

```sh
cd figma-plugin-websockets

# install deps
npm install
```

To start developing, enter the following command on any JS file:

```sh
node . test/sketch.js
```

You should see `Listening on port 19407` in your terminal.

### 2. Add the plugin into Figma

In a new Figma document _using the desktop application_, open the Quick Actions bar with `Command + P` (macOS) or `Control + P` (Windows), and start typing `Import Plugin`. Choose the `Import Plugin from Manifest...` item and find the `manifest.json` in the repository folder you cloned in Step 1.

### 3. Run the plugin

Once imported into Figma, it will appear in your Plugins panel under the `Development` drop-down, with the name of `LocalWebsockets`. In a fresh Figma document, click the Run button next to this plugin to create a new websocket-connected frame in your document.

Now you can make changes to `test/sketch.js` or whatever file you are editing, and it will be reflected in the Figma document as actual vector objects (rectangles, ellipses, etc). You can click the 🎲 button to re-roll the random seed. Click the "X" to quit the plugin.

### 4. (Optional) Develop the Plugin

If you want to further modify or develop the plugin, you'll need to run the build watcher in another terminal tab:

```sh
npm run plugin:dev
```

Now you can edit the `src/plugin.js` file and it will create a new `dist/plugin.js` file. When you modify the plugin, you will need to close and re-run it in Figma to see the new changes.

## Limitations

The main trouble is that evaluating the script has to happen in the main thread, which exposes some problems around debugging (error logging, lack of source maps, memory leaks) and security.

## Security Implications

There may be some security implications by opening a websocket on localhost and communicating with Figma in this way. Feel free to open an issue if you think you could describe a scenario that might lead to a problem for the user.

In addition to potential risks of exposing your local system to Figma, there may be a case where you are running some untrusted code in your user script (whether directly or without realizing it, such as a third-party dependency you have imported), and it does something nefarious with the `figma` global variable that exists due to the script running in Figma's main thread.

## License

All source here is MIT licensed.
