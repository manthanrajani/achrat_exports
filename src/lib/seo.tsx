import type { Metadata } from "next";
import type { Product } from "@/data/products";
import { FULL_ADDRESS, SITE } from "@/config/site";
import { OG_COVER } from "@/data/media";
import { absoluteUrl } from "@/lib/utils";

interface PageMetaInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

/** Consistent title/description/canonical/OG/Twitter metadata for every page. */
export function pageMetadata({ title, description, path = "/", keywords = [] }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: absoluteUrl(OG_COVER), width: 1200, height: 630, alt: `${SITE.name} - ${SITE.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(OG_COVER)],
    },
  };
}

/** JSON-LD script tag (XSS-safe). */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: absoluteUrl("/images/brand/logo.webp"),
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: "2024-06",
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      name: `${SITE.contactPerson} (${SITE.contactRole})`,
      telephone: SITE.phone,
      email: SITE.email,
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [SITE.socials.instagram, SITE.socials.linkedin, SITE.socials.facebook, SITE.socials.youtube],
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#business`,
    name: SITE.name,
    image: absoluteUrl(OG_COVER),
    url: SITE.domain,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHours: "Mo-Sa 10:00-19:00",
    vatID: SITE.gst,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.domain,
    description: SITE.description,
    publisher: { "@id": `${SITE.domain}/#organization` },
  };
}

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function productLd(product: Product, categoryName: string) {
  // NOTE: no rating/review fields. We never invent social proof.
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description[0],
    image: product.images.map((img) => img.src),
    category: categoryName,
    countryOfOrigin: { "@type": "Country", name: "India" },
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    url: absoluteUrl(`/products/${product.slug}`),
    additionalProperty: [
      product.moq ? { "@type": "PropertyValue", name: "MOQ", value: product.moq } : null,
      product.hsCode ? { "@type": "PropertyValue", name: "HS Code", value: product.hsCode } : null,
      product.material ? { "@type": "PropertyValue", name: "Material", value: product.material } : null,
    ].filter(Boolean),
  };
}
