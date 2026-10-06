/**
 * Product catalogue. The single place to add or edit products.
 *
 * HOW TO ADD OR EDIT A PRODUCT:
 * 1. Replace the matching WebP in /public/images (keep the same filename).
 * 2. Add / edit an entry below (slug must be unique, kebab-case).
 * 3. Set showPrice to display "Starting from ₹…", or false for "Price on Request".
 * 4. Redeploy. No database, no admin panel.
 *
 * NOTE: All current photos are royalty-free placeholders. REPLACE WITH REAL PHOTO
 * of each product before go-live. Sanitary-ware & hardware entries marked with
 * [CATALOGUE ENTRY - OWNER TO CONFIRM] are generic listings to review/replace.
 */

import type { CategorySlug } from "@/data/categories";
import { photo } from "@/data/media";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  tagline: string;
  description: string[];
  images: ProductImage[];
  /** When true we show "Starting from priceINR"; when false we show "Price on Request". */
  showPrice: boolean;
  priceINR?: number;
  priceUnit?: string;
  moq?: string;
  hsCode?: string;
  material?: string;
  packaging?: string;
  origin?: string;
  featured?: boolean;
  customizable?: boolean;
}

/** Local WebP in /public/images. Drop a replacement file at the same path to update a photo. */
const px = photo;

const CROCKERY_MOQ = "Low MOQ - on request";
const EXPORT_PACKING = "Export-grade protective packaging";
const ACCESSORY_PACKING = "Standard export packaging";

