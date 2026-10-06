import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { FloatingWidgets } from "@/components/layout/floating-widgets";
import { Header } from "@/components/layout/header";
import { Preloader } from "@/components/animations/preloader";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import { JsonLd, localBusinessLd, organizationLd, websiteLd } from "@/lib/seo";
import { SITE } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Achrat Exports | Ceramic Crockery & Bathroom Accessories Exporter from Surat, India",
    template: "%s | Achrat Exports",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/icons/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-dvh flex-col bg-ivory font-body text-muted">
        <JsonLd data={[organizationLd(), websiteLd(), localBusinessLd()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <Preloader />
        <Header />
        <SmoothScroll>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <FloatingWidgets />
      </body>
    </html>
  );
}
