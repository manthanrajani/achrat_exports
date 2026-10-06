"use client";

import { Quote } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Reveal } from "@/components/animations/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { TESTIMONIALS } from "@/data/testimonials";
import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsSection() {
  return (
    <Section tone="mist" className="overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Buyer voices"
            title="What our buyers say"
            description="Importer feedback on quality, communication and pricing, representative of the experience we aim to deliver on every order."
          />
        </Reveal>

        <Reveal variant="zoom">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop={TESTIMONIALS.length > 2}
            autoplay={{ delay: 5200, pauseOnMouseEnter: true, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 2 } }}
            className="testimonial-swiper !pb-14"
            aria-label="Customer testimonials"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <figure className="relative flex h-full flex-col rounded-card border border-navy/8 bg-white p-8 shadow-card sm:p-10">
                  <Quote className="h-9 w-9 text-gold" aria-hidden="true" fill="currentColor" strokeWidth={0} />
                  <blockquote className="mt-5 flex-1 font-heading text-[1.15rem] leading-relaxed text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center justify-between border-t border-navy/8 pt-5">
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </Container>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet{width:26px;height:4px;border-radius:99px;background:#0B2545;opacity:.18;transition:all .4s}
        .testimonial-swiper .swiper-pagination-bullet-active{background:#C9A24B;opacity:1;width:40px}
      `}</style>
    </Section>
  );
}
