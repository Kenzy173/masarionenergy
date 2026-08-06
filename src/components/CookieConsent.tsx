"use client";

import { useEffect, useState } from "react";

// localStorage mirrors the choice so the banner never re-appears; the cookie
// itself is the browser-side "collector" record of the user's preference.
const CONSENT_STORAGE = "masarion_consent";
const CONSENT_COOKIE = "masarion_consent";

type Consent = "all" | "essential" | null;

function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE);
    if (v === "all" || v === "essential") return v;
  } catch {
    /* storage unavailable — fall through */
  }
  return null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent()) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  function choose(value: "all" | "essential") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE, value);
    } catch {}
    // One-year cookie recording the choice (essential preference — no consent
    // required, but non-essential tracking would only ever fire on "all").
    document.cookie = `${CONSENT_COOKIE}=${value}; max-age=${
      60 * 60 * 24 * 365
    }; path=/; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper p-4 shadow-[0_-4px_24px_rgba(27,27,30,0.10)] md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-ink">We value your privacy</p>
          <p className="mt-1 type-body-sm text-ink-soft">
            We store a small token in your browser so the site loads instantly on
            your next visit, and record your choice below in a cookie. You can
            accept or stick to essential-only — either way the site works fully.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="inline-flex items-center justify-center rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-indigo-300 hover:text-indigo-700"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}
