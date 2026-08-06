import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { services, serviceDetails } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service ? `${service.name} | Masarion Energy` : "Masarion Energy" };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const detail = serviceDetails[service.slug];
  const index = services.findIndex((s) => s.slug === slug);

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title={service.name}
          description={detail.intro}
          cta={{ label: "Request a consultation", href: "/contact" }}
          meta={
            <div>
              <p className="text-sm font-medium text-indigo-200">
                Service {index + 1} of {services.length}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={
                        s.slug === slug
                          ? "flex items-center gap-2 text-[15px] font-medium text-paper"
                          : "flex items-center gap-2 text-[15px] text-indigo-200 transition-colors hover:text-paper"
                      }
                    >
                      <span className="font-mono text-xs text-indigo-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        <section className="border-t border-line bg-paper-warm">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            {/* Body paragraphs */}
            {detail.body.length > 0 && (
              <div className="mb-14 space-y-5">
                {detail.body.map((para, i) => (
                  <p key={i} className="type-body-sm text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Subsections */}
            {detail.subsections.length > 0 && (
              <div className="mb-14 space-y-10">
                {detail.subsections.map((sub, i) => (
                  <div key={i}>
                    <h2 className="type-subhead text-ink">{sub.heading}</h2>
                    {sub.body && (
                      <p className="mt-2 type-body-sm text-ink-soft">
                        {sub.body}
                      </p>
                    )}
                    {sub.items.length > 0 && (
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 type-body-sm text-ink-soft">
                            <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden="true">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Capabilities list */}
            {detail.capabilities.length > 0 && (
              <>
                <h2 className="type-subhead text-ink">
                  What this covers
                </h2>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {detail.capabilities.map((capability) => {
                    const [lead, ...rest] = capability.split(": ");
                    return (
                      <li key={capability} className="py-6">
                        <p className="type-body-sm text-ink">
                          <span className="font-medium">{lead}</span>
                          {rest.length > 0 ? `: ${rest.join(": ")}` : ""}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="type-body-sm text-ink-soft">
            Looking for a different service?{" "}
            <Link href="/services" className="font-medium text-indigo-700 hover:text-amber-800">
              See all six
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
