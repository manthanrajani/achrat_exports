"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";
import type { ProductImage } from "@/data/products";
import { cn } from "@/lib/utils";

/** Product detail gallery: main image + thumbnails, opens a lightbox. */
export function ProductGallery({ images, name }: { images: ProductImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const current = images[active] ?? images[0];

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxIndex(active)}
        aria-label={`Open image viewer for ${name}`}
        className="group relative block w-full overflow-hidden rounded-card border border-navy/8 bg-mist shadow-card"
      >
        <div className="relative aspect-[4/3]">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy/80 text-ivory opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <Expand className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
      </button>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image.src + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View image ${index + 1} of ${name}`}
              aria-pressed={index === active}
              className={cn(
                "relative aspect-square overflow-hidden rounded-soft border-2 bg-mist transition-all duration-300",
                index === active ? "border-gold shadow-card" : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image src={image.src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <Lightbox images={images.map((img) => ({ src: img.src, alt: img.alt }))} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </div>
  );
}
