import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Masarion Energy",
};

const sections = [
  {
    heading: "Acceptance of terms",
    body:
      "By accessing or using the Masarion Energy website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the website.",
  },
  {
    heading: "Our services",
    body:
      "Masarion Energy provides end-to-end oilfield services, including oilfield finance, oilfield development, oilfield operations, oilfield engineering, flare gas reduction, and crude trading. Specific service engagements are governed by separate written agreements, which take precedence over these general terms.",
  },
  {
    heading: "Use of the website",
    body:
      "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of, any third party.",
    items: [
      "You must not misuse the website by knowingly introducing viruses or other malicious code.",
      "You must not attempt to gain unauthorised access to any part of the website or its systems.",
      "You must not use the website to transmit unsolicited or unauthorised advertising.",
    ],
  },
  {
    heading: "Intellectual property",
    body:
      "All content on this website, including text, graphics, logos, imagery, and the Masarion Energy name and mark, is the property of Masarion Energy or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.",
  },
  {
    heading: "Confidentiality",
    body:
      "Information you share with us about your projects, operations, or financial requirements is treated as confidential. We will not disclose such information to third parties except as required to provide our services or by law.",
  },
  {
    heading: "Disclaimers",
    body:
      "The information on this website is provided for general information purposes only and does not constitute professional advice. We make reasonable efforts to keep the information accurate and up to date, but we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the content.",
  },
  {
    heading: "Limitation of liability",
    body:
      "To the fullest extent permitted by law, Masarion Energy shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or reliance on its content.",
  },
  {
    heading: "Indemnification",
    body:
      "You agree to indemnify and hold Masarion Energy harmless from any claims, losses, or damages arising from your breach of these Terms of Service or your misuse of the website.",
  },
  {
    heading: "Governing law",
    body:
      "Masarion Energy is a registered company in Nigeria and the United Kingdom. These Terms of Service are governed by the laws applicable in the jurisdictions in which we operate, and any disputes shall be subject to the exclusive jurisdiction of the courts in those jurisdictions.",
  },
  {
    heading: "Changes to these terms",
    body:
      "We may revise these Terms of Service at any time. The date at the top of this page reflects the most recent revision. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that govern your use of the Masarion Energy website and engagement with our services."
      updated="4 August 2026"
      sections={sections}
    />
  );
}
