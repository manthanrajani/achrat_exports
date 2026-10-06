/**
 * Product categories. Edit copy or images here.
 * All category photos are royalty-free placeholders: REPLACE WITH REAL PHOTO
 * of your own products before go-live.
 */

import { photo } from "@/data/media";

export const CATEGORY_SLUGS = [
  "ceramic-crockery",
  "ceramic-sanitary-ware",
  "bathroom-accessories",
  "hardware-products",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface Category {
  slug: CategorySlug;
  name: string;
  navLabel: string;
  tagline: string;
  /** Short card description */
  description: string;
  /** Longer intro copy for the category landing page */
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

const px = photo;

export const CATEGORIES: Category[] = [
  {
    slug: "ceramic-crockery",
    name: "Ceramic Crockery",
    navLabel: "Ceramic Crockery",
    tagline: "Tableware with an artisan soul",
    description:
      "Tea sets, cups and saucers, mugs, bowls, plates, platters and pitchers: handcrafted ceramic tableware in signature glazes, fully customizable in shape, color and pattern.",
    intro:
      "Our ceramic crockery collection brings together everyday elegance and export-grade durability. From tea sets, cups & saucers and mugs to bowls, plates, platters and pitchers, every piece is shaped and glazed by skilled artisans. We create custom designs to your brief, or modify any existing design to match your market's preferences, right down to private branding and retail-ready packaging.",
    image: px("3847451"), // REPLACE WITH REAL PHOTO
    imageAlt: "Handcrafted ceramic bowls, cups and plates arranged on a table", // REPLACE WITH REAL PHOTO
    highlights: ["Custom designs & modifications", "Food-safe glazes", "Retail & HoReCa ready"],
  },
  {
    slug: "ceramic-sanitary-ware",
    name: "Ceramic Sanitary Ware",
    navLabel: "Ceramic Sanitary Ware",
    tagline: "Built for modern bathrooms",
    description:
      "Export-grade ceramic sanitary ware: washbasins, water closets and pedestal sets engineered for durability, easy cleaning and long service life.",
    intro:
      "We source and export ceramic sanitary ware built to international expectations: vitrified finishes, precise dimensions and dependable flush/flow performance. Ideal for project, wholesale and retail distribution buyers looking for consistent quality from India at competitive terms.",
    image: px("7511696"), // REPLACE WITH REAL PHOTO
    imageAlt: "White ceramic sanitary ware in a contemporary bathroom", // REPLACE WITH REAL PHOTO
    highlights: ["Vitrified ceramic body", "Project & wholesale supply", "Consistent export lots"],
  },
  {
    slug: "bathroom-accessories",
    name: "Bathroom Accessories",
    navLabel: "Bathroom Accessories",
    tagline: "Stainless steel & brass hardware",
    description:
      "Toilet paper holders, towel racks, towel rods, double soap dishes, robe hooks and tumbler holders in stainless steel and brass. MOQ from just 1 piece.",
    intro:
      "A focused range of stainless-steel and brass bathroom accessories: toilet paper holders, towel racks, towel rods, double soap dishes, robe hooks and tumbler holders. Every item ships in standard export packaging from India, with an exceptionally low MOQ of 1 piece so you can validate the range before committing to volume. HS Code 73249000.",
    image: px("7534276"), // REPLACE WITH REAL PHOTO
    imageAlt: "Modern bathroom with stainless-steel fixtures and accessories", // REPLACE WITH REAL PHOTO
    highlights: ["MOQ: 1 piece", "HS Code 73249000", "SS & brass finishes"],
  },
  {
    slug: "hardware-products",
    name: "Hardware Products",
    navLabel: "Hardware Products",
    tagline: "Dependable fittings, export packed",
    description:
      "Builder and furniture hardware: handles, knobs, hinges, tower bolts and fittings selected for finish quality, smooth action and long life.",
    intro:
      "Our hardware products line serves importers, wholesalers and project buyers who need dependable Indian sourcing. Handles, knobs, hinges and general fittings are quality-checked piece by piece and packed to survive long-haul container shipping.",
    image: px("16515"), // REPLACE WITH REAL PHOTO
    imageAlt: "Close-up of a stainless-steel door handle", // REPLACE WITH REAL PHOTO
    highlights: ["Piece-by-piece QC", "Assorted SKUs per container", "Export packaging"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
