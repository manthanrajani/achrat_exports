"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";
import { GALLERY, type GalleryGroup } from "@/data/gallery";
import { cn } from "@/lib/utils";

const GROUPS: Array<"All" | GalleryGroup> = ["All", "Crockery", "Craft & Production", "Packaging & Logistics"];

const ASPECT_CLASS: Record<string, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** Masonry gallery (CSS columns) with category filters and a lightbox. */
export function GalleryGrid() {
  const [group, setGroup] = useState<(typeof GROUPS)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(() => (group === "All" ? GALLERY : GALLERY.filter((g) => g.group === group)), [group]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter gallery">
        {GROUPS.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={group === g}
            onClick={() => setGroup(g)}
            className={cn(
              "min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              group === g ? "border-navy bg-navy text-ivory shadow-card" : "border-navy/15 bg-white text-navy hover:border-gold hover:text-gold",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open image: ${item.alt}`}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <div className={cn("relative w-full", ASPECT_CLASS[item.aspect])}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span aria-hidden="true" className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/35" />
            <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-3 bg-gradient-to-t from-navy/85 to-transparent px-5 pb-4 pt-10 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-sm font-medium text-ivory">{item.alt}</span>
              <Expand className="h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      <Lightbox images={items} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </div>
  );
}
