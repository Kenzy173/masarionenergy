const costPoints = [
  "Minimise CAPEX spend",
  "Extreme cost-effective OPEX cost",
  "Significant reduction in SURF / SPS costs",
  "Flexible contracting period(s)",
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative bg-indigo-700 text-paper overflow-hidden">
      {/* Single structural accent, not a repeating pattern */}
      <div className="absolute right-0 top-0 w-px h-full bg-amber-500/15" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 w-12 h-px bg-amber-500/20 -translate-y-1/2" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <p className="type-kicker text-indigo-300">
            Financial Benefit
          </p>
          <h2 className="mt-4 text-balance type-display text-paper">
            50% Cost <span className="text-amber-500">Reduction</span>
          </h2>
          <p className="mt-6 max-w-2xl type-body text-indigo-100">
            We offer a full end-to-end service, working with partners to
            deliver asset development strategies, leveraging a scalable,
            multi-disciplined team covering all aspects from rock face to
            export, as well as investment and financial solutions.
          </p>
        </div>

        <ul className="flex flex-col gap-6 border-t border-indigo-600/70 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12 md:self-center">
          {costPoints.map((point) => (
            <li key={point} className="flex items-start gap-4 text-lg leading-snug text-indigo-50">
              <span className="mt-[3px] shrink-0 font-mono text-lg leading-none text-amber-500" aria-hidden="true">+</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
