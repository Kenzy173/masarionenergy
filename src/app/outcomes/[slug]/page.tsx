import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { outcomes } from "@/lib/content";

export function generateStaticParams() {
  return outcomes.map((outcome) => ({ slug: outcome.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const outcome = outcomes.find((o) => o.slug === slug);
  return {
    title: outcome ? `${outcome.title} | Masarion Energy` : "Masarion Energy",
  };
}

export default async function OutcomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const outcome = outcomes.find((o) => o.slug === slug);
  if (!outcome) notFound();

  const index = outcomes.findIndex((o) => o.slug === slug);
  const prev = outcomes[(index - 1 + outcomes.length) % outcomes.length];
  const next = outcomes[(index + 1) % outcomes.length];

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title={outcome.title}
          description={outcome.tagline}
          cta={{ label: "Discuss a similar outcome", href: "/contact" }}
          meta={
            <dl className="grid grid-cols-1 gap-6">
              {outcome.stats.map((stat) => (
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

        {/* Summary */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="type-kicker text-indigo-500">Overview</p>
              <p className="mt-5 type-body text-ink">
                {outcome.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Challenge / Approach */}
        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-20">
            <div>
              <p className="type-kicker text-indigo-500">The challenge</p>
              <h2 className="mt-3 type-headline">What we were asked to solve</h2>
              <p className="mt-5 type-body-sm text-ink-soft">
                {outcome.challenge}
              </p>
            </div>
            <div>
              <p className="type-kicker text-indigo-500">The approach</p>
              <h2 className="mt-3 type-headline">How we delivered it</h2>
              <p className="mt-5 type-body-sm text-ink-soft">
                {outcome.approach}
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="type-kicker text-indigo-500">Results</p>
            <h2 className="mt-3 type-headline">Measured outcomes</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {outcome.results.map((result) => (
                <li key={result} className="flex items-start gap-4 py-6">
                  <span
                    className="mt-1 shrink-0 font-mono text-xs text-amber-600"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <p className="type-body-sm text-ink">{result}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-line pt-8">
              <p className="type-kicker text-indigo-500">Impact</p>
              <p className="mt-4 max-w-3xl type-body-sm text-ink-soft">
                {outcome.impact}
              </p>
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-10 sm:gap-6">
            <Link
              href={`/outcomes/${prev.slug}`}
              className="group flex min-w-0 items-center gap-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft size={16} className="shrink-0 transition-transform group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="block text-xs text-ink-soft">Previous</span>
                <span className="block truncate">{prev.title}</span>
              </span>
            </Link>
            <Link
              href={`/outcomes/${next.slug}`}
              className="group flex min-w-0 items-center justify-end gap-2.5 border-l border-line pl-4 text-right text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <span className="min-w-0">
                <span className="block text-xs text-ink-soft">Next</span>
                <span className="block truncate">{next.title}</span>
              </span>
              <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
