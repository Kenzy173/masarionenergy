/* Confine the gold to the inner drop of the icon + the word ENERGY.
   Outer flame and MASARION stay dark green. */
const sharp = require("sharp");
const path = require("path");

const FULL = path.join(__dirname, "..", "public/images/masarion-logo.png");
const SM = path.join(__dirname, "..", "public/images/masarion-logo-sm.png");
const WHITE = path.join(__dirname, "..", "public/images/masarion-logo-white.png");
const WHITE_SM = path.join(__dirname, "..", "public/images/masarion-logo-white-sm.png");

const GREEN = [8, 40, 24];   // #082818
const GOLD = [216, 152, 24]; // #d89818

const IW = 264; // icon region width
const THRESHOLD = Number(process.argv[2]) || 16; // inner-core distance (px from edge)

async function main() {
  const { data, info } = await sharp(FULL).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const px = Buffer.from(data);

  // --- Chamfer distance transform (3-4) over the icon region [0..IW-1][0..H-1]
  const INF = 1e9;
  const d = new Int32Array(IW * H).fill(INF);
  const opaque = (x, y) => {
    const xc = x; // icon region starts at x=0
    if (xc < 0 || xc >= IW || y < 0 || y >= H) return 0;
    return px[(y * W + xc) * 4 + 3] > 20 ? 1 : 0;
  };
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < IW; x++) {
      if (!opaque(x, y)) { d[y * IW + x] = 0; continue; }
      const a = x > 0 ? d[y * IW + x - 1] + 3 : INF;
      const b = y > 0 ? d[(y - 1) * IW + x] + 3 : INF;
      const c = x > 0 && y > 0 ? d[(y - 1) * IW + x - 1] + 4 : INF;
      const e = x < IW - 1 && y > 0 ? d[(y - 1) * IW + x + 1] + 4 : INF;
      d[y * IW + x] = Math.min(a, b, c, e);
    }
  }
  for (let y = H - 1; y >= 0; y--) {
    for (let x = IW - 1; x >= 0; x--) {
      if (!opaque(x, y)) { d[y * IW + x] = 0; continue; }
      const a = x < IW - 1 ? d[y * IW + x + 1] + 3 : INF;
      const b = y < H - 1 ? d[(y + 1) * IW + x] + 3 : INF;
      const c = x < IW - 1 && y < H - 1 ? d[(y + 1) * IW + x + 1] + 4 : INF;
      const e = x > 0 && y < H - 1 ? d[(y + 1) * IW + x - 1] + 4 : INF;
      d[y * IW + x] = Math.min(d[y * IW + x], a, b, c, e);
    }
  }

  // Apply: within the icon region, keep gold only in the inner core
  let goldCount = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < IW; x++) {
      const i = (y * W + x) * 4;
      if (px[i + 3] < 20) continue;
      if (d[y * IW + x] >= THRESHOLD) {
        px[i] = GOLD[0]; px[i + 1] = GOLD[1]; px[i + 2] = GOLD[2];
        goldCount++;
      } else {
        px[i] = GREEN[0]; px[i + 1] = GREEN[1]; px[i + 2] = GREEN[2];
      }
    }
  }
  console.log("inner gold pixels:", goldCount);

  await sharp(Buffer.from(px), { raw: { width: W, height: H, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(FULL);

  // Regenerate small + white variants
  const meta = await sharp(FULL).metadata();
  const h = 96;
  const w = Math.round((meta.width / meta.height) * h);
  await sharp(FULL).resize(w, h).png({ compressionLevel: 9 }).toFile(SM);

  const toWhite = async (src, out) => {
    const { data, info: i2 } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const p2 = Buffer.from(data);
    for (let k = 0; k < p2.length; k += 4) {
      if (p2[k + 3] > 0) { p2[k] = 255; p2[k + 1] = 255; p2[k + 2] = 255; }
    }
    await sharp(Buffer.from(p2), { raw: { width: i2.width, height: i2.height, channels: 4 } })
      .png({ compressionLevel: 9 })
      .toFile(out);
  };
  await toWhite(FULL, WHITE);
  const wmeta = await sharp(WHITE).metadata();
  const wh = 96;
  const ww = Math.round((wmeta.width / wmeta.height) * wh);
  await sharp(WHITE).resize(ww, wh).png({ compressionLevel: 9 }).toFile(WHITE_SM);

  console.log("done: gold confined to inner drop + ENERGY; variants regenerated");
}

main().catch((e) => { console.error(e); process.exit(1); });
