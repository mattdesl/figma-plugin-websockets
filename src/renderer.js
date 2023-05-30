import Color from "canvas-sketch-util/color.js";

export default function createContext(frame, { width, height }) {
  let _fillStyle = { r: 0, g: 0, b: 0 };

  const context = {
    get fillStyle() {
      return _fillStyle;
    },
    set fillStyle(f) {
      try {
        if (typeof f !== "string") f = f.toString();
        const [r, g, b] = Color.parse(f).rgb.map((n) => n / 0xff);
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
    },
  };

  return context;
}
