"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { CATEGORIES } from "@/data/categories";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Custom Design", href: "/custom-design" },
  { label: "Export Process", href: "/export-process" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

function Logo({ onLight }: { onLight: boolean }) {
  return (
    <Link href="/" className="flex items-center" aria-label="Achrat Exports home">
      <BrandLogo tone={onLight ? "teal" : "ivory"} priority className="h-10 w-auto sm:h-12" />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setDrawerOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const lightTop = /^\/products\/[^/]+$/.test(pathname);
  const onLight = scrolled || lightTop;
  const dark = onLight; // dark text on a light header
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          onLight ? "border-b border-navy/8 bg-ivory/95 shadow-card backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo onLight={onLight} />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) =>
              "hasDropdown" in link && link.hasDropdown ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "link-underline flex min-h-11 items-center gap-1 text-sm font-semibold transition-colors",
                      dark ? "text-navy hover:text-gold" : "text-ivory hover:text-gold",
                      isActive(link.href) && "text-gold",
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-card border border-navy/8 bg-white p-2 shadow-lift">
                      <Link
                        href="/products"
                        className="flex items-center justify-between rounded-soft px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-mist"
                      >
                        All Products
                        <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
                      </Link>
                      <div className="my-1 h-px bg-navy/8" />
                      {CATEGORIES.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/products/category/${category.slug}`}
                          className="block rounded-soft px-4 py-3 transition-colors hover:bg-mist"
                        >
                          <span className="block text-sm font-semibold text-ink">{category.name}</span>
                          <span className="mt-0.5 block text-xs text-muted">{category.highlights.join(" · ")}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "link-underline flex min-h-11 items-center text-sm font-semibold transition-colors",
                    dark ? "text-navy hover:text-gold" : "text-ivory hover:text-gold",
                    isActive(link.href) && "text-gold",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-sheen hidden min-h-11 items-center gap-2 rounded-soft bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
            >
              Visit Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-soft border transition-colors lg:hidden",
                dark ? "border-navy/20 text-navy" : "border-ivory/30 text-ivory",
              )}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-[70] lg:hidden", drawerOpen ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!drawerOpen}>
        <div
          className={cn("absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-400", drawerOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setDrawerOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-navy shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            drawerOpen ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Mobile navigation"
          aria-hidden={!drawerOpen}
          inert={!drawerOpen}
        >
          <div className="flex items-center justify-between border-b border-ivory/10 px-6 py-5">
            <BrandLogo tone="ivory" className="h-9" />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-soft border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-4">
            {NAV_LINKS.map((link) =>
              "hasDropdown" in link && link.hasDropdown ? (
                <div key={link.href} className="border-b border-ivory/8">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((v) => !v)}
                    aria-expanded={productsOpen}
                    className="flex min-h-12 w-full items-center justify-between py-3 text-left font-heading text-lg text-ivory"
                  >
                    Products
                    <ChevronDown className={cn("h-5 w-5 text-gold transition-transform duration-300", productsOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                  <div className={cn("grid transition-[grid-template-rows] duration-400", productsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <div className="space-y-1 pb-4 pl-3">
                        <Link href="/products" className="block rounded-soft px-3 py-2.5 text-sm font-semibold text-gold">
                          All Products →
                        </Link>
                        {CATEGORIES.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/products/category/${category.slug}`}
                            className="block rounded-soft px-3 py-2.5 text-sm text-ivory/80 transition-colors hover:text-gold"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block min-h-12 border-b border-ivory/8 py-3 font-heading text-lg transition-colors",
                    isActive(link.href) ? "text-gold" : "text-ivory hover:text-gold",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="space-y-3 border-t border-ivory/10 px-6 py-6">
            <p className="flex items-start gap-3 text-sm text-ivory/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {SITE.address.city}, {SITE.address.state}, {SITE.address.country}
            </p>
            <Link
              href="/contact"
              className="btn-sheen mt-2 flex min-h-12 items-center justify-center gap-2 rounded-soft bg-gold px-5 py-3 font-semibold text-navy"
            >
              Visit Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
