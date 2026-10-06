import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 6);

  return (
    <Section tone="mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Handpicked for you"
            title="Featured export products"
            description="A rotating selection from our crockery, bathroom and hardware lines. Every piece can be customized and ships worldwide in export-grade packaging."
          />
        </Reveal>

        <RevealGroup stagger={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <Button href="/products" variant="outline">
            View Full Catalogue
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
