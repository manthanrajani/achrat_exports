/**
 * Gallery images for the masonry grid with lightbox.
 * All photos are royalty-free placeholders: REPLACE WITH REAL PHOTO of your
 * products, workshop and shipments before go-live.
 */

import { photo } from "@/data/media";

export type GalleryGroup = "Crockery" | "Craft & Production" | "Packaging & Logistics";

export interface GalleryItem {
  src: string;
  alt: string;
  group: GalleryGroup;
  /** Tailwind aspect class for the masonry tile */
  aspect: "portrait" | "landscape" | "square";
}

const px = photo;

export const GALLERY: GalleryItem[] = [
  // --- Crockery ---
  { src: px("14341974"), alt: "Hands arranging white ceramic plates and bowls", group: "Crockery", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("6739690"), alt: "Minimal ceramic nesting bowls on marble", group: "Crockery", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("8208337"), alt: "White ceramic teacup with green saucer", group: "Crockery", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("11065504"), alt: "White ceramic mug, bowl and plate set", group: "Crockery", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("25542635"), alt: "Floral teacup with coffee on a wooden ledge", group: "Crockery", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("3847451"), alt: "Colorful ceramic bowls and plates on a table", group: "Crockery", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("10757074"), alt: "Rustic ceramic pitcher on a wooden table", group: "Crockery", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("1591146"), alt: "Decorative floral cup and saucer", group: "Crockery", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("3991973"), alt: "Ceramic dinnerware in soft window light", group: "Crockery", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  // --- Craft & Production ---
  { src: px("33633350"), alt: "Handcrafted clay pots in a traditional workshop", group: "Craft & Production", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("34733198"), alt: "Clay pottery displayed at a local market", group: "Craft & Production", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("31493651"), alt: "Ceramics and décor on rustic kitchen shelves", group: "Craft & Production", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("10178158"), alt: "Handmade pitcher and cup against a brick wall", group: "Craft & Production", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  // --- Packaging & Logistics ---
  { src: px("6169151"), alt: "Applying a fragile sticker on an export carton", group: "Packaging & Logistics", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("6169020"), alt: "Fragile-labeled boxes organized on steel shelving", group: "Packaging & Logistics", aspect: "portrait" }, // REPLACE WITH REAL PHOTO
  { src: px("24246926"), alt: "Container ship at an industrial harbor", group: "Packaging & Logistics", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("30115463"), alt: "Cargo ship loaded with colorful containers", group: "Packaging & Logistics", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("10834810"), alt: "Stacked cartons inside an export warehouse", group: "Packaging & Logistics", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
  { src: px("15346128"), alt: "Container terminal at sunset", group: "Packaging & Logistics", aspect: "landscape" }, // REPLACE WITH REAL PHOTO
];
