import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Masarion Energy",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title="Let's talk about your field"
          description="Tell us the stage it's at and what you need: finance, operations, engineering, or all three. A member of the team will get back to you directly."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
