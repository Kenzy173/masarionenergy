import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  cta,
  meta,
}: {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  meta?: ReactNode;
}) {
  return (
    <section className="bg-indigo-700 text-paper">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="max-w-2xl">
            <h1 className="text-balance type-display text-paper">
              {title}
            </h1>
            <p className="mt-6 max-w-xl type-body text-indigo-100">
              {description}
            </p>
            {cta && (
              <Link
                href={cta.href}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
              >
                {cta.label}
              </Link>
            )}
          </div>
          {meta && (
            <div className="border-indigo-600/70 pt-8 md:border-l md:pt-0 md:pl-12">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
