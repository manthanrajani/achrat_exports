# Achrat Exports - Website

A modern, fully responsive, scroll-animated website for **Achrat Exports**, an India-based merchant exporter of ceramic crockery, ceramic sanitary ware, brass and stainless-steel bathroom accessories and hardware products.

**Stack:** Next.js 16 (App Router, SSG) · TypeScript (strict) · Tailwind CSS v4 · GSAP + ScrollTrigger (@gsap/react) · Lenis · React Hook Form + Zod · Nodemailer · Swiper · lucide-react

**No database. No admin. No auth.** All content lives in typed static files under `src/data/`. The only dynamic feature is the enquiry form → `/api/enquiry`, which emails the enquiry to your business inbox and an auto-reply to the buyer. Nothing is stored.

---

## 1. Quick start

```bash
# 1) Install dependencies
npm install

# 2) Configure environment (optional for local dev; required for the enquiry form)
cp .env.example .env
#    → fill in SMTP_* / MAIL_* and NEXT_PUBLIC_* values

# 3) Run the dev server
npm run dev          # http://localhost:3000

# 4) Production build
npm run build
npm run start

# 5) Quality gates
npx next typegen     # generated route types
npm run typecheck    # tsc --noEmit (strict)
npm run lint         # ESLint
```

---

## 2. Project structure

```
src/
  app/                  # routes (all SSG) + api/enquiry (only backend endpoint)
  components/
    ui/                 # Button, Section, SectionHeading, Card, Badge, Accordion,
                        # Lightbox, Breadcrumbs, PageHero, FormField(s), LegalPage
    layout/             # Header (+drawer), Footer, Floating widgets, ScrollProgress
    sections/           # Hero, TrustBar, AboutPreview, FeaturedProducts, Categories,
                        # WhyChooseUs, Process/ExportTimeline, GlobalReach/TradeGlobe,
                        # Testimonials, FAQ preview, CTA banner, EnquiryStrip,
                        # ProductsExplorer, ProductGallery, GalleryGrid
    forms/              # EnquiryForm (react-hook-form + zodResolver)
    animations/         # SmoothScroll (Lenis), Reveal/RevealGroup, Counter, Preloader
  config/site.ts        # ← business details, placeholders [PHONE] [EMAIL] [WHATSAPP] [IEC] [LINKS]
  data/                 # products.ts · categories.ts · testimonials.ts · faqs.ts · process.ts · gallery.ts
  lib/                  # validations.ts (shared Zod) · mail.ts · rateLimit.ts · gsap.ts · seo.tsx · utils.ts
public/images/og-cover.jpg
```

## 3. How to add or edit a product (no admin needed)

1. **Drop the photo** into `public/images/products/` (or keep a remote URL).
2. **Edit** `src/data/products.ts` and add or update an entry:
   ```ts
   {
     slug: "my-new-bowl",                    // unique, kebab-case → /products/my-new-bowl
     name: "My New Bowl",
     category: "ceramic-crockery",           // one of the 4 slugs in src/data/categories.ts
     tagline: "…", description: ["…"],
     images: [{ src: "/images/products/my-bowl.jpg", alt: "…" }],
     showPrice: true, priceINR: 499, priceUnit: "piece",   // or showPrice: false → "Price on Request"
     moq: "Low MOQ - on request", material: "…", packaging: "…", origin: "India",
     featured: true,                         // shows on the home page (top 6 featured used)
   }
   ```
3. **Redeploy.** Category counts, sitemap, related products and the search index update automatically.

Editing FAQs, testimonials, process steps or gallery images works the same way in `src/data/`.

---

## 4. Environment variables

See `.env.example`. Only the enquiry form needs env vars; the site builds and runs fully static without them (the form then shows the built-in email/WhatsApp fallback).

| Variable | Purpose |
|---|---|
| `EMAIL_PROVIDER` | `smtp` (default) or `resend` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Your mailbox SMTP credentials |
| `MAIL_FROM` | Sender identity, e.g. `Achrat Exports <sales@achratexports.com>` |
| `MAIL_TO` | Inbox that receives enquiries |
| `RESEND_API_KEY` | Only if `EMAIL_PROVIDER=resend` |
| `NEXT_PUBLIC_SITE_URL` | `https://achratexports.com` |
| `NEXT_PUBLIC_WHATSAPP` | Digits only, with country code (`91…`) |
| `NEXT_PUBLIC_PHONE` / `NEXT_PUBLIC_EMAIL` | Displayed contact details |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Optional Cloudflare Turnstile spam check |

