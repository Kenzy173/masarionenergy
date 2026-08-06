import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { aboutContent, companyProfile, coreValues, capabilities, offices, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Masarion Energy",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title="About Masarion Energy"
          description={aboutContent.intro}
          meta={
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dd className="order-1 type-data text-paper">
                    {stat.value}
                  </dd>
                  <dt className="order-2 mt-1 text-sm text-indigo-200">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          }
        />

        {/* Company overview */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="type-kicker text-indigo-500">Company overview</p>
            <p className="mt-5 max-w-4xl type-body text-ink">
              {companyProfile.overview}
            </p>
          </div>
        </section>

        {/* Vision + Mission */}
        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-20">
            <div>
              <p className="type-kicker text-indigo-500">Vision</p>
              <p className="mt-4 type-body-sm text-ink-soft">
                {companyProfile.vision}
              </p>
            </div>
            <div>
              <p className="type-kicker text-indigo-500">Mission</p>
              <p className="mt-4 type-body-sm text-ink-soft">
                {companyProfile.mission}
              </p>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="type-subhead text-ink">
            Core Values
          </h2>
          <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value.name} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden="true">&#9679;</span>
                <div>
                  <h3 className="type-body-sm font-medium text-ink">{value.name}</h3>
                  <p className="mt-1 type-body-sm text-ink-soft">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="type-kicker text-indigo-500">What we do</p>
                <h2 className="mt-3 text-balance type-headline">Full-service capabilities</h2>
              </div>
              <p className="type-body-sm text-ink-soft sm:max-w-xs">
                From crude trading and marine logistics to EPC delivery and energy
                infrastructure, under one integrated provider.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <li key={capability.name} className="bg-paper-warm p-6 transition-colors hover:bg-paper">
                  <h3 className="type-label font-semibold text-ink">{capability.name}</h3>
                  <p className="mt-1.5 type-body-sm text-ink-soft">
                    {capability.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-indigo-700 text-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="type-subhead">Offices</h2>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2">
              {offices.map((office) => (
                <div key={office.region}>
                  <dt className="text-sm font-medium text-amber-500">
                    {office.region}
                  </dt>
                  <dd className="mt-1.5 type-body-sm text-indigo-100">
                    {office.address}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
            >
              Request a consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
