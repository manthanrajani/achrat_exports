import Link from "next/link";
import { Award, BadgeCheck, Clock3, Globe2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import type { SVGProps } from "react";
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

function isPublicUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}

/* Simple brand glyphs (lucide no longer ships social icons) */
function iconProps(props: SVGProps<SVGSVGElement>): SVGProps<SVGSVGElement> {
  return { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, ...props };
}

const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps(p)}>
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.7 1.7 4.8 4.8.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.6 4.7-4.8 4.8-1.3 0-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.7-1.7-4.8-4.8C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.9C2.4 3.9 3.9 2.4 7.1 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9Z" />
  </svg>
);

const Linkedin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps(p)}>
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.2 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.4V9H7v11.5Z" />
  </svg>
);

const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps(p)}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
  </svg>
);

const Youtube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps(p)}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
);

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
            {SITE.iec ? `Export Ready · IEC ${SITE.iec}` : "Export Ready"}
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
          {[
            { label: "Instagram", href: SITE.socials.instagram, icon: Instagram },
            { label: "LinkedIn", href: SITE.socials.linkedin, icon: Linkedin },
            { label: "Facebook", href: SITE.socials.facebook, icon: Facebook },
            { label: "YouTube", href: SITE.socials.youtube, icon: Youtube },
          ].some((s) => isPublicUrl(s.href)) && (
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "Instagram", href: SITE.socials.instagram, icon: Instagram },
                { label: "LinkedIn", href: SITE.socials.linkedin, icon: Linkedin },
                { label: "Facebook", href: SITE.socials.facebook, icon: Facebook },
                { label: "YouTube", href: SITE.socials.youtube, icon: Youtube },
              ]
                .filter((s) => isPublicUrl(s.href))
                .map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory/75 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                ))}
            </div>
          )}
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
            <li>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {SITE.email}
              </a>
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
