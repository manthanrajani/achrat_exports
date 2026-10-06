import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} - Ceramic Crockery & Bathroom Accessories Exporter`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#0B2545",
    icons: [
      { src: "/icons/icon-192x192.webp", sizes: "192x192", type: "image/webp", purpose: "any" },
      { src: "/icons/icon-512x512.webp", sizes: "512x512", type: "image/webp", purpose: "any" },
      { src: "/icons/apple-touch-icon.webp", sizes: "180x180", type: "image/webp", purpose: "any" },
    ],
  };
}
