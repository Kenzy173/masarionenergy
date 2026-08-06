/* Recolor the logo wordmark: MASARION -> brand green, ENERGY -> brand gold. */
const sharp = require("sharp");
const path = require("path");

const FULL = path.join(__dirname, "..", "public/images/masarion-logo.png");
const SM = path.join(__dirname, "..", "public/images/masarion-logo-sm.png");
const WHITE = path.join(__dirname, "..", "public/images/masarion-logo-white.png");
const WHITE_SM = path.join(__dirname, "..", "public/images/masarion-logo-white-sm.png");

const GREEN = [8, 40, 24];   // #082818
const GOLD = [216, 152, 24]; // #d89818

// Wordmark regions (from content-run detection): MASARION = 379-745, ENERGY = 750-1043
const MASARION = [379, 745];
const ENERGY = [750, 1043];

async function recolor(src, out, fn) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const px = Buffer.from(data);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      if (px[i + 3] < 20) continue;
      const c = fn(x);
      if (c) {
        px[i] = c[0];
        px[i + 1] = c[1];
        px[i + 2] = c[2];
      }
    }
  }
  await sharp(Buffer.from(px), { raw: { width: W, height: H, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
}

function inRange(x, [a, b]) {
  return x >= a && x <= b;
}

async function main() {
  await recolor(FULL, FULL, (x) => {
    if (inRange(x, MASARION)) return GREEN;
    if (inRange(x, ENERGY)) return GOLD;
    return null;
  });

  // Regenerate small version from the recolored full logo
  const meta = await sharp(FULL).metadata();
  const h = 96;
  const w = Math.round((meta.width / meta.height) * h);
  await sharp(FULL).resize(w, h).png({ compressionLevel: 9 }).toFile(SM);

  // Regenerate white versions (silhouette) from the recolored logo
  const toWhite = async (src, out) => {
    const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const px = Buffer.from(data);
    for (let i = 0; i < px.length; i += 4) {
      if (px[i + 3] > 0) { px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; }
    }
    await sharp(Buffer.from(px), { raw: { width: info.width, height: info.height, channels: 4 } })
      .png({ compressionLevel: 9 })
      .toFile(out);
  };
  await toWhite(FULL, WHITE);
  const wmeta = await sharp(WHITE).metadata();
  const wh = 96;
  const ww = Math.round((wmeta.width / wmeta.height) * wh);
  await sharp(WHITE).resize(ww, wh).png({ compressionLevel: 9 }).toFile(WHITE_SM);

  console.log("recolored logo + regenerated sm/white variants");
}

main().catch((e) => { console.error(e); process.exit(1); });
