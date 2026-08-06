import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { outcomes } from "@/lib/content";

export function Outcomes() {
  return (
    <section id="outcomes" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="type-kicker text-indigo-500">
          03 · Outcomes
        </p>
        <h2 className="mt-3 text-balance type-headline">
          Outcomes on record
        </h2>
        <p className="mt-4 type-body text-ink-soft">
          Company-level results carried forward from our track record,
          presented as outcomes, not attributed case studies.
        </p>
      </div>

      <div className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
        {outcomes.map((outcome, i) => (
          <Link
            key={outcome.slug}
            href={`/outcomes/${outcome.slug}`}
            className="group flex flex-col py-8 border-t border-line"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-indigo-500 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="type-data text-indigo-700">
                  {outcome.figure}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-700"
              />
            </div>
            <h3 className="mt-3 text-lg font-medium text-ink transition-colors group-hover:text-indigo-700">
              {outcome.title}
            </h3>
            <p className="mt-1.5 type-body-sm text-ink-soft">
              {outcome.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
