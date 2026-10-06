import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn, formatINR } from "@/lib/utils";
import { Badge } from "@/components/ui/section";

/* ------------------------------- ProductCard ---------------------------- */

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const enquiryHref = "/contact";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-navy/8 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-mist"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
        {product.customizable && (
          <span className="absolute left-4 top-4">
            <Badge tone="gold" className="bg-navy/80 backdrop-blur">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Customizable
            </Badge>
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={`/products/${product.slug}`} className="link-underline self-start">
          <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{product.tagline}</p>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-navy/8 pt-4">
          <div>
            {product.showPrice && product.priceINR !== undefined ? (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Starting from</p>
                <p className="font-number text-xl font-semibold text-navy">
                  {formatINR(product.priceINR)}
                  <span className="ml-1 text-xs font-medium text-muted">/ {product.priceUnit ?? "piece"}</span>
                </p>
              </>
            ) : (
              <p className="font-number text-sm font-semibold uppercase tracking-wide text-navy">Price on Request</p>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <Link
            href={enquiryHref}
            className="btn-sheen inline-flex min-h-11 flex-1 items-center justify-center rounded-soft bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:brightness-110"
          >
            Visit Office
          </Link>
          <Link
            href={`/products/${product.slug}`}
            aria-label={`Details: ${product.name}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-soft border border-navy/15 text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-ivory"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------- CategoryCard --------------------------- */

export function CategoryCard({ category, priority = false, className }: { category: Category; priority?: boolean; className?: string }) {
  return (
    <Link
      href={`/products/category/${category.slug}`}
      className={cn(
        "group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift sm:min-h-[400px]",
        className,
      )}
      aria-label={`Browse ${category.name}`}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent transition-opacity duration-500" aria-hidden="true" />
      <span className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="font-number text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{category.tagline}</p>
        <span className="mt-2 flex items-center justify-between gap-4">
          <span className="font-heading text-2xl font-semibold text-ivory sm:text-[1.7rem]">{category.name}</span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </span>
        <span className="mt-3 block max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/80 transition-all duration-500 group-hover:max-h-24">
          {category.description}
        </span>
      </span>
    </Link>
  );
}

/* -------------------------------- FeatureCard --------------------------- */

export function FeatureCard({
  icon,
  title,
  description,
  tone = "light",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "group h-full rounded-card border p-6 transition-all duration-500 hover:-translate-y-1.5 sm:p-7",
        tone === "light"
          ? "border-navy/8 bg-white shadow-card hover:border-gold/40 hover:shadow-lift"
          : "border-ivory/10 bg-blue/40 hover:border-gold/50 hover:bg-blue/60",
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-soft transition-colors duration-500",
          tone === "light" ? "bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy" : "bg-ivory/10 text-gold group-hover:bg-gold group-hover:text-navy",
        )}
      >
        {icon}
      </div>
      <h3 className={cn("text-lg font-semibold", tone === "light" ? "text-ink" : "text-ivory")}>{title}</h3>
      <p className={cn("mt-2 text-sm leading-relaxed", tone === "light" ? "text-muted" : "text-ivory/70")}>{description}</p>
    </div>
  );
}
