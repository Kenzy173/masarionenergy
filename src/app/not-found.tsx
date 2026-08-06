import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found | Masarion Energy",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="flex flex-1 items-center justify-center">
        <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="type-display text-indigo-700" aria-hidden="true">
            404
          </p>
          <h1 className="mt-2 text-balance type-headline text-ink">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md type-body text-ink-soft">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
            Let&rsquo;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-line bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-indigo-300 hover:text-indigo-700"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
