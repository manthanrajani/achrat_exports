import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center overflow-hidden bg-navy pt-24 text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <p className="absolute right-0 top-1/2 -translate-y-1/2 select-none font-number text-[22vw] font-semibold leading-none text-ivory/[0.04]">
          404
        </p>
      </div>
      <Container className="relative py-24 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <Compass className="h-7 w-7 text-gold" aria-hidden="true" />
        </span>
        <p className="mt-8 font-number text-xs font-semibold uppercase tracking-[0.3em] text-gold">Error 404</p>
        <h1 className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-ivory">
          This container never reached the port
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist or was moved. Let&rsquo;s get you back to solid ground.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="gold" ariaLabel="Back to homepage">
            Back to Home
          </Button>
          <Button href="/products" variant="ghost-light">
            Browse Products
          </Button>
        </div>
        <p className="mt-10 text-sm text-ivory/50">
          Looking for something specific? <Link href="/contact" className="link-underline text-gold">Contact us</Link>. We answer fast.
        </p>
      </Container>
    </section>
  );
}
