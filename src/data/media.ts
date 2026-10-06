/**
 * Local WebP library. Files live in /public/images.
 * `photo(id)` resolves a catalogue id to its public path.
 */

const FILES = {
  "10757074": "/images/crockery/ceramic-pitcher-wooden-table.webp",
  "10178158": "/images/crockery/ceramic-pitcher-and-cup.webp",
  "27868308": "/images/crockery/ceramic-pitchers-windowsill.webp",
  "3847482": "/images/crockery/ceramic-serving-platter-top-view.webp",
  "3847438": "/images/crockery/colorful-ceramic-plates-top-view.webp",
  "3847465": "/images/crockery/ceramic-plates-mugs-bowls-flat-lay.webp",
  "3991973": "/images/crockery/ceramic-dinnerware-window-light.webp",
  "3847451": "/images/crockery/colorful-ceramic-bowls-and-plates.webp",
  "3847437": "/images/crockery/emerald-ceramic-plate.webp",
  "3847434": "/images/crockery/artisan-ceramic-plates-flat-lay.webp",
  "8208337": "/images/crockery/ceramic-teacup-and-saucer.webp",
  "6739690": "/images/crockery/ceramic-nesting-bowls.webp",
  "14341974": "/images/crockery/arranging-white-ceramic-bowls.webp",
  "11065504": "/images/crockery/white-ceramic-mug-bowl-plate.webp",
  "1591146": "/images/crockery/floral-ceramic-cup-and-saucer.webp",
  "33812567": "/images/crockery/vintage-teacup-wooden-table.webp",
  "25542635": "/images/crockery/floral-teacup-with-coffee.webp",
  "13488937": "/images/crockery/decorative-cup-and-saucer-tray.webp",
  "28606789": "/images/crockery/teacup-in-sunlight.webp",
  "34733198": "/images/craft/artisan-pottery-market.webp",
  "31493651": "/images/craft/ceramics-on-rustic-shelves.webp",
  "33633350": "/images/craft/clay-pots-workshop.webp",
  "8082192": "/images/sanitary/ceramic-wash-basin.webp",
  "8146161": "/images/sanitary/marble-bathroom-double-basins.webp",
  "7511696": "/images/sanitary/ceramic-water-closet.webp",
  "7534276": "/images/bathroom/contemporary-bathroom-basin.webp",
  "6947275": "/images/bathroom/modern-bathroom-fittings.webp",
  "8143715": "/images/bathroom/bathroom-glass-shower.webp",
  "7545857": "/images/bathroom/bright-contemporary-bathroom.webp",
  "6920450": "/images/bathroom/luxury-bathroom-steel-fixtures.webp",
  "21430428": "/images/hardware/metallic-door-hardware.webp",
  "2564866": "/images/hardware/door-pull-handles.webp",
  "11930175": "/images/hardware/iron-ring-hardware.webp",
  "16515": "/images/hardware/stainless-door-handle.webp",
  "6169151": "/images/logistics/fragile-sticker-export-carton.webp",
  "6169020": "/images/logistics/fragile-boxes-steel-shelving.webp",
  "24246926": "/images/logistics/container-ship-harbor.webp",
  "30115463": "/images/logistics/cargo-ship-containers.webp",
  "10834810": "/images/logistics/warehouse-export-cartons.webp",
  "15346128": "/images/logistics/container-terminal-sunset.webp",
} as const;

export type PhotoId = keyof typeof FILES;

export const OG_COVER = "/images/brand/og-cover.webp";

export function photo(id: PhotoId): string {
  return FILES[id];
}
