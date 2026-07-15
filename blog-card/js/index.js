const sharp = require("sharp");
const path = require("path");

const SOURCE = path.join(__dirname, "..", "img", "living-room.webp");
const OUT_DIR = path.join(__dirname, "..", "img");
const WIDTHS = [400, 800];

async function run() {
  for (const width of WIDTHS) {
    await sharp(SOURCE)
      .resize({ width })
      .webp({ quality: 70 })
      .toFile(path.join(OUT_DIR, `living-room-${width}.webp`));

    await sharp(SOURCE)
      .resize({ width })
      .jpeg({ quality: 75, mozjpeg: true })
      .toFile(path.join(OUT_DIR, `living-room-${width}.jpeg`));
  }
}

run().catch((err) => {
  console.log(err);
  process.exit(1);
});
