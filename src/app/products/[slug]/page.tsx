import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, PackageCheck, Quote, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { ProductGallery } from "@/components/sections/product-gallery";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductCard } from "@/components/ui/card";
import { Badge, Container, Section } from "@/components/ui/section";
import { getCategory, type CategorySlug } from "@/data/categories";
import { PRODUCTS, getProduct, getRelatedProducts } from "@/data/products";
import { JsonLd, breadcrumbLd, pageMetadata, productLd } from "@/lib/seo";
import { SITE, whatsappLink } from "@/config/site";
import { formatINR } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const category = getCategory(product.category);
  const price = product.showPrice && product.priceINR !== undefined ? ` Starting from ${formatINR(product.priceINR)}.` : " Price on request.";
  return pageMetadata({
    title: `${product.name}, ${category?.name ?? "Product"} Exporter`,
    description: `${product.tagline}.${price} MOQ: ${product.moq ?? "flexible"}. Export-packed in India by Achrat Exports.`,
    path: `/products/${product.slug}`,
    keywords: [product.name.toLowerCase(), category?.name.toLowerCase() ?? "", "exporter india", "wholesale"],
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category as CategorySlug);
  const related = getRelatedProducts(product, 4);
  const quoteHref = `/get-quote?product=${product.slug}&from=${encodeURIComponent(`/products/${product.slug}`)}`;

  const specs: Array<[string, string]> = [
    ["Minimum Order Quantity", product.moq ?? "Flexible, on request"],
    ["HS Code", product.hsCode ?? "On request"],
    ["Material", product.material ?? "Not specified"],
    ["Packaging", product.packaging ?? "Export-grade protective packaging"],
    ["Country of Origin", product.origin ?? "India"],
    ["Customization", product.customizable ? "Available for design, glaze, branding and packaging" : "Standard range"],
  ];

  return (
    <>
      <JsonLd
        data={[
          productLd(product, category?.name ?? "Products"),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: category?.name ?? "Category", path: `/products/category/${product.category}` },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />

      <Section className="pt-28 lg:pt-32" noPadding={false}>
        <Container>
          <Reveal variant="fade">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <Breadcrumbs
                tone="dark"
                items={[
                  { label: "Products", href: "/products" },
                  { label: category?.name ?? "Category", href: `/products/category/${product.category}` },
                  { label: product.name },
                ]}
              />
              <Link href="/products" className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All products
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <ProductGallery images={product.images} name={product.name} />
            </Reveal>

            <div>
              <Reveal variant="up">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge tone="navy">{category?.name ?? "Product"}</Badge>
                  {product.customizable && (
                    <Badge tone="gold">
                      <Sparkles className="h-3 w-3" aria-hidden="true" /> Customizable
                    </Badge>
                  )}
                  <Badge tone="teal">Origin: India</Badge>
                </div>
                <h1 className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold text-ink">{product.name}</h1>
                <p className="mt-3 text-lg text-muted">{product.tagline}</p>
              </Reveal>

              <Reveal variant="up" delay={0.1}>
                <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 rounded-card border border-navy/8 bg-white p-6 shadow-card">
                  <div>
                    {product.showPrice && product.priceINR !== undefined ? (
                      <>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Starting from</p>
                        <p className="font-number text-3xl font-semibold text-navy">
                          {formatINR(product.priceINR)}
                          <span className="ml-1 text-sm font-medium text-muted">/ {product.priceUnit ?? "piece"}</span>
                        </p>
                        <p className="mt-1 text-xs text-muted">Bulk &amp; export pricing on request</p>
                      </>
                    ) : (
                      <>
                        <p className="font-number text-2xl font-semibold text-navy">Price on Request</p>
                        <p className="mt-1 text-xs text-muted">Tell us your quantity for a tailored quote</p>
                      </>
                    )}
                  </div>
                  <div className="h-12 w-px bg-navy/10" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">MOQ</p>
                    <p className="font-number text-xl font-semibold text-navy">{product.moq ?? "Flexible"}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="up" delay={0.16} className="mt-6 space-y-4">
                {product.description.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              <Reveal variant="up" delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={quoteHref}
                    className="btn-sheen inline-flex min-h-12 items-center gap-2 rounded-soft bg-gold px-8 py-3.5 font-semibold text-navy shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  >
                    <Quote className="h-4.5 w-4.5" aria-hidden="true" />
                    Request Quote
                  </Link>
                  <a
                    href={whatsappLink(`Hello ${SITE.name}, I'm interested in the ${product.name}. Please share export pricing and MOQ details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-soft border border-navy/20 px-8 py-3.5 font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
                  >
                    <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: PackageCheck, text: "Export-grade packaging" },
                    { icon: ShieldCheck, text: "QC against approved sample" },
                    { icon: Truck, text: "Worldwide shipping" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-xs font-semibold text-muted">
                      <Icon className="h-4.5 w-4.5 shrink-0 text-teal" aria-hidden="true" /> {text}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Specs table */}
          <Reveal variant="up" className="mt-16">
            <div className="overflow-hidden rounded-card border border-navy/8 bg-white shadow-card">
              <div className="border-b border-navy/8 bg-navy px-6 py-5 sm:px-8">
                <h2 className="font-heading text-xl font-semibold text-ivory">Export specifications</h2>
              </div>
              <dl className="grid sm:grid-cols-2">
                {specs.map(([term, value], i) => (
                  <div key={term} className={`flex flex-col gap-1 px-6 py-5 sm:px-8 ${i % 2 === 0 ? "sm:border-r" : ""} border-b border-navy/8`}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{term}</dt>
                    <dd className="text-[15px] font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Related products */}
      {related.length > 0 && (
        <Section tone="mist">
          <Container>
            <Reveal>
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold text-ink">More from {category?.name}</h2>
                <Link
                  href={`/products/category/${product.category}`}
                  className="link-underline text-sm font-semibold text-navy hover:text-gold"
                >
                  View full category
                </Link>
              </div>
            </Reveal>
            <RevealGroup variant="up" stagger={0.09} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </RevealGroup>
          </Container>
        </Section>
      )}
    </>
  );
}
