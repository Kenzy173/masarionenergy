/* White + gold logo: white everywhere EXCEPT the inner gold drop is preserved.
   For dark backgrounds (header/footer). */
const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public/images/masarion-logo.png");
const OUT = path.join(__dirname, "..", "public/images/masarion-logo-whitegold.png");
const OUT_SM = path.join(__dirname, "..", "public/images/masarion-logo-whitegold-sm.png");

const WHITE = [255, 255, 255];
const GOLD = [216, 152, 24]; // #d89818

async function main() {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const px = Buffer.from(data);

  let goldKept = 0;
  let whiteSet = 0;
  for (let i = 0; i < px.length; i += 4) {
    if (px[i + 3] < 20) continue;
    const r = px[i], g = px[i + 1], b = px[i + 2];
    // Gold detection: warm/high red, mid green, low blue (the teardrop).
    const isGold = r > 150 && g > 90 && b < 120 && r > g;
    if (isGold) {
      px[i] = GOLD[0]; px[i + 1] = GOLD[1]; px[i + 2] = GOLD[2];
      goldKept++;
    } else {
      px[i] = WHITE[0]; px[i + 1] = WHITE[1]; px[i + 2] = WHITE[2];
      whiteSet++;
    }
  }

  await sharp(Buffer.from(px), { raw: { width: W, height: H, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  const meta = await sharp(OUT).metadata();
  const h = 96;
  const w = Math.round((meta.width / meta.height) * h);
  await sharp(OUT).resize(w, h).png({ compressionLevel: 9 }).toFile(OUT_SM);

  console.log("white+gold logo written; gold pixels:", goldKept, "white:", whiteSet);
}

main().catch((e) => { console.error(e); process.exit(1); });