### Gmail App Password example (free, works today)
1. Use a Gmail/Google-Workspace mailbox (e.g. `sales@achratexports.com` forwarded to Gmail).
2. Enable **2-Step Verification** on the Google account.
3. Go to **Google Account → Security → App passwords** → create one named “Website”.
4. Set:
   ```
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="465"
   SMTP_USER="youraddress@gmail.com"
   SMTP_PASS="xxxx xxxx xxxx xxxx"   # the 16-char app password
   ```
   (Zoho: `smtp.zoho.com`, SSL 465 with the account password or app password.)

### Spam protection (already built in)
Honeypot field · 3-second minimum time-to-submit · in-memory IP rate limit (5 req / 10 min) · optional Turnstile. The server re-validates with the same Zod schema and escapes all HTML in emails.

---

## 5. Placeholders to replace before go-live

| Placeholder | Where |
|---|---|
| `[PHONE]` `[EMAIL]` `[WHATSAPP]` | env vars → shown via `src/config/site.ts` |
| `[IEC CODE]` | `src/config/site.ts` → `SITE.iec` (footer credential strip) |
| `[LINKS]` (Instagram/LinkedIn/Facebook/YouTube) | `src/config/site.ts` → `SITE.socials` |
| Confirm **address** (A K Road, Surat) | `src/config/site.ts` → `SITE.address` |
| SMTP credentials | `.env` (never commit) |
| **All Pexels stock photos** | marked `// REPLACE WITH REAL PHOTO` in `src/data/*` and section files |
| 2 sample testimonials | `src/data/testimonials.ts` (`isSample: true`, `SAMPLE - REPLACE`) |
| Payment & lead-time wording | `src/data/faqs.ts`, `src/app/global-reach/page.tsx` `[PLACEHOLDER - …]` |
| Policy pages | marked “Owner review pending - generic template” |

---

## 6. Deployment

### A. Vercel (recommended, free tier is enough)
1. Push this repo to GitHub/GitLab.
2. **vercel.com → Add New → Project → Import.**
3. Framework auto-detected (Next.js). No build settings needed.
4. **Settings → Environment Variables:** add everything from `.env.example` (Production + Preview).
5. Deploy.
6. **Settings → Domains:** add `achratexports.com` and `www.achratexports.com`. Choose one to redirect to the other. Vercel issues free automatic SSL.
7. DNS at your registrar:
   ```
   A     @      76.76.21.21
   CNAME www    cname.vercel-dns.com
   ```

### B. VPS alternative (Ubuntu + Node LTS + PM2 + Nginx)
```bash
# Node LTS + PM2
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs nginx certbot python3-certbot-nginx
sudo npm i -g pm2

# App
git clone <repo> && cd achrat-exports
cp .env.example .env   # fill values
npm ci && npm run build
pm2 start npm --name achrat -- start
pm2 save && pm2 startup

# Nginx vhost → proxy :80 → 127.0.0.1:3000 (then certbot --nginx -d achratexports.com -d www.achratexports.com)
```
DNS: `A @ <server-ip>` and `A www <server-ip>`.

### Old-URL redirects
Handled via 301s in `next.config.ts` (`/about-us → /about`, `/contact-us → /contact`, `/our-products → /products`, etc.). After go-live, check Google Search Console for other old paths and add them there.

---

## 7. Test-the-form checklist

- [ ] `MAIL_TO` inbox receives a formatted email with **all fields** and correct reply-to (buyer’s email)
- [ ] Buyer receives the branded auto-reply
- [ ] Invalid inputs show clear inline errors (client) and are rejected server-side too
- [ ] Submitting in under 3 seconds → rejected (`too_fast`)
- [ ] Filling the honeypot (DevTools) → silently accepted, no email
- [ ] 6 rapid submissions → 429 with fallback shown
- [ ] Success redirects to `/thank-you`
- [ ] Wrong/missing SMTP → error state shows email + WhatsApp fallback

## 8. Go-live checklist

- [ ] Replace all placeholders (section 5) & real product photos
- [ ] Confirm address, payment terms, lead-time wording
- [ ] Set production env vars; test form end-to-end on the live domain
- [ ] Submit sitemap (`/sitemap.xml`) in Google Search Console; fetch robots.txt
- [ ] Update the 301 redirect list for any legacy URLs
- [ ] Run Lighthouse (target 90+ on all four categories)
- [ ] Test at 320 / 375 / 414 / 768 / 1024 / 1280 / 1440 / 1920 / 2560 px
- [ ] Replace remaining sample testimonials with real buyer quotes

---

© 2026 Achrat Exports, Surat, Gujarat, India. FIEO Registered · GSTIN 24BLSPL5948Q1Z0.
