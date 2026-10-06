import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} handles the personal details you share through our enquiry forms. Nothing is stored on this website.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy Policy"
      description="Plain-language summary of what we collect, why, and what we never do with it."
      updated="January 2026"
      sections={[
        {
          heading: "Overview",
          paragraphs: [
            `${SITE.name} ("we", "our", "us") operates ${SITE.domain}. This policy explains, in plain language, how we handle information shared with us through this website. It is a generic template prepared for owner review and will be finalized before or shortly after launch.`,
          ],
        },
        {
          heading: "What we collect",
          paragraphs: [
            "When you submit our enquiry or contact form, we collect the details you type: your name, company, country, email address, phone/WhatsApp number, product interest, estimated quantity, timeframe, whether you need a custom design, and your message. We also record the page you enquired from, purely to answer you more accurately.",
          ],
        },
        {
          heading: "How your information is used",
          paragraphs: [
            "Your submission is delivered to our business inbox as an email so our export team can respond with a quotation. A short automated confirmation is sent to the email address you provide. That is the entire purpose for which your data is used: responding to your enquiry and, if you proceed, fulfilling your order.",
          ],
        },
        {
          heading: "What we do NOT do",
          paragraphs: [
            "This website has no database, no user accounts and no analytics trackers installed by us. Your enquiry is not stored on the website. We do not sell, rent or trade your personal information, and we do not add you to marketing lists without your explicit consent.",
          ],
        },
        {
          heading: "Third-party services",
          paragraphs: [
            "Form emails are delivered through our chosen email provider (SMTP or Resend). The embedded map on our Contact page is provided by Google, which may set its own cookies when you interact with it. WhatsApp links open the WhatsApp service, which has its own privacy policy. Cloudflare Turnstile may be used occasionally to verify that form submissions are human.",
          ],
        },
        {
          heading: "Data retention & security",
          paragraphs: [
            "Enquiry emails are retained in our business mailbox for as long as needed to serve you and meet record-keeping obligations. We apply reasonable administrative and technical safeguards; however, no internet transmission can be guaranteed 100% secure.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You may ask us at any time what personal information we hold about you, request a correction, or ask us to delete it. Simply email us using the contact details below and we will act within a reasonable timeframe.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy? Contact ${SITE.contactPerson} at ${SITE.email} or ${SITE.phone}, or write to ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postalCode}, India.`,
          ],
        },
      ]}
    />
  );
}
