/* Remove white background from the pasted logo, export transparent PNG. */
const sharp = require("sharp");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "public/images/ChatGPT Image Aug 3, 2026, 01_28_25 PM.png"
);
const OUT = path.join(__dirname, "..", "public/images/masarion-logo.png");

async function main() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const px = Buffer.from(data); // RGBA
  const idx = (x, y) => (y * W + x) * 4;

  const isWhiteish = (x, y) => {
    const i = idx(x, y);
    const r = px[i], g = px[i + 1], b = px[i + 2];
    return (
      r >= 230 && g >= 230 && b >= 230 &&
      Math.max(r, g, b) - Math.min(r, g, b) < 35
    );
  };

  // Flood fill from the borders through white-ish pixels.
  const removed = new Uint8Array(W * H);
  const stack = [];
  for (let x = 0; x < W; x++) { stack.push([x, 0], [x, H - 1]); }
  for (let y = 0; y < H; y++) { stack.push([0, y], [W - 1, y]); }
  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= W || y >= H) continue;
    const n = y * W + x;
    if (removed[n]) continue;
    if (!isWhiteish(x, y)) continue;
    removed[n] = 1;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  // Soft halo cleanup: lighten remaining near-white edge pixels.
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const n = y * W + x;
      if (removed[n]) {
        px[n * 4 + 3] = 0;
        continue;
      }
      const i = idx(x, y);
      const r = px[i], g = px[i + 1], b = px[i + 2];
      const whiteness = Math.min(r, g, b);
      const spread = Math.max(r, g, b) - whiteness;
      if (whiteness > 150 && spread < 60) {
        // Blend against a white background: higher whiteness => more transparent.
        let a = (255 - whiteness) / 105; // 255 -> 0, 150 -> 1
        a = Math.max(0, Math.min(1, a));
        if (a < 0.04) a = 0;
        px[i + 3] = Math.round(a * 255);
      }
    }
  }

  await sharp(Buffer.from(px), { raw: { width: W, height: H, channels: 4 } })
    .trim()
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  const meta = await sharp(OUT).metadata();
  console.log(
    "wrote", OUT,
    meta.width + "x" + meta.height,
    "alpha:", meta.hasAlpha,
    "size:", Math.round(meta.size / 1024) + "KB"
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
