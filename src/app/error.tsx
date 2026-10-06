"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70dvh] items-center bg-mist pt-24">
      <Container className="py-24 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
          <AlertTriangle className="h-7 w-7 text-navy" aria-hidden="true" />
        </span>
        <h1 className="mt-8 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-ink">
          Something went wrong on our side
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          An unexpected error occurred while loading this page. Please try again. If it persists, reach us directly
          and we&rsquo;ll help right away.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center gap-2 rounded-soft bg-navy px-7 py-3.5 font-semibold text-ivory transition-all duration-300 hover:bg-blue"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Try Again
          </button>
          <Button href="/" variant="outline" showIcon={false}>
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
