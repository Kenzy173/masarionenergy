import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="border-y border-line bg-paper-warm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between gap-6">
          <p className="type-kicker text-indigo-500">Industries we provide for</p>
          <p className="hidden font-mono text-xs text-indigo-300 sm:block">
            {String(industries.length).padStart(2, "0")} sectors
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.name} className="bg-paper-warm p-6 transition-colors hover:bg-paper">
              <h3 className="type-label font-semibold text-ink">{industry.name}</h3>
              <p className="mt-1.5 type-body-sm text-ink-soft">
                {industry.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
