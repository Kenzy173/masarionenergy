import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Outcomes } from "@/components/Outcomes";
import { Testimonials } from "@/components/Testimonials";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <Industries />
        <About />
        <WhyChooseUs />
        <Outcomes />
        <Testimonials />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  );
}
