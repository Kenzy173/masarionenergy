import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCards } from "@/components/ServiceCards";
import { Footer } from "@/components/Footer";
import { services, capabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Masarion Energy",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title="Six services, run as one lifecycle"
          description="Clients work with a single provider from capital to crude, instead of coordinating a different vendor for every stage of the field."
          meta={
            <ul className="flex flex-col gap-3">
              {services.map((service, i) => (
                <li key={service.slug} className="flex items-center gap-2 type-body-sm text-indigo-100">
                  <span className="font-mono text-xs text-indigo-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {service.name}
                </li>
              ))}
            </ul>
          }
        />

        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="sr-only">Our services</h2>
            <ServiceCards />
          </div>
        </section>

        {/* Full-service capabilities from the corporate profile */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="type-kicker text-indigo-500">Full capability</p>
                <h2 className="mt-3 text-balance type-headline">
                  Beyond the core six
                </h2>
              </div>
              <p className="type-body-sm text-ink-soft sm:max-w-xs">
                The wider Masarion capability set, covering marine, EPC, gas,
                infrastructure, procurement, and manpower.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <li key={capability.name} className="bg-paper p-6 transition-colors hover:bg-paper-warm">
                  <h3 className="type-label font-semibold text-ink">{capability.name}</h3>
                  <p className="mt-1.5 type-body-sm text-ink-soft">
                    {capability.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
