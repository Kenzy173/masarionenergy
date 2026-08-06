import type { Metadata } from "next";
import { Unbounded, Plus_Jakarta_Sans } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollReset } from "@/components/ScrollReset";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const DIRECTION_CONTRACT = `
  THESIS: Masarion competes on execution, not invented concept.
  Precision, restraint, and real financial proof beat rig-cliche
  and SaaS-flashy category defaults.
  OWN-WORLD: Logo green #082818 dominant across large regions (nav,
  hero, dividers), logo gold #D89818 accent for CTAs, warm paper
  #FFFFFF/#F7F5F1 ground, near-black #1B1B1E ink. Unbounded for
  display headlines, Plus Jakarta Sans for body, UI, and data.
  STORY: An operator or investor sees scale and cost-efficiency
  proof in seconds, reads six end-to-end services, and requests
  a consultation.
  FIRST VIEWPORT: Indigo hero block, confident headline, single
  CTA, stat proof band beneath in tabular figures.
  FORM: User-pinned refinement of the inherited Versatile Group
  Energy palette, chosen over concept-seed rolls (seed 3649b372
  Market Terminal, seed c5db0e55 Field Record) after user steer
  toward the incumbent reference.
  FINISH: unreviewed and undocumented is unfinished; this build
  ends with the finish review, the verdict, and DESIGN.md.
`;

function DirectionContract() {
  return (
    <div
      suppressHydrationWarning
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
    />
  );
}

export const metadata: Metadata = {
  title: "Masarion Energy | Innovative & Sustainable Energy Solutions",
  description:
    "Finance through operations under one provider. Masarion Energy delivers oilfield finance, development, operations, engineering, flare gas reduction, and crude trading with a 50% cost reduction for clients.",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {/* Skip link: WCAG 2.4.1 Bypass Blocks. Wrapped in a nav landmark so no
            body-level content sits outside a region (AChecker ARIA11). */}
        <nav aria-label="Skip links">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-amber-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-indigo-900"
          >
            Skip to content
          </a>
        </nav>
        {/* Synchronous, parse-time scroll reset. Runs during HTML parsing, before
            the browser paints or restores any saved scroll position, so a fresh
            load can never flash mid-page (common on mobile / port-forwarded URLs). */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if ("scrollRestoration" in history) {
                  history.scrollRestoration = "manual";
                }
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              })();
            `,
          }}
        />
        <DirectionContract />
        <ScrollReset />
        {children}
        {/* Named complementary region so the floating control is inside a
            landmark (AChecker: all content contained by landmarks). */}
        <aside aria-label="Scroll to top">
          <ScrollToTop />
        </aside>
        <CookieConsent />
      </body>
    </html>
  );
}
