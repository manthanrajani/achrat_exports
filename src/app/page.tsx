import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { PartnersSection } from "@/components/sections/partners-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessPreview } from "@/components/sections/process-preview";
import { GlobalReachSection } from "@/components/sections/global-reach-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqPreview } from "@/components/sections/faq-preview";
import { CtaBanner } from "@/components/sections/cta-banner";
import { EnquiryStrip } from "@/components/sections/enquiry-strip";
import { pageMetadata } from "@/lib/seo";

const HOME_TITLE = "Achrat Exports | Ceramic Crockery & Bathroom Accessories Exporter from Surat, India";

export const metadata: Metadata = {
  ...pageMetadata({
    title: HOME_TITLE,
    description:
      "Achrat Exports, a FIEO-registered, GST-verified merchant exporter from Surat, India. Ceramic crockery, sanitary ware, brass and steel bathroom accessories and hardware. Custom designs, low MOQ, worldwide shipping.",
    path: "/",
    keywords: [
      "ceramic crockery exporter India",
      "ceramic tableware manufacturer Surat",
      "brass bathroom accessories exporter",
      "custom ceramic dinnerware",
      "India export company",
      "merchant exporter Gujarat",
      "ceramic sanitary ware exporter",
    ],
  }),
  title: { absolute: HOME_TITLE },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <FeaturedProducts />
      <CategoryShowcase />
      <PartnersSection />
      <WhyChooseUs />
      <ProcessPreview />
      <GlobalReachSection />
      <TestimonialsSection />
      <FaqPreview />
      <CtaBanner />
      <EnquiryStrip />
    </>
  );
}
