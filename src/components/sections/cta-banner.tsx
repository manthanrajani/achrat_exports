"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { SITE, whatsappLink } from "@/config/site";
import { photo } from "@/data/media";

const BANNER_IMAGE = photo("15346128");

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const q = gsap.utils.selector(ref.current);

      // Gentle parallax on the background photograph
      gsap.fromTo(
        q("[data-banner-img]"),
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );

      gsap.from(q("[data-banner-content] > *"), {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-24 sm:py-28" aria-label="Get started">
      <div className="absolute inset-[-14%]" aria-hidden="true">
        <Image
          data-banner-img
          src={BANNER_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25 will-change-transform"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/50" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div data-banner-content className="max-w-2xl">
          <p className="font-number text-xs font-semibold uppercase tracking-[0.24em] text-gold">Let&rsquo;s build your next shipment</p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight text-ivory">
            Ready to import from a partner who treats your order like their own?
          </h2>
          <p className="mt-5 leading-relaxed text-ivory/75">
            Tell us the product, quantity and destination. Our export team will come back with pricing, MOQ and lead
            time, typically within 1-2 business days.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/get-quote"
              className="btn-sheen inline-flex min-h-12 items-center gap-2 rounded-soft bg-gold px-8 py-3.5 font-semibold text-navy shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink(`Hello ${SITE.name}, I'd like a quote for a bulk order.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-soft border border-ivory/30 px-8 py-3.5 font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
