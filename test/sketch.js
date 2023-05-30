import Color from "canvas-sketch-util/color.js";
import { range as randomRange } from "canvas-sketch-util/random.js";

// simple HSL to hex color util
const hsl = (hue, sat, light) => Color.parse({ hsl: [hue, sat, light] }).hex;

export default function main({ context, width, height }) {
  const baseHue = Math.random() * 360;
  const margin = width * 0.2;

  const newColor = () => {
    const hue = baseHue + randomRange(-1, 1) * 5;
    const sat = 50 + randomRange(-1, 1) * 10;
    const light = 50 + randomRange(-1, 1) * 10;
    return hsl(hue, sat, light);
  };

  context.fillStyle = hsl(baseHue + 90, 25, 80);
  context.fillRect(0, 0, width, height);

  // Draw N dots
  const count = 50;
  for (let i = 0; i < count; i++) {
    const r = width * 0.05;
    context.fillStyle = newColor();
    if (Math.random() > 0.5) {
      context.fillEllipse(
        randomRange(margin, width - margin),
        randomRange(margin, height - margin),
        r
      );
    } else {
      context.fillRect(
        randomRange(margin, width - margin) - r / 2,
        randomRange(margin, height - margin) - r / 2,
        r,
        r
      );
    }
  }
}
