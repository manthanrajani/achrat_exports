import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { SITE, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Thank You: Enquiry Received",
  description: "Your enquiry has been received by the Achrat Exports team. We typically respond within 1-2 business days.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Section className="flex min-h-[70dvh] items-center pt-28 lg:pt-32">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-10 w-10 text-teal" aria-hidden="true" />
        </span>
        <h1 className="mt-8 font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-ink">
          Thank you. Your enquiry is on its way
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          We&rsquo;ve received your details and sent a confirmation to your inbox. Our export team will review your
          requirement and reply with a detailed quotation.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 rounded-card border border-navy/8 bg-white p-5 shadow-card">
          <Timer className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-sm text-muted">
            Typical response time: <span className="font-semibold text-navy">1-2 business days</span>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/products" variant="primary">
            Browse More Products
          </Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>

        <a
          href={whatsappLink(`Hello ${SITE.name}, I just submitted an enquiry and wanted to add some details.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-navy"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Need to add something? Message us on WhatsApp
        </a>
      </Container>
    </Section>
  );
}
