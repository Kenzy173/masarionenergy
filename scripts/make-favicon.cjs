/* Crop the logo to just the oil/flame mark and build the favicon set. */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "public/images/masarion-logo.png");
const MARK = path.join(__dirname, "..", "public/images/masarion-mark.png");
const ICO = path.join(__dirname, "..", "public/favicon.ico");
const ICON_PNG = path.join(__dirname, "..", "public/icon.png");
const APPLE = path.join(__dirname, "..", "public/apple-touch-icon.png");

const CROP_X = 264; // icon spans x 0..262, text starts ~379

async function main() {
  const meta = await sharp(SRC).metadata();

  // Vertical bounds within the icon region
  const { data, info } = await sharp(SRC)
    .extract({ left: 0, top: 0, width: CROP_X, height: meta.height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const px = Buffer.from(data);
  let y0 = -1;
  let y1 = -1;
  for (let y = 0; y < H && y0 < 0; y++) {
    for (let x = 0; x < W; x++) {
      if (px[(y * W + x) * 4 + 3] > 40) { y0 = y; break; }
    }
  }
  for (let y = H - 1; y >= 0 && y1 < 0; y--) {
    for (let x = 0; x < W; x++) {
      if (px[(y * W + x) * 4 + 3] > 40) { y1 = y; break; }
    }
  }
  const iw = CROP_X;
  const ih = y1 - y0 + 1;
  console.log("icon bbox:", iw, "x", ih, "(y0", y0 + ", y1", y1 + ")");

  // Save the mark (icon only, transparent)
  await sharp(SRC)
    .extract({ left: 0, top: y0, width: iw, height: ih })
    .png({ compressionLevel: 9 })
    .toFile(MARK);

  // Square icon with padding, transparent background
  function squareIcon(size) {
    const pad = Math.round(size * 0.08);
    const content = size - pad * 2;
    return sharp(MARK)
      .resize(content, content, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .extend({
        top: pad, bottom: pad, left: pad, right: pad,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png();
  }

  await squareIcon(512).toFile(ICON_PNG);
  await squareIcon(180).toFile(APPLE);

  // Build favicon.ico with PNG-compressed entries (16/32/48)
  const sizes = [16, 32, 48];
  const buffers = [];
  for (const s of sizes) buffers.push(await squareIcon(s).toBuffer());
  const count = sizes.length;
  const headerSize = 6;
  const dirSize = 16 * count;
  const ico = Buffer.alloc(headerSize + dirSize);
  ico.writeUInt16LE(0, 0);             // reserved
  ico.writeUInt16LE(1, 2);             // type: icon
  ico.writeUInt16LE(count, 4);         // count
  let offset = headerSize + dirSize;
  for (let i = 0; i < count; i++) {
    const b = buffers[i];
    const size = sizes[i];
    const entry = headerSize + i * 16;
    ico.writeUInt8(size >= 256 ? 0 : size, entry);
    ico.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    ico.writeUInt8(0, entry + 2);      // palette
    ico.writeUInt8(0, entry + 3);      // reserved
    ico.writeUInt16LE(1, entry + 4);   // planes
    ico.writeUInt16LE(32, entry + 6);  // bpp
    ico.writeUInt32LE(b.length, entry + 8);
    ico.writeUInt32LE(offset, entry + 12);
    offset += b.length;
  }
  fs.writeFileSync(ICO, Buffer.concat([ico, ...buffers]));
  console.log("wrote", ICO, "sizes:", sizes.join(","));
  console.log("wrote", ICON_PNG, "and", APPLE);
}

main().catch((e) => { console.error(e); process.exit(1); });
