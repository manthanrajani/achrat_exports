import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} handles this website. No forms, accounts, or database store personal details here.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy Policy"
      description="Plain-language summary of what this website does and does not collect."
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
            "This website does not include a contact form, account signup, or any other place to submit personal details. Browsing the pages does not ask for your name, email address, or phone number.",
          ],
        },
        {
          heading: "How your information is used",
          paragraphs: [
            "Because this website does not collect personal details, there is no enquiry record to use, store, or send. Business conversations happen outside this website.",
          ],
        },
        {
          heading: "What we do NOT do",
          paragraphs: [
            "This website has no database, no user accounts and no analytics trackers installed by us. We do not sell, rent or trade personal information, and we do not add visitors to marketing lists.",
          ],
        },
        {
          heading: "Third-party services",
          paragraphs: [
            "The embedded map on our Contact page is provided by Google, which may set its own cookies when you interact with it.",
          ],
        },
        {
          heading: "Data retention & security",
          paragraphs: [
            "This website does not keep a mailbox or a database of visitor details. We apply reasonable administrative and technical safeguards to the site itself; however, no internet connection can be guaranteed 100% secure.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "This website does not hold a file of personal information collected through its pages. Questions about that can be sent in writing to the office address below.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy? Write to ${SITE.contactPerson} at ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postalCode}, India.`,
          ],
        },
      ]}
    />
  );
}
