import Link from "next/link";
import { Award, BadgeCheck, Clock3, Globe2, MapPin, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { CATEGORIES } from "@/data/categories";
import { FULL_ADDRESS, SITE } from "@/config/site";
import { BackToTop } from "@/components/layout/floating-widgets";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Custom Design / OEM", href: "/custom-design" },
  { label: "Export Process", href: "/export-process" },
  { label: "Quality & Packaging", href: "/quality" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Shipping & Export Policy", href: "/shipping-policy" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      {/* Credential strip */}
      <div className="border-b hairline">
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8 lg:px-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/75">
            <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" /> GSTIN {SITE.gst}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/75">
            <Award className="h-4 w-4 text-gold" aria-hidden="true" /> FIEO Registered
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/75">
            <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" /> Indian Business Portal Verified
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/75">
            <Globe2 className="h-4 w-4 text-gold" aria-hidden="true" />
            Export Ready
          </span>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10 lg:px-10 lg:py-20">
        <div>
          <Link href="/" className="inline-flex" aria-label="Achrat Exports home">
            <BrandLogo tone="ivory" className="h-14 sm:h-16" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
            {SITE.tagline}. {SITE.subTagline}: custom-made designs, low MOQs, export-ready packaging and worldwide shipping from Surat, Gujarat, India.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-number text-xs font-semibold uppercase tracking-[0.24em] text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-1">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-9 items-center text-sm text-ivory/70 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Product categories">
          <h3 className="font-number text-xs font-semibold uppercase tracking-[0.24em] text-gold">Products</h3>
          <ul className="mt-5 space-y-1">
            <li>
              <Link href="/products" className="inline-flex min-h-9 items-center text-sm font-semibold text-ivory/85 transition-colors hover:text-gold">
                All Products
              </Link>
            </li>
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products/category/${category.slug}`}
                  className="inline-flex min-h-9 items-center text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-number text-xs font-semibold uppercase tracking-[0.24em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{FULL_ADDRESS}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock3 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {SITE.hours}
            </li>
            <li className="text-xs leading-relaxed text-ivory/50">
              {SITE.contactPerson} - {SITE.contactRole}
              <br />
              {SITE.legalStructure} · Est. {SITE.established}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t hairline">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-6 sm:px-8 md:flex-row lg:px-10">
          <p className="text-xs text-ivory/60">© 2026 {SITE.name}. All rights reserved. Crafted in Surat, India.</p>
          <nav aria-label="Policies" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {POLICY_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-ivory/60 transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
