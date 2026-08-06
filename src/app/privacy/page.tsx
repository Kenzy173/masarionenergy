import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Masarion Energy",
};

const sections = [
  {
    heading: "Introduction",
    body:
      "Masarion Energy ('we', 'us', 'our') is committed to protecting the privacy of our website visitors, clients, and partners. This Privacy Policy explains what information we collect when you interact with our website or engage our services, how we use it, and the choices you have.",
  },
  {
    heading: "Information we collect",
    body:
      "We collect information that you provide directly to us and information collected automatically when you use our website.",
    items: [
      "Contact details you submit through our enquiry forms, including your name, email address, phone number, company, and message.",
      "Communications you send to us by email or telephone, including records of those conversations.",
      "Information about your engagement with our services, such as project requirements you share with us.",
      "Technical data collected automatically, including your IP address, browser type, pages visited, and time spent on the site.",
    ],
  },
  {
    heading: "How we use your information",
    body:
      "We use the information we collect for the following purposes:",
    items: [
      "To respond to enquiries and provide the services you request.",
      "To communicate with you about your project or engagement.",
      "To improve our website, services, and client experience.",
      "To meet our legal, regulatory, and compliance obligations.",
      "To protect the security and integrity of our systems and operations.",
    ],
  },
  {
    heading: "Legal basis for processing",
    body:
      "We process personal information on the basis of legitimate business interests, including responding to enquiries and providing services, performance of a contract where you engage our services, compliance with legal obligations, and, where required, your consent.",
  },
  {
    heading: "How we share information",
    body:
      "We do not sell personal information. We may share information with trusted third parties only where necessary to provide our services, including:",
    items: [
      "Service providers who support our operations, such as hosting and IT providers.",
      "Professional advisers, including legal and financial advisors, where required.",
      "Regulatory or law enforcement authorities where we are legally required to do so.",
    ],
  },
  {
    heading: "Data retention",
    body:
      "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, to meet our legal obligations, or to resolve disputes.",
  },
  {
    heading: "Your rights",
    body:
      "Depending on your location, you may have rights over your personal information, including the right to access, correct, or delete your data, to object to or restrict processing, and to data portability. To exercise any of these rights, please contact us using the details at the end of this policy.",
  },
  {
    heading: "Cookies",
    body:
      "Our website may use cookies and similar technologies to improve functionality and understand how visitors use the site. You can control cookies through your browser settings. Where applicable, we seek consent before setting non-essential cookies.",
  },
  {
    heading: "Data security",
    body:
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or alteration. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "International transfers",
    body:
      "Masarion Energy operates in Nigeria and the United Kingdom. Where information is transferred across borders, we take steps to ensure it is protected to appropriate standards.",
  },
  {
    heading: "Changes to this policy",
    body:
      "We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Masarion Energy collects, uses, and protects your personal information."
      updated="4 August 2026"
      sections={sections}
    />
  );
}
