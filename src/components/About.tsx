import { offices } from "@/lib/content";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <p className="type-kicker text-indigo-500">
            02 · About
          </p>
          <h2 className="mt-3 text-balance type-headline">
            About Us
          </h2>
          <p className="mt-6 type-body text-ink-soft">
            Masarion Energy is a registered company in Nigeria and the UK. We
            bring best practices in the field of oil and gas, design, operations,
            and maintenance, and focus on safety and low CAPEX and OPEX costs
            while focusing on the highest value activities. We provide smart
            tailored solutions for clients with a focus on a multi-skilled work
            force and collaboration that set new standards in the areas of
            aquaculture, renewable energy, and carbon capture storage and
            utilisation.
          </p>
        </div>

        <dl className="flex flex-col gap-8 border-t border-line pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12 md:self-center">
          {offices.map((office) => (
            <div key={office.region}>
              <dt className="text-sm font-medium text-indigo-700">
                {office.region}
              </dt>
              <dd className="mt-1.5 type-body-sm text-ink-soft">
                {office.address}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
