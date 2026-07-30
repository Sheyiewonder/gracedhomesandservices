const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const INPUT = path.join(__dirname, "../../../public/logo/IMG_5711.png");
const OUTPUT = path.join(__dirname, "../src/app/icon.png");

async function createFavicon() {
  if (!fs.existsSync(INPUT)) {
    throw new Error(`Logo not found:\n${INPUT}`);
  }

  await sharp(INPUT)
    .resize(512, 512, {
      fit: "cover",
      position: "centre",
    })
    .png()
    .toFile(OUTPUT);

  console.log("✅ Favicon created!");
}

createFavicon().catch(console.error);