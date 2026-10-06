import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images");

const files = {
  "10757074": "crockery/ceramic-pitcher-wooden-table.webp",
  "10178158": "crockery/ceramic-pitcher-and-cup.webp",
  "27868308": "crockery/ceramic-pitchers-windowsill.webp",
  "3847482": "crockery/ceramic-serving-platter-top-view.webp",
  "3847438": "crockery/colorful-ceramic-plates-top-view.webp",
  "3847465": "crockery/ceramic-plates-mugs-bowls-flat-lay.webp",
  "3991973": "crockery/ceramic-dinnerware-window-light.webp",
  "3847451": "crockery/colorful-ceramic-bowls-and-plates.webp",
  "3847437": "crockery/emerald-ceramic-plate.webp",
  "3847434": "crockery/artisan-ceramic-plates-flat-lay.webp",
  "8208337": "crockery/ceramic-teacup-and-saucer.webp",
  "6739690": "crockery/ceramic-nesting-bowls.webp",
  "14341974": "crockery/arranging-white-ceramic-bowls.webp",
  "11065504": "crockery/white-ceramic-mug-bowl-plate.webp",
  "1591146": "crockery/floral-ceramic-cup-and-saucer.webp",
  "33812567": "crockery/vintage-teacup-wooden-table.webp",
  "25542635": "crockery/floral-teacup-with-coffee.webp",
  "13488937": "crockery/decorative-cup-and-saucer-tray.webp",
  "28606789": "crockery/teacup-in-sunlight.webp",
  "34733198": "craft/artisan-pottery-market.webp",
  "31493651": "craft/ceramics-on-rustic-shelves.webp",
  "33633350": "craft/clay-pots-workshop.webp",
  "8082192": "sanitary/ceramic-wash-basin.webp",
  "8146161": "sanitary/marble-bathroom-double-basins.webp",
  "7511696": "sanitary/ceramic-water-closet.webp",
  "7534276": "bathroom/contemporary-bathroom-basin.webp",
  "6947275": "bathroom/modern-bathroom-fittings.webp",
  "8143715": "bathroom/bathroom-glass-shower.webp",
  "7545857": "bathroom/bright-contemporary-bathroom.webp",
  "6920450": "bathroom/luxury-bathroom-steel-fixtures.webp",
  "21430428": "hardware/metallic-door-hardware.webp",
  "2564866": "hardware/door-pull-handles.webp",
  "11930175": "hardware/iron-ring-hardware.webp",
  "16515": "hardware/stainless-door-handle.webp",
  "6169151": "logistics/fragile-sticker-export-carton.webp",
  "6169020": "logistics/fragile-boxes-steel-shelving.webp",
  "24246926": "logistics/container-ship-harbor.webp",
  "30115463": "logistics/cargo-ship-containers.webp",
  "10834810": "logistics/warehouse-export-cartons.webp",
  "15346128": "logistics/container-terminal-sunset.webp",
};

function sourceUrl(id) {
  if (id === "16515") {
    return "https://images.pexels.com/photos/16515/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1800";
  }
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;
}

async function download(id) {
  const res = await fetch(sourceUrl(id), {
    headers: { "User-Agent": "Mozilla/5.0 AchratExportsImageFetch" },
  });
  if (!res.ok) throw new Error(`${id} HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function saveWebp(buffer, relative, extra) {
  const out = path.join(root, relative);
  await mkdir(path.dirname(out), { recursive: true });
  const image = sharp(buffer).rotate();
  if (extra) image.resize(extra);
  else image.resize({ width: 1600, withoutEnlargement: true });
  await image.webp({ quality: 82, effort: 4 }).toFile(out);
  return out;
}

const ids = Object.keys(files);
let index = 0;
const failures = [];

async function worker() {
  while (index < ids.length) {
    const id = ids[index++];
    try {
      const buffer = await download(id);
      const out = await saveWebp(buffer, files[id]);
      if (id === "14341974") {
        await saveWebp(buffer, "brand/og-cover.webp", { width: 1200, height: 630, fit: "cover", position: "centre" });
      }
      console.log("ok", path.relative(root, out));
    } catch (error) {
      failures.push(`${id}: ${error.message}`);
      console.error("fail", id, error.message);
    }
  }
}

await Promise.all(Array.from({ length: 6 }, () => worker()));
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`saved ${ids.length} webp files`);
