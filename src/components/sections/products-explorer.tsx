"use client";

import { PackageSearch, Search, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/card";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductsExplorerProps {
  products: Product[];
  categories: Category[];
}

/** Category filter tabs + live search over the full catalogue. */
export function ProductsExplorer({ products, categories }: ProductsExplorerProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [category, setCategory] = useState(initialCategory === "all" || categories.some((c) => c.slug === initialCategory) ? initialCategory : "all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (!q) return true;
      const catName = categories.find((c) => c.slug === product.category)?.name ?? "";
      return [product.name, product.tagline, catName, product.hsCode ?? "", product.material ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [products, categories, category, query]);

  const tabs = [{ slug: "all", label: "All Products" }, ...categories.map((c) => ({ slug: c.slug, label: c.name }))];

  return (
    <div>
      {/* Controls */}
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              role="tab"
              aria-selected={category === tab.slug}
              onClick={() => setCategory(tab.slug)}
              className={cn(
                "min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                category === tab.slug
                  ? "border-navy bg-navy text-ivory shadow-card"
                  : "border-navy/15 bg-white text-navy hover:border-gold hover:text-gold",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, materials, HS code…"
            aria-label="Search products"
            className="min-h-12 w-full rounded-soft border border-navy/15 bg-white py-3 pl-11 pr-10 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-mist hover:text-navy"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <p aria-live="polite" className="mb-6 text-sm text-muted">
        Showing <span className="font-semibold text-navy">{filtered.length}</span> of {products.length} products
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7">
          {filtered.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-card border border-dashed border-navy/20 bg-white px-6 py-20 text-center">
          <PackageSearch className="h-12 w-12 text-gold" aria-hidden="true" />
          <h3 className="mt-5 text-xl font-semibold text-ink">No products match your search</h3>
          <p className="mt-2 max-w-md text-sm text-muted">
            Try a different keyword or category, or tell us what you need and we&rsquo;ll source or custom-make it for you.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-6 min-h-11 rounded-soft bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-all hover:brightness-110"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
