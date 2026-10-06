import type { Metadata } from "next";
import { Suspense } from "react";
import { Reveal } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProductsExplorer } from "@/components/sections/products-explorer";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products: Ceramic Crockery, Sanitary Ware, Bathroom Accessories and Hardware",
  description:
    "Browse the Achrat Exports catalogue: handcrafted ceramic crockery, ceramic sanitary ware, brass & stainless-steel bathroom accessories (MOQ 1 pc, HS 73249000) and hardware. All export-packed from India.",
  path: "/products",
  keywords: [
    "ceramic crockery catalogue",
    "export quality tableware",
    "bathroom accessories wholesale India",
    "hardware products exporter",
    "fish shaped platter",
    "ceramic plates bowls exporter",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />
      <PageHero
        eyebrow="Our catalogue"
        title="Export-ready products across four categories"
        description="Search or filter the range. Every item can be customized, and every card has a direct enquiry shortcut."
        crumbs={[{ label: "Products" }]}
      />

      <Section>
        <Container>
          <Reveal variant="fade">
            <Suspense fallback={null}>
              <ProductsExplorer products={PRODUCTS} categories={CATEGORIES} />
            </Suspense>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
