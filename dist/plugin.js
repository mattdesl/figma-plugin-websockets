(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/canvas-sketch-util/lib/css-color-names.json
  var require_css_color_names = __commonJS({
    "node_modules/canvas-sketch-util/lib/css-color-names.json"(exports, module) {
      module.exports = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
    }
  });

  // node_modules/float-hsl2rgb/index.js
  var require_float_hsl2rgb = __commonJS({
    "node_modules/float-hsl2rgb/index.js"(exports, module) {
      module.exports = hsl2rgb;
      function hsl2rgb(hsl) {
        var h = hsl[0], s = hsl[1], l = hsl[2], t1, t2, t3, rgb, val;
        if (s === 0) {
          val = l;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        t1 = 2 * l - t2;
        rgb = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val;
        }
        return rgb;
      }
    }
  });

  // node_modules/float-rgb2hsl/index.js
  var require_float_rgb2hsl = __commonJS({
    "node_modules/float-rgb2hsl/index.js"(exports, module) {
      module.exports = rgb2hsl;
      function rgb2hsl(rgb) {
        var r = rgb[0], g = rgb[1], b = rgb[2], min = Math.min(r, g, b), max = Math.max(r, g, b), delta = max - min, h, s, l;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h / 360, s, l];
      }
    }
  });

  // node_modules/canvas-sketch-util/lib/wrap.js
  var require_wrap = __commonJS({
    "node_modules/canvas-sketch-util/lib/wrap.js"(exports, module) {
      module.exports = wrap;
      function wrap(value, from, to) {
        if (typeof from !== "number" || typeof to !== "number") {
          throw new TypeError('Must specify "to" and "from" arguments as numbers');
        }
        if (from > to) {
          var t = from;
          from = to;
          to = t;
        }
        var cycle = to - from;
        if (cycle === 0) {
          return to;
        }
        return value - cycle * Math.floor((value - from) / cycle);
      }
    }
  });

  // node_modules/canvas-sketch-util/lib/hsl.js
  var require_hsl = __commonJS({
    "node_modules/canvas-sketch-util/lib/hsl.js"(exports, module) {
      var floatHSL2RGB = require_float_hsl2rgb();
      var floatRGB2HSL = require_float_rgb2hsl();
      var wrap = require_wrap();
      module.exports.RGBAToHSLA = RGBAToHSLA;
      function RGBAToHSLA(rgba) {
        var floatHSL = floatRGB2HSL([rgba[0] / 255, rgba[1] / 255, rgba[2] / 255]);
        return [
          Math.max(0, Math.min(360, Math.round(floatHSL[0] * 360))),
          Math.max(0, Math.min(100, Math.round(floatHSL[1] * 100))),
          Math.max(0, Math.min(100, Math.round(floatHSL[2] * 100))),
          rgba[3]
        ];
      }
      module.exports.HSLAToRGBA = HSLAToRGBA;
      function HSLAToRGBA(hsla) {
        var hue = wrap(hsla[0], 0, 360);
        var floatRGB = floatHSL2RGB([hue / 360, hsla[1] / 100, hsla[2] / 100]);
        return [
          Math.max(0, Math.min(255, Math.round(floatRGB[0] * 255))),
          Math.max(0, Math.min(255, Math.round(floatRGB[1] * 255))),
          Math.max(0, Math.min(255, Math.round(floatRGB[2] * 255))),
          hsla[3]
        ];
      }
    }
  });

  // node_modules/canvas-sketch-util/lib/hex-to-rgba.js
  var require_hex_to_rgba = __commonJS({
    "node_modules/canvas-sketch-util/lib/hex-to-rgba.js"(exports, module) {
      module.exports = hexToRGBA;
      function hexToRGBA(str) {
        if (typeof str !== "string") {
          throw new TypeError("Hex code parsing must be performed on a string parameter");
        }
        str = str.toLowerCase();
        if (!/^#[a-f0-9]+$/.test(str)) {
          return null;
        }
        var hex = str.replace(/^#/, "");
        var alpha = 1;
        if (hex.length === 8) {
          alpha = parseInt(hex.slice(6, 8), 16) / 255;
          hex = hex.slice(0, 6);
        }
        if (hex.length === 4) {
          alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
          hex = hex.slice(0, 3);
        }
        if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var num = parseInt(hex, 16);
        var red = num >> 16;
        var green = num >> 8 & 255;
        var blue = num & 255;
        return [red, green, blue, alpha];
      }
    }
  });

  // node_modules/canvas-sketch-util/lib/rgba-to-hex.js
  var require_rgba_to_hex = __commonJS({
    "node_modules/canvas-sketch-util/lib/rgba-to-hex.js"(exports, module) {
      module.exports = rgbaToHex;
      function rgbaToHex(rgba) {
        if (!rgba || !Array.isArray(rgba)) {
          throw new TypeError("Must specify an array to convert into a hex code");
        }
        var r = Math.max(0, Math.min(255, Math.round(rgba[0] || 0)));
        var g = Math.max(0, Math.min(255, Math.round(rgba[1] || 0)));
        var b = Math.max(0, Math.min(255, Math.round(rgba[2] || 0)));
        var alpha = rgba[3];
        if (typeof alpha === "undefined" || !isFinite(alpha)) {
          alpha = 1;
        }
        var a = Math.max(0, Math.min(255, Math.round(alpha * 255)));
        var alphaParam = a === 255 ? "" : (a | 1 << 8).toString(16).slice(1);
        var result = (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1) + alphaParam;
        return "#" + result;
      }
    }
  });

  // node_modules/canvas-sketch-util/lib/css-color.js
  var require_css_color = __commonJS({
    "node_modules/canvas-sketch-util/lib/css-color.js"(exports, module) {
      var names = require_css_color_names();
      var HSLUtil = require_hsl();
      var hexToRGBA = require_hex_to_rgba();
      var RGBAToHex = require_rgba_to_hex();
      var wrap = require_wrap();
      function parseStyle(str) {
        if (typeof str !== "string") {
          throw new TypeError("Color parsing must be performed on a string parameter");
        }
        str = str.toLowerCase();
        if (str in names) {
          str = names[str];
        } else if (str === "transparent") {
          str = "#00000000";
        }
        var rgba, hsla, hex;
        if (/^#[a-f0-9]+$/.test(str)) {
          rgba = hexToRGBA(str);
          hex = RGBAToHex(rgba);
          hsla = HSLUtil.RGBAToHSLA(rgba);
        } else {
          var match = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/.exec(str);
          if (!match)
            return null;
          var type = match[1].replace(/a$/, "");
          var parts = match[2].replace(/^\s+|\s+$/g, "").split(/\s*,\s*/).map(function(n, i) {
            if (i <= 2)
              return Math.round(parseFloat(n) || 0);
            else {
              n = parseFloat(n);
              if (typeof n !== "number" || !isFinite(n))
                n = 1;
              return n;
            }
          });
          if (typeof parts[3] === "undefined" || !isFinite(parts[3])) {
            parts[3] = 1;
          }
          if (type === "rgb") {
            hsla = HSLUtil.RGBAToHSLA(parts);
            rgba = parts;
          } else if (type === "hsl") {
            rgba = HSLUtil.HSLAToRGBA(parts);
            parts[0] = wrap(parts[0], 0, 360);
            hsla = parts;
          }
          hex = RGBAToHex(rgba);
        }
        if (!rgba && !hex && !hsla)
          return null;
        var ret = {
          hex,
          alpha: rgba[3],
          rgb: rgba.slice(0, 3),
          rgba,
          hsl: hsla.slice(0, 3),
          hsla
        };
        return ret;
      }
      module.exports.parse = parseColor;
      function parseColor(color) {
        if (typeof color === "string") {
          return parseStyle(color);
        } else if (Array.isArray(color) && color.length >= 3) {
          var rgbStr = rgbStyle(color[0], color[1], color[2], color[3]);
          return parseStyle(rgbStr);
        } else if (color && typeof color === "object") {
          var str;
          if (color.hex)
            str = color.hex;
          else if (color.rgba)
            str = rgbStyle(color.rgba[0], color.rgba[1], color.rgba[2], color.rgba[3]);
          else if (color.hsla)
            str = hslStyle(color.hsla[0], color.hsla[1], color.hsla[2], color.hsla[3]);
          else if (color.rgb)
            str = rgbStyle(color.rgb[0], color.rgb[1], color.rgb[2]);
          else if (color.hsl)
            str = hslStyle(color.hsl[0], color.hsl[1], color.hsl[2]);
          if (str)
            return parseStyle(str);
        }
        return null;
      }
      module.exports.style = style;
      function style(color) {
        var result = module.exports.parse(color);
        if (result) {
          var rgba = result.rgba;
          return rgbStyle(rgba[0], rgba[1], rgba[2], rgba[3]);
        }
        return null;
      }
      function rgbStyle(r, g, b, a) {
        r = Math.max(0, Math.min(255, Math.round(r)));
        g = Math.max(0, Math.min(255, Math.round(g)));
        b = Math.max(0, Math.min(255, Math.round(b)));
        if (a === 1 || !isFinite(a) || typeof a === "undefined") {
          return "rgb(" + [r, g, b].join(", ") + ")";
        } else {
          a = Math.max(0, Math.min(1, a));
          return "rgba(" + [r, g, b, a].join(", ") + ")";
        }
      }
      function hslStyle(h, s, l, a) {
        h = wrap(h, 0, 360);
        h = Math.max(0, Math.min(360, Math.round(h)));
        s = Math.max(0, Math.min(100, Math.round(s)));
        l = Math.max(0, Math.min(100, Math.round(l)));
        if (a === 1 || !isFinite(a) || typeof a === "undefined") {
          return "hsl(" + [h, s, l].join(", ") + ")";
        } else {
          a = Math.max(0, Math.min(1, a));
          return "hsla(" + [h, s, l, a].join(", ") + ")";
        }
      }
    }
  });

  // node_modules/canvas-sketch-util/lib/relative-luminance.js
  var require_relative_luminance = __commonJS({
    "node_modules/canvas-sketch-util/lib/relative-luminance.js"(exports, module) {
      var rc = 0.2126;
      var gc = 0.7152;
      var bc = 0.0722;
      var lowc = 1 / 12.92;
      function adjustGamma(a) {
        return Math.pow((a + 0.055) / 1.055, 2.4);
      }
      module.exports = relativeLuminance;
      function relativeLuminance(rgb) {
        var rsrgb = rgb[0] / 255;
        var gsrgb = rgb[1] / 255;
        var bsrgb = rgb[2] / 255;
        var r = rsrgb <= 0.03928 ? rsrgb * lowc : adjustGamma(rsrgb);
        var g = gsrgb <= 0.03928 ? gsrgb * lowc : adjustGamma(gsrgb);
        var b = bsrgb <= 0.03928 ? bsrgb * lowc : adjustGamma(bsrgb);
        return r * rc + g * gc + b * bc;
      }
    }
  });

  // node_modules/canvas-sketch-util/color.js
  var require_color = __commonJS({
    "node_modules/canvas-sketch-util/color.js"(exports, module) {
      var cssColor = require_css_color();
      var names = require_css_color_names();
      var rgbLuminance = require_relative_luminance();
      var HSLUtil = require_hsl();
      var hexToRGBA = require_hex_to_rgba();
      var RGBAToHex = require_rgba_to_hex();
      module.exports.parse = cssColor.parse;
      module.exports.style = cssColor.style;
      module.exports.names = names;
      module.exports.relativeLuminance = function relativeLuminance(color) {
        var result = module.exports.parse(color);
        if (!result)
          return null;
        return rgbLuminance(result.rgb);
      };
      module.exports.contrastRatio = function contrastRatio(colorA, colorB) {
        var a = module.exports.relativeLuminance(colorA);
        var b = module.exports.relativeLuminance(colorB);
        if (a == null || b == null)
          return null;
        var l1 = Math.max(a, b);
        var l2 = Math.min(a, b);
        return (l1 + 0.05) / (l2 + 0.05);
      };
      module.exports.offsetHSL = function(color, h, s, l) {
        var result = module.exports.parse(color);
        if (!result)
          return null;
        result.hsla[0] += h || 0;
        result.hsla[1] = Math.max(0, Math.min(100, result.hsla[1] + (s || 0)));
        result.hsla[2] = Math.max(0, Math.min(100, result.hsla[2] + (l || 0)));
        return module.exports.parse({ hsla: result.hsla });
      };
      module.exports.blend = function(background, foreground, opacity) {
        var bg = module.exports.parse(background);
        var fg = module.exports.parse(foreground);
        if (bg == null || fg == null)
          return null;
        var c0 = bg.rgba;
        var c1 = fg.rgba;
        opacity = typeof opacity === "number" && isFinite(opacity) ? opacity : 1;
        var alpha = opacity * c1[3];
        if (alpha >= 1) {
          return fg;
        }
        for (var i = 0; i < 3; i++) {
          c1[i] = c1[i] * alpha + c0[i] * (c0[3] * (1 - alpha));
        }
        c1[3] = Math.max(0, Math.min(1, alpha + c0[3] * (1 - alpha)));
        return module.exports.parse(c1);
      };
      module.exports.hexToRGBA = hexToRGBA;
      module.exports.RGBAToHex = RGBAToHex;
      module.exports.RGBAToHSLA = HSLUtil.RGBAToHSLA;
      module.exports.HSLAToRGBA = HSLUtil.HSLAToRGBA;
    }
  });

  // src/renderer.js
  var import_color = __toESM(require_color(), 1);
  function createContext(frame, { width, height }) {
    let _fillStyle = { r: 0, g: 0, b: 0 };
    const context = {
      get fillStyle() {
        return _fillStyle;
      },
      set fillStyle(f) {
        try {
          if (typeof f !== "string")
            f = f.toString();
          const [r, g, b] = import_color.default.parse(f).rgb.map((n) => n / 255);
          _fillStyle = { r, g, b };
        } catch (err) {
          _fillStyle = { r: 0, g: 0, b: 0 };
        }
      },
      fillRect(x, y, w, h) {
        const child = figma.createRectangle();
        const newColor = Object.assign({}, _fillStyle);
        child.x = x;
        child.y = y;
        child.resize(w, h);
        child.fills = [{ type: "SOLID", color: newColor }];
        frame.appendChild(child);
      },
      fillEllipse(x, y, w, h = w) {
        const child = figma.createEllipse();
        const newColor = Object.assign({}, _fillStyle);
        child.x = x;
        child.y = y;
        child.resize(w, h);
        child.fills = [{ type: "SOLID", color: newColor }];
        frame.appendChild(child);
      }
    };
    return context;
  }

  // src/util.js
  function getRandomHash() {
    let result = "0x";
    for (let i = 64; i > 0; --i)
      result += "0123456789abcdef"[~~(Math.random() * 16)];
    return result;
  }
  var hash;
  var xs_state;
  var originalState;
  var pureMathRandom = Math.random;
  var getSeed = () => hash;
  var setSeed = (h) => {
    hash = h;
    console.log("Random Seed:", hash);
    xs_state = Uint32Array.from(
      [0, 0, 0, 0].map((_, i) => parseInt(hash.substr(i * 8 + 2, 8), 16))
    );
    originalState = xs_state.slice();
  };
  var randomizeSeed = () => {
    setSeed(getRandomHash());
  };
  var prng = () => {
    let s, t = xs_state[3];
    xs_state[3] = xs_state[2];
    xs_state[2] = xs_state[1];
    xs_state[1] = s = xs_state[0];
    t ^= t << 11;
    t ^= t >>> 8;
    xs_state[0] = t ^ s ^ s >>> 19;
    return xs_state[0] / 4294967296;
  };
  function patchMath() {
    Math.random = () => prng();
  }
  function unpatchMath() {
    Math.random = pureMathRandom;
  }
  var reseed = () => {
    xs_state.set(originalState);
  };
  randomizeSeed();

  // src/plugin.js
  var quitMessage = "Plugin closed";
  var message;
  var msgTimeout;
  var notify = (msg, opts = {}) => {
    if (message && message.cancel) {
      message.cancel();
    }
    clearTimeout(msgTimeout);
    msgTimeout = setTimeout(() => {
      message = figma.notify(msg, opts);
    }, 0);
  };
  var exit = (msg) => figma.closePlugin(msg);
  var connected = false;
  var hasError = false;
  var curState;
  var showError = (message2, lineNumber) => {
    hasError = true;
    connected = false;
    notify(`Script Error: ${message2} on line ${lineNumber}`, {
      error: true,
      timeout: Infinity,
      onDequeue: (reason) => {
        exit(quitMessage);
      }
    });
  };
  var reDraw = (useOldSeed = true) => {
    if (curState && curState.error) {
      const { lineNumber, message: message2 } = curState.error;
      showError(message2, lineNumber);
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
      const { lineNumber, message: message2 } = err;
      console.error("Error evaluating script:");
      console.error(err.message);
      console.error(err.stack);
      showError(message2, lineNumber);
    }
  };
  var firstConnect = () => {
    connected = true;
    const file = (curState ? curState.file : null) || "[unknown]";
    notify(`\u2728 Connected to ${file}`, {
      timeout: Infinity,
      button: {
        text: "\u{1F3B2}",
        action() {
          randomizeSeed();
          reDraw(false);
          return false;
        }
      },
      onDequeue: (reason) => {
        exit(quitMessage);
      }
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
      } else
        return false;
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
        try {
          const data = JSON.parse(doc.getPluginData("sketch"));
          if (data.seed) {
            setSeed(data.seed);
          }
        } catch (err) {
        }
      }
    }
    const curStateWithSeed = Object.assign({}, curState, { seed: getSeed() });
    doc.setPluginData("sketch", JSON.stringify(curStateWithSeed));
    doc.name = curStateWithSeed.name;
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
        exit(`\u26A0\uFE0F ${msg.reason}`);
      } else if (msg.type === "error") {
        exit(`\u26A0\uFE0F ${msg.reason}`);
      } else if (msg.type === "update") {
        curState = Object.assign({}, msg);
        if (!connected) {
          firstConnect();
        }
        reDraw(true);
      }
    };
  }
  run();
})();
