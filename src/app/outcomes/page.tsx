import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { outcomes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Project Outcomes | Masarion Energy",
};

export default function OutcomesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title="Project outcomes on record"
          description="Company-level results carried forward from our track record, presented as outcomes rather than attributed case studies, since no client names or locations are published alongside them."
          meta={
            <ul className="flex flex-col gap-3">
              {outcomes.map((outcome, i) => (
                <li key={outcome.slug} className="flex items-center gap-2 type-body-sm text-indigo-100">
                  <span className="font-mono text-xs text-indigo-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {outcome.title}
                </li>
              ))}
            </ul>
          }
        />

        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <Link
                  key={outcome.slug}
                  href={`/outcomes/${outcome.slug}`}
                  className="group flex flex-col border-t border-line pt-8"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="type-data text-indigo-700">
                      {outcome.figure}
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-700"
                    />
                  </div>
                  <h2 className="mt-3 text-lg font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-indigo-700">
                    {outcome.title}
                  </h2>
                  <p className="mt-2 type-body-sm text-ink-soft">
                    {outcome.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-700">
                    Read the outcome
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-indigo-700 text-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-balance type-headline text-paper">
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
