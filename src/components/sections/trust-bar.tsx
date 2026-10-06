import { Counter } from "@/components/animations/counter";
import { RevealGroup } from "@/components/animations/reveal";
import { Container } from "@/components/ui/section";
import { PRODUCT_COUNT } from "@/data/products";
import { CATEGORIES } from "@/data/categories";

const STATS = [
  { value: CATEGORIES.length, suffix: "", label: "Product categories", note: "crockery to hardware" },
  { value: PRODUCT_COUNT, suffix: "+", label: "Export products", note: "and growing" },
  { value: 100, suffix: "%", label: "Quality checked", note: "against approved samples" },
  { value: 1, suffix: " pc", label: "Min. MOQ", note: "bathroom accessories" },
];

export function TrustBar() {
  return (
    <div className="relative z-10 -mt-10 pb-4 lg:mt-0">
      <Container>
        <RevealGroup
          variant="up"
          stagger={0.1}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-navy/8 bg-navy/8 shadow-soft lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-7 text-center sm:px-8 sm:py-9">
              <p className="font-number text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-none text-navy">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2.5 text-sm font-semibold text-ink">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted">{stat.note}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </div>
  );
}
