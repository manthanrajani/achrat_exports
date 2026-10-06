"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, PackageCheck, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { photo } from "@/data/media";
import { PRODUCT_COUNT } from "@/data/products";

const HERO_IMAGE = photo("14341974");
const HERO_IMAGE_SMALL = photo("3991973");

function HeroLine({ words, goldWord }: { words: string[]; goldWord?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            data-hero-word
            className={`inline-block will-change-transform ${word === goldWord ? "text-gold italic" : ""}`}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const q = gsap.utils.selector(ref.current);
      const tl = gsap.timeline({ delay: 2.0, defaults: { ease: "power3.out" } });

      tl.from(q("[data-hero-eyebrow]"), { opacity: 0, y: 18, duration: 0.7 })
        .from(q("[data-hero-word]"), { yPercent: 118, duration: 1, stagger: 0.07, ease: "power4.out" }, "-=0.35")
        .from(q("[data-hero-sub]"), { opacity: 0, y: 26, duration: 0.8 }, "-=0.5")
        .from(q("[data-hero-cta]"), { opacity: 0, y: 22, duration: 0.7, stagger: 0.12 }, "-=0.5")
        .from(q("[data-hero-chip]"), { opacity: 0, y: 16, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .from(q("[data-hero-img-main]"), { opacity: 0, scale: 0.94, y: 40, duration: 1.2 }, "0.4")
        .from(q("[data-hero-img-small]"), { opacity: 0, scale: 0.9, y: 30, duration: 1 }, "-=0.8")
        .from(q("[data-hero-badge]"), { opacity: 0, y: -18, scale: 0.92, duration: 0.6, stagger: 0.14 }, "-=0.7");

      // Subtle parallax on the image cluster while scrolling
      gsap.to(q("[data-hero-img-main]"), {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
      gsap.to(q("[data-hero-img-small]"), {
        yPercent: -14,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} data-page-intro className="relative overflow-hidden bg-navy text-ivory lg:flex lg:h-dvh lg:max-h-dvh lg:flex-col" aria-label="Welcome">
      {/* Ambient decor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-52 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue/60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,#FAFAF7_1px,transparent_0)] [background-size:38px_38px]" />
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 select-none lg:block xl:right-6"
      >
        <span className="block bg-gradient-to-b from-ivory via-ivory/80 to-gold bg-clip-text font-heading text-[clamp(3.6rem,9vh,6.2rem)] font-semibold leading-none tracking-[0.38em] text-transparent drop-shadow-[0_10px_28px_rgba(11,37,69,0.45)] [writing-mode:vertical-rl]">
          ACHRAT
        </span>
      </p>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-14 px-5 pb-24 pt-32 sm:px-8 lg:h-full lg:min-h-0 lg:max-w-[1200px] lg:flex-1 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-8 lg:pb-14 lg:pr-16 lg:pt-24 xl:pr-20">
        {/* Copy */}
        <div>
          <p data-hero-eyebrow className="flex items-center gap-3 font-number text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Merchant Exporter · Surat, Gujarat, India
          </p>

          <h1 className="mt-6 font-heading text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.06] text-ivory lg:mt-4 lg:text-[clamp(2.4rem,4vw,3.5rem)]">
            <HeroLine words={["Crafting", "Excellence,"]} />
            <HeroLine words={["Delivering", "Quality"]} />
            <HeroLine words={["Globally."]} goldWord="Globally." />
          </h1>

          <p data-hero-sub className="mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.13rem)] leading-relaxed text-ivory/75 lg:mt-4">
            Leading India-based merchant exporter of ceramic crockery and more: custom-made designs, sanitary ware,
            brass &amp; steel bathroom accessories and hardware, packed export-ready and shipped worldwide.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 lg:mt-5">
            <Link
              data-hero-cta
              href="/products"
              className="btn-sheen inline-flex min-h-12 items-center gap-2 rounded-soft bg-gold px-7 py-3.5 font-semibold text-navy shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              data-hero-cta
              href="/get-quote"
              className="inline-flex min-h-12 items-center gap-2 rounded-soft border border-ivory/30 px-7 py-3.5 font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              Get a Quote
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3 lg:mt-5" aria-label="Credentials">
            {[
              { label: "FIEO Registered", icon: Award },
              { label: "GST Verified", icon: ShieldCheck },
              { label: "Export Ready", icon: PackageCheck },
              { label: "Business Portal Verified", icon: BadgeCheck },
            ].map(({ label, icon: Icon }) => (
              <li
                key={label}
                data-hero-chip
                className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/5 px-4 py-2 text-xs font-semibold text-ivory/85 backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Imagery */}
        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:h-[58vh] lg:max-w-none">
          <div data-hero-img-main className="relative aspect-[4/5] w-[82%] overflow-hidden rounded-card border border-ivory/10 shadow-lift sm:aspect-[5/5] lg:aspect-auto lg:h-full lg:w-[78%]">
            <Image
              src={HERO_IMAGE}
              alt="Hands arranging handcrafted white ceramic plates and bowls for export"
              fill
              priority
              sizes="(max-width: 1024px) 82vw, 40vw"
              className="object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>

          <div data-hero-img-small className="absolute -bottom-8 right-0 hidden w-[46%] overflow-hidden rounded-card border-4 border-navy shadow-lift sm:block lg:bottom-0 lg:w-[40%]">
            <div className="relative aspect-[4/5]">
              <Image
                src={HERO_IMAGE_SMALL}
                alt="Minimal ceramic tableware in soft natural light"
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating badges */}
          <div
            data-hero-badge
            className="animate-float absolute -left-4 top-6 rounded-card border border-ivory/10 bg-ivory px-5 py-4 shadow-lift sm:-left-8"
          >
            <p className="font-number text-2xl font-semibold text-navy">{PRODUCT_COUNT}+</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Export products</p>
          </div>
          <div
            data-hero-badge
            className="absolute -right-2 bottom-16 rounded-card border border-ivory/10 bg-blue/80 px-5 py-4 shadow-lift backdrop-blur sm:right-4"
          >
            <p className="font-number text-2xl font-semibold text-gold">1 pc</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/70">Min. MOQ - accessories</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/50">Scroll</span>
        <span className="h-9 w-px overflow-hidden bg-ivory/15">
          <span className="block h-1/2 w-full animate-[scrollcue_1.6s_ease-in-out_infinite] bg-gold" style={{ animationName: "scrollcue" }} />
        </span>
        <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}100%{transform:translateY(220%)}}`}</style>
      </div>
    </section>
  );
}
