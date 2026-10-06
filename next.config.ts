import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Stock photography placeholders. REPLACE WITH REAL PHOTOS when available
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
  /**
   * 301 redirect plan. Keeps legacy achratexports.com URLs working.
   * Extend this list with any additional old paths you discover in
   * Google Search Console (Coverage / Pages report) after go-live.
   */
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index\.:ext(html|php|htm|aspx)", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-story", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/reach-us", destination: "/contact", permanent: true },
      { source: "/our-products", destination: "/products", permanent: true },
      { source: "/collections", destination: "/products", permanent: true },
      { source: "/catalogue", destination: "/products", permanent: true },
      { source: "/catalog", destination: "/products", permanent: true },
      { source: "/enquiry", destination: "/get-quote", permanent: true },
      { source: "/quote", destination: "/get-quote", permanent: true },
      { source: "/request-quote", destination: "/get-quote", permanent: true },
      { source: "/inquiry", destination: "/get-quote", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/oem", destination: "/custom-design", permanent: true },
      { source: "/private-label", destination: "/custom-design", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/shipping", destination: "/shipping-policy", permanent: true },
      { source: "/shipping-and-export-policy", destination: "/shipping-policy", permanent: true },
    ];
  },
};

export default nextConfig;
