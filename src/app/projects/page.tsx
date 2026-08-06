import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { outcomes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Masarion Energy",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title="Outcomes on record"
          description="Company-level results carried forward from our track record, presented as outcomes, not attributed case studies, since no client names or locations are published alongside them."
          meta={
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
              {outcomes.map((outcome) => (
                <div key={outcome.title} className="flex flex-col">
                  <dd className="order-1 type-data text-paper">
                    {outcome.figure}
                  </dd>
                  <dt className="order-2 mt-1 text-sm text-indigo-200">
                    {outcome.title}
                  </dt>
                </div>
              ))}
            </dl>
          }
        />

        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-x-12 gap-y-12 border-t border-line pt-10 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <Link
                  key={outcome.slug}
                  href={`/outcomes/${outcome.slug}`}
                  className="group flex flex-col border-b border-line pb-10"
                >
                  <div className="type-data text-indigo-700">
                    {outcome.figure}
                  </div>
                  <h2 className="mt-2 text-lg font-medium text-ink transition-colors group-hover:text-indigo-700">
                    {outcome.title}
                  </h2>
                  <p className="mt-2 type-body-sm text-ink-soft">
                    {outcome.summary}
                  </p>
                  <span className="mt-4 text-sm font-medium text-indigo-700">
                    Read the outcome →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-indigo-700 text-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-balance type-headline">
              Want to talk through what this could look like for your field?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
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
