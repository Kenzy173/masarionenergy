import { ServiceCards } from "./ServiceCards";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="type-kicker text-indigo-500">
          01 · Services
        </p>
        <h2 className="mt-3 text-balance type-headline">
          Six services, run as one lifecycle
        </h2>
        <p className="mt-4 type-body text-ink-soft">
          Clients work with a single provider from capital to crude, instead of
          coordinating a different vendor for every stage of the field.
        </p>
      </div>

      <div className="mt-12">
        <ServiceCards />
      </div>
    </section>
  );
}