export const PRODUCTS: Product[] = [
  // ---------------------------------------------------------
  // 1. CERAMIC CROCKERY: signature artisan pieces
  // ---------------------------------------------------------
  {
    slug: "rose-dawn-pitcher",
    name: "Rose Dawn Pitcher",
    category: "ceramic-crockery",
    tagline: "A soft-blush stoneware pitcher for slow mornings",
    description: [
      "A graceful ceramic pitcher finished in a gentle rose-dawn palette that catches morning light beautifully. Hand-finished curves, a comfortable handle and a drip-conscious spout make it as practical as it is photogenic.",
      "Like every piece in our crockery line, the Rose Dawn Pitcher can be produced in your choice of glaze, capacity and branding. Share your brief and we'll shape it to your market.",
    ],
    images: [
      { src: px("10757074"), alt: "Rose Dawn ceramic pitcher on a wooden table" }, // REPLACE WITH REAL PHOTO
      { src: px("10178158"), alt: "Handcrafted ceramic pitcher and cup pairing" }, // REPLACE WITH REAL PHOTO
      { src: px("27868308"), alt: "Ceramic pitchers styled on a window sill" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: true,
    priceINR: 299,
    priceUnit: "piece",
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: true,
    customizable: true,
  },
  {
    slug: "aqua-elegance-fish-shaped-platter",
    name: "Aqua Elegance Fish-Shaped Platter",
    category: "ceramic-crockery",
    tagline: "A sculptural serving platter with coastal charm",
    description: [
      "A showpiece platter sculpted in an elegant fish silhouette and glazed in fresh aqua tones, made for seafood courses, appetisers or as a table centerpiece.",
      "Customise the glaze palette (aqua, seafoam, deep ocean blues or your brand colors), dimensions and packaging to suit retail or HoReCa programs.",
    ],
    images: [
      { src: px("3847482"), alt: "Aqua Elegance fish-shaped ceramic serving platter" }, // REPLACE WITH REAL PHOTO
      { src: px("3847438"), alt: "Colorful ceramic plates and bowls, top view" }, // REPLACE WITH REAL PHOTO
      { src: px("3847465"), alt: "Flat lay of ceramic plates, mugs and bowls" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: true,
    priceINR: 599,
    priceUnit: "piece",
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: true,
    customizable: true,
  },
  {
    slug: "mint-horizon-ceramic-plate",
    name: "Mint Horizon Ceramic Plate",
    category: "ceramic-crockery",
    tagline: "Fresh mint-green dinnerware with a calm gradient rim",
    description: [
      "A dinner plate in a soothing mint-horizon glaze that frames food beautifully. The gently raised rim and balanced weight give it a premium, restaurant-grade hand feel.",
      "Available in matching side plates and bowls so buyers can build full dinnerware programs under one design language.",
    ],
    images: [
      { src: px("3847438"), alt: "Mint Horizon ceramic plate with matching tableware" }, // REPLACE WITH REAL PHOTO
      { src: px("3991973"), alt: "Minimal ceramic dinnerware in soft daylight" }, // REPLACE WITH REAL PHOTO
      { src: px("3847451"), alt: "Ceramic dishes styled on a dining table" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: true,
    priceINR: 299,
    priceUnit: "piece",
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: true,
    customizable: true,
  },
  {
    slug: "emerald-green-ceramic-plate",
    name: "Emerald Green Ceramic Plate",
    category: "ceramic-crockery",
    tagline: "Deep emerald glaze for bold table settings",
    description: [
      "A richly glazed emerald plate that brings depth and drama to the table. The lustrous green surface pairs beautifully with gold-toned cutlery and natural linens.",
      "Ideal for boutique retailers and hospitality buyers; matching pieces and custom shades available on request.",
    ],
    images: [
      { src: px("3847437"), alt: "Emerald green ceramic plate among stacked tableware" }, // REPLACE WITH REAL PHOTO
      { src: px("3847434"), alt: "Artisan ceramic plates flat lay" }, // REPLACE WITH REAL PHOTO
      { src: px("8208337"), alt: "Ceramic cup and saucer on a patterned table" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: true,
    priceINR: 299,
    priceUnit: "piece",
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "serene-ripple-bowl",
    name: "Serene Ripple Bowl",
    category: "ceramic-crockery",
    tagline: "A calm, rippled ceramic bowl for everyday rituals",
    description: [
      "The Serene Ripple Bowl carries a subtle wave texture inspired by still water. It is tactile, calming and endlessly usable for breakfast, snacks or sides.",
      "Produced in your preferred size and glaze family; stack-friendly profiles are available for retail sets.",
    ],
    images: [
      { src: px("6739690"), alt: "Serene Ripple ceramic bowl, minimalist styling" }, // REPLACE WITH REAL PHOTO
      { src: px("14341974"), alt: "Hands arranging white ceramic bowls on linen" }, // REPLACE WITH REAL PHOTO
      { src: px("11065504"), alt: "White ceramic bowl, plate and mug set" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: true,
    priceINR: 499,
    priceUnit: "piece",
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: true,
    customizable: true,
  },
  {
    slug: "pineapple-blossom-bowl",
    name: "Pineapple Blossom Bowl",
    category: "ceramic-crockery",
    tagline: "A tropical statement bowl with blossom detailing",
    description: [
      "A playful statement bowl that blends tropical warmth with blossom motifs, perfect for salads, fruit service or as a décor accent in resort and retail settings.",
      "Custom motifs, colorways and gift-ready packaging can be developed from your reference artwork.",
    ],
    images: [
      { src: px("3847451"), alt: "Pineapple Blossom ceramic bowl styled with tableware" }, // REPLACE WITH REAL PHOTO
      { src: px("3847465"), alt: "Colorful ceramic plates, mugs and bowls flat lay" }, // REPLACE WITH REAL PHOTO
      { src: px("34733198"), alt: "Artisan pottery displayed at a market" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: true,
    priceINR: 599,
    priceUnit: "piece",
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "aurora-glow-mini-ceramic-bowl",
    name: "Aurora Glow Mini Ceramic Bowl",
    category: "ceramic-crockery",
    tagline: "A petite bowl with a luminous aurora glaze",
    description: [
      "A mini bowl glazed in an aurora-inspired glow, made for dips, condiments, desserts or tea-light styling. Small in size, big on shelf appeal.",
      "Excellent as a bundled add-on for dinnerware sets; custom glaze directions welcome.",
    ],
    images: [
      { src: px("3991973"), alt: "Aurora Glow mini ceramic bowl in soft light" }, // REPLACE WITH REAL PHOTO
      { src: px("6739690"), alt: "Minimal ceramic nesting bowls" }, // REPLACE WITH REAL PHOTO
      { src: px("1591146"), alt: "Decorative ceramic cup and saucer on a windowsill" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "hexaforma-touch-of-flowers-plate",
    name: "HexaForma Touch of Flowers Ceramic Plate",
    category: "ceramic-crockery",
    tagline: "Hexagonal geometry softened with floral detailing",
    description: [
      "A design-forward hexagonal plate finished with delicate floral accents, where clean geometry meets handcrafted warmth.",
      "Made for buyers building distinctive, design-led ranges; pattern, palette and finish are fully adaptable.",
    ],
    images: [
      { src: px("3847465"), alt: "HexaForma Touch of Flowers ceramic plate flat lay" }, // REPLACE WITH REAL PHOTO
      { src: px("3847482"), alt: "Assorted ceramic plates styled from above" }, // REPLACE WITH REAL PHOTO
      { src: px("3847438"), alt: "Colorful ceramic dishware arrangement" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: CROCKERY_MOQ,
    material: "Ceramic (stoneware), food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  // --- Classic crockery lines [CATALOGUE ENTRY - OWNER TO CONFIRM] ---
  {
    slug: "classic-tea-set",
    name: "Classic Ceramic Tea Set",
    category: "ceramic-crockery",
    tagline: "Complete tea service with cups, saucers and pot",
    description: [
      "A coordinated ceramic tea service: cups, saucers and teapot in matching glazes. Built for hospitality programs, gifting ranges and retail shelves.",
      "Set composition (6/12/15 pieces), decoration and gift-box packaging can all be tailored to your market.",
    ],
    images: [
      { src: px("8208337"), alt: "Ceramic teacup and saucer from a classic tea set" }, // REPLACE WITH REAL PHOTO
      { src: px("33812567"), alt: "Vintage teacup on a wooden table" }, // REPLACE WITH REAL PHOTO
      { src: px("25542635"), alt: "Floral teacup with coffee on a ledge" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: CROCKERY_MOQ,
    material: "Ceramic, food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "cups-and-saucers-set",
    name: "Cups & Saucers Set",
    category: "ceramic-crockery",
    tagline: "Elegant cup-and-saucer pairs for cafés and retail",
    description: [
      "Balanced, comfortable cups with matching saucers, glazed to order from minimal whites to statement patterns.",
      "HoReCa-grade durability available; mix-and-match programs supported.",
    ],
    images: [
      { src: px("1591146"), alt: "Floral ceramic cup and saucer set" }, // REPLACE WITH REAL PHOTO
      { src: px("13488937"), alt: "Decorative cup and saucer on a tray" }, // REPLACE WITH REAL PHOTO
      { src: px("28606789"), alt: "Teacup in warm sunlight" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: CROCKERY_MOQ,
    material: "Ceramic, food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "everyday-ceramic-mugs",
    name: "Everyday Ceramic Mugs",
    category: "ceramic-crockery",
    tagline: "Sturdy, stackable mugs in custom glazes",
    description: [
      "Dependable everyday mugs with generous handles and stable bases, the workhorse of any tableware range.",
      "Add your artwork, logo decals or signature glazes for private-label programs.",
    ],
    images: [
      { src: px("11065504"), alt: "White ceramic mug with bowl and plate" }, // REPLACE WITH REAL PHOTO
      { src: px("3847465"), alt: "Ceramic mugs among plates and bowls" }, // REPLACE WITH REAL PHOTO
      { src: px("31493651"), alt: "Ceramic mugs and pottery on rustic shelves" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: CROCKERY_MOQ,
    material: "Ceramic, food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "serving-platters-collection",
    name: "Serving Platters Collection",
    category: "ceramic-crockery",
    tagline: "Generous platters for family-style and buffet service",
    description: [
      "Oval and round serving platters in coordinated glaze families, sized from individual plating to banquet service.",
      "Custom dimensions and rim profiles available for hotel and restaurant programs.",
    ],
    images: [
      { src: px("3847434"), alt: "Ceramic serving platters arranged as a flat lay" }, // REPLACE WITH REAL PHOTO
      { src: px("3847438"), alt: "Top view of ceramic plates and bowls" }, // REPLACE WITH REAL PHOTO
      { src: px("14341974"), alt: "Arranging ceramic dishware on a table" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: CROCKERY_MOQ,
    material: "Ceramic, food-safe glaze",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },

  // ---------------------------------------------------------
  // 2. CERAMIC SANITARY WARE [CATALOGUE ENTRY - OWNER TO CONFIRM]
  // ---------------------------------------------------------
  {
    slug: "ceramic-wash-basin",
    name: "Ceramic Wash Basin",
    category: "ceramic-sanitary-ware",
    tagline: "Clean lines, vitrified finish, everyday durability",
    description: [
      "A vitrified ceramic wash basin with a smooth, easy-clean glaze and precise dimensions for straightforward installation.",
      "Available in wall-hung, counter-top and pedestal formats for project and wholesale orders.",
    ],
    images: [
      { src: px("8082192"), alt: "White ceramic wash basin in a modern bathroom" }, // REPLACE WITH REAL PHOTO
      { src: px("7534276"), alt: "Contemporary bathroom with granite counter basin" }, // REPLACE WITH REAL PHOTO
      { src: px("8146161"), alt: "Marble bathroom with double basins" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "Project & wholesale lots",
    material: "Ceramic (vitreous china)",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: true,
    customizable: false,
  },
  {
    slug: "one-piece-water-closet",
    name: "One-Piece Water Closet",
    category: "ceramic-sanitary-ware",
    tagline: "Compact, efficient and export-ready",
    description: [
      "A one-piece ceramic water closet designed for dependable flushing performance and easy maintenance.",
      "Supplied in export lots with protective packaging suitable for long-haul shipping.",
    ],
    images: [
      { src: px("7511696"), alt: "White ceramic water closet in a tiled bathroom" }, // REPLACE WITH REAL PHOTO
      { src: px("6947275"), alt: "Modern bathroom with toilet and shower cabin" }, // REPLACE WITH REAL PHOTO
      { src: px("8143715"), alt: "Contemporary bathroom with glass shower" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "Project & wholesale lots",
    material: "Ceramic (vitreous china)",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: false,
  },
  {
    slug: "pedestal-wash-basin-set",
    name: "Pedestal Wash Basin Set",
    category: "ceramic-sanitary-ware",
    tagline: "A classic full-pedestal basin for residential projects",
    description: [
      "A full-pedestal ceramic basin set, a residential staple combining a generous bowl with a neat, pipe-concealing pedestal.",
    ],
    images: [
      { src: px("8146161"), alt: "Elegant bathroom with pedestal-style basins" }, // REPLACE WITH REAL PHOTO
      { src: px("7545857"), alt: "Bright contemporary bathroom interior" }, // REPLACE WITH REAL PHOTO
      { src: px("8082192"), alt: "Basin with mirror in a marble bathroom" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "Project & wholesale lots",
    material: "Ceramic (vitreous china)",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: false,
  },
  {
    slug: "table-top-basin",
    name: "Table-Top Basin",
    category: "ceramic-sanitary-ware",
    tagline: "A design-forward counter basin for premium bathrooms",
    description: [
      "A counter-top ceramic basin that turns the vanity into a design feature, with crisp profiles and a deep, easy-clean bowl.",
    ],
    images: [
      { src: px("6920450"), alt: "Luxury bathroom with table-top basin and steel fixtures" }, // REPLACE WITH REAL PHOTO
      { src: px("7534276"), alt: "Bathroom with granite counter and basin" }, // REPLACE WITH REAL PHOTO
      { src: px("6947275"), alt: "Minimal bathroom with clean sanitary ware" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "Project & wholesale lots",
    material: "Ceramic (vitreous china)",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: false,
  },

  // ---------------------------------------------------------
  // 3. BATHROOM ACCESSORIES: stainless steel and brass
  //    MOQ: 1 piece · HS Code: 73249000 · Price on request
  // ---------------------------------------------------------
  {
    slug: "toilet-paper-holder",
    name: "Toilet Paper Holder",
    category: "bathroom-accessories",
    tagline: "Rust-resistant holder in polished SS or brass",
    description: [
      "A wall-mounted toilet paper holder in stainless steel or brass with a corrosion-resistant finish: smooth edges, firm grip, easy roll changes.",
      "All bathroom accessories ship from India in standard export packaging with an MOQ of just 1 piece.",
    ],
    images: [
      { src: px("6947275"), alt: "Toilet paper holder in a modern bathroom" }, // REPLACE WITH REAL PHOTO
      { src: px("6920450"), alt: "Bathroom with polished stainless accessories" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "1 piece",
    hsCode: "73249000",
    material: "Stainless steel / Brass",
    packaging: ACCESSORY_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "towel-rack",
    name: "Towel Rack",
    category: "bathroom-accessories",
    tagline: "Multi-bar rack for high-use bathrooms",
    description: [
      "A sturdy wall-mounted towel rack with generous bar spacing for faster drying, engineered to stay firm and bright through years of daily use.",
    ],
    images: [
      { src: px("7534276"), alt: "Chrome towel rack in a granite-finished bathroom" }, // REPLACE WITH REAL PHOTO
      { src: px("8143715"), alt: "Bathroom with glass shower and fittings" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "1 piece",
    hsCode: "73249000",
    material: "Stainless steel / Brass",
    packaging: ACCESSORY_PACKING,
    origin: "India",
    featured: true,
    customizable: true,
  },
  {
    slug: "towel-rod",
    name: "Towel Rod",
    category: "bathroom-accessories",
    tagline: "Single-rod simplicity in gleaming finishes",
    description: [
      "A classic single towel rod in stainless steel or brass, with concealed fixings, solid brackets and a finish that resists humid bathroom air.",
    ],
    images: [
      { src: px("6920450"), alt: "Towel rod and stainless fixtures in a luxury bathroom" }, // REPLACE WITH REAL PHOTO
      { src: px("7545857"), alt: "Elegant bathroom with freestanding tub" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "1 piece",
    hsCode: "73249000",
    material: "Stainless steel / Brass",
    packaging: ACCESSORY_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "double-soap-dish",
    name: "Double Soap Dish",
    category: "bathroom-accessories",
    tagline: "Twin trays with smart drainage",
    description: [
      "A wall-mounted double soap dish with drainage slots that keep bars dry and lasting longer. A practical upgrade for hotels and homes alike.",
    ],
    images: [
      { src: px("8143715"), alt: "Double soap dish beside a glass shower" }, // REPLACE WITH REAL PHOTO
      { src: px("6947275"), alt: "Bathroom fittings in a modern interior" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "1 piece",
    hsCode: "73249000",
    material: "Stainless steel / Brass",
    packaging: ACCESSORY_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "robe-hook",
    name: "Robe Hook",
    category: "bathroom-accessories",
    tagline: "A small detail that feels reassuringly solid",
    description: [
      "A compact, heavy-duty robe hook in stainless steel or brass. Rounded profiles protect fabrics while concealed screws keep walls clean-looking.",
    ],
    images: [
      { src: px("7545857"), alt: "Robe hook in an elegant bathroom interior" }, // REPLACE WITH REAL PHOTO
      { src: px("8082192"), alt: "Bathroom details with marble finishes" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "1 piece",
    hsCode: "73249000",
    material: "Stainless steel / Brass",
    packaging: ACCESSORY_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "tumbler-holder",
    name: "Tumbler Holder",
    category: "bathroom-accessories",
    tagline: "Counter-clean hygiene, wall-mounted ease",
    description: [
      "A wall-mounted tumbler holder that keeps washbasins uncluttered, with frosted-glass or solid-metal cup options and a rust-resistant frame.",
    ],
    images: [
      { src: px("8082192"), alt: "Tumbler holder near a marble-clad basin" }, // REPLACE WITH REAL PHOTO
      { src: px("7511696"), alt: "Bathroom vanity with accessories" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "1 piece",
    hsCode: "73249000",
    material: "Stainless steel / Brass",
    packaging: ACCESSORY_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },

  // ---------------------------------------------------------
  // 4. HARDWARE PRODUCTS [CATALOGUE ENTRY - OWNER TO CONFIRM]
  // ---------------------------------------------------------
  {
    slug: "stainless-mortise-handle-set",
    name: "Stainless Mortise Handle Set",
    category: "hardware-products",
    tagline: "Smooth action, solid feel, lasting shine",
    description: [
      "A stainless-steel mortise handle set with a crisp lever action and durable finish, suitable for residential and hospitality projects.",
    ],
    images: [
      {
        src: photo("16515"),
        alt: "Stainless-steel mortise door handle close-up", // REPLACE WITH REAL PHOTO
      },
      { src: px("21430428"), alt: "Metallic door hardware detail" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "On request",
    material: "Stainless steel",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: true,
    customizable: true,
  },
  {
    slug: "cabinet-pull-handles",
    name: "Cabinet Pull Handles",
    category: "hardware-products",
    tagline: "Furniture handles in contemporary profiles",
    description: [
      "Cabinet and wardrobe pull handles in modern profiles and finishes, with consistent casting, clean threads and uniform plating across lots.",
    ],
    images: [
      { src: px("2564866"), alt: "Metallic pull handles on blue wooden doors" }, // REPLACE WITH REAL PHOTO
      { src: px("31493651"), alt: "Interior hardware and décor shelving" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "On request",
    material: "Stainless steel / Zinc alloy / Brass",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "classic-door-knobs",
    name: "Classic Door Knobs",
    category: "hardware-products",
    tagline: "Timeless knob sets, heavy in the hand",
    description: [
      "Classic round and shaped door knobs with smooth spindle action, a dependable staple SKU for hardware importers.",
    ],
    images: [
      { src: px("21430428"), alt: "Classic metallic door knob in monochrome" }, // REPLACE WITH REAL PHOTO
      {
        src: photo("16515"),
        alt: "Door hardware and lock detail", // REPLACE WITH REAL PHOTO
      },
    ],
    showPrice: false,
    moq: "On request",
    material: "Brass / Stainless steel",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
  {
    slug: "tower-bolts-and-hinges",
    name: "Tower Bolts & Hinges",
    category: "hardware-products",
    tagline: "Utility hardware packed for export",
    description: [
      "Tower bolts, butt hinges and utility fittings, bulk-packed or retail-carded, with consistent finish and smooth operation across the carton.",
    ],
    images: [
      { src: px("11930175"), alt: "Iron ring hardware mounted on a wall" }, // REPLACE WITH REAL PHOTO
      { src: px("2564866"), alt: "Door fittings on wooden doors" }, // REPLACE WITH REAL PHOTO
    ],
    showPrice: false,
    moq: "On request",
    material: "Stainless steel / Brass",
    packaging: EXPORT_PACKING,
    origin: "India",
    featured: false,
    customizable: true,
  },
];

export const PRODUCT_COUNT = PRODUCTS.length;

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}
