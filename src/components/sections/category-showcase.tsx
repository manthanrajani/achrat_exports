import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CATEGORIES } from "@/data/categories";

export function CategoryShowcase() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we export"
            title="Four categories, one quality standard"
            description="From signature ceramic crockery to sanitary ware, bathroom accessories and hardware. Every category is export-packed and customization-ready."
          />
        </Reveal>

        <RevealGroup variant="up" stagger={0.12} className="grid gap-6 sm:grid-cols-2 lg:gap-7">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.slug} category={category} priority={index < 2} />
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <Button href="/products" variant="outline">
            Browse All Products
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
