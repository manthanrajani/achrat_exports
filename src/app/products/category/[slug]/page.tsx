import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProductCard } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { CATEGORIES, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import type { CategorySlug } from "@/data/categories";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return pageMetadata({
    title: `${category.name} Exporter from India`,
    description: category.description,
    path: `/products/category/${category.slug}`,
    keywords: [`${category.name.toLowerCase()} exporter`, `${category.name.toLowerCase()} india`, "achrat exports"],
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug as CategorySlug);
  const others = CATEGORIES.filter((c) => c.slug !== category.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category.name, path: `/products/category/${category.slug}` },
        ])}
      />
      <PageHero
        eyebrow={category.tagline}
        title={category.name}
        description={category.description}
        crumbs={[{ label: "Products", href: "/products" }, { label: category.name }]}
        image={category.image}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_2fr] lg:gap-14">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="up">
                <p className="leading-relaxed text-muted">{category.intro}</p>
                <ul className="mt-7 space-y-3.5">
                  {category.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 rounded-soft border border-navy/8 bg-white px-4 py-3.5 shadow-card">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                      <span className="text-sm font-semibold text-ink">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted">
                  <span className="font-semibold text-navy">{products.length} products</span> in this category. Need
                  something else? We custom-make or source on request.
                </p>
              </Reveal>
            </aside>

            <RevealGroup variant="up" stagger={0.08} className="grid gap-6 sm:grid-cols-2">
              {products.map((product, index) => (
                <ProductCard key={product.slug} product={product} priority={index < 2} />
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      {/* Other categories */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <h2 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold text-ink">Explore other categories</h2>
          </Reveal>
          <RevealGroup variant="up" stagger={0.1} className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/products/category/${other.slug}`}
                className="group flex items-center justify-between gap-4 rounded-card border border-navy/8 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
              >
                <span>
                  <span className="block font-heading text-lg font-semibold text-ink">{other.name}</span>
                  <span className="mt-1 block text-xs text-muted">{other.tagline}</span>
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
