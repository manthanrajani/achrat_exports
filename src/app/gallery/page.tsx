import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { photo } from "@/data/media";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gallery - Crockery, Craft & Export Packing in Pictures",
  description:
    "A look inside Achrat Exports: handcrafted ceramic crockery, artisan workshops, export packaging and container logistics from Surat, India.",
  path: "/gallery",
  keywords: ["ceramic crockery photos", "indian pottery workshop", "export packaging gallery", "tableware designs"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow="Gallery"
        title="Craft, color and containers"
        description="Browse our world in pictures: the tableware we make, the hands that shape it, and the packaging that protects it across oceans."
        crumbs={[{ label: "Gallery" }]}
        image={photo("3847451")}
      />

      <Section>
        <Container>
          <Reveal variant="fade">
            <GalleryGrid />
          </Reveal>
          <p className="mt-10 text-center text-xs text-muted">
            Imagery shown is representative of our product categories. Request current, product-specific photos with your enquiry.
          </p>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
