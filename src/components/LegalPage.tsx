import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageHeader } from "./PageHeader";

export type LegalSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export function LegalPage({
  title,
  description,
  updated,
  sections,
}: {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title={title}
          description={description}
          meta={
            <p className="text-sm text-indigo-200">
              Last updated: <span className="font-medium text-paper">{updated}</span>
            </p>
          }
        />

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <ol className="space-y-12">
              {sections.map((section, i) => (
                <li key={section.heading} className="border-t border-line pt-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-indigo-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="type-subhead text-ink">{section.heading}</h2>
                  </div>
                  {section.body && (
                    <p className="mt-4 type-body-sm text-ink-soft">
                      {section.body}
                    </p>
                  )}
                  {section.items && (
                    <ul className="mt-4 space-y-2.5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 type-body-sm text-ink-soft"
                        >
                          <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden="true">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            {/* Contact for legal inquiries */}
            <div className="mt-16 rounded-2xl border border-line bg-paper-warm p-6">
              <h2 className="type-label text-ink">Questions about this document?</h2>
              <p className="mt-2 type-body-sm text-ink-soft">
                Contact our team at{" "}
                <a
                  href="mailto:contact@masarionenergy.com"
                  className="font-medium text-indigo-700 hover:underline"
                >
                  contact@masarionenergy.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+447931937037"
                  className="font-medium text-indigo-700 hover:underline"
                >
                  +44 (0)7931 937 037
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
