"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }

  // Always a solid, visible amber button once shown — never a transparent
  // "ghost" that reads as a blank floating bar (Android scroll artifact).
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
      className={`scroll-to-top fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-transparent bg-amber-600 text-indigo-900 shadow-[0_6px_24px_rgba(216,152,24,0.45)] hover:bg-amber-500 hover:shadow-[0_6px_24px_rgba(216,152,24,0.55)] md:right-6 md:h-11 md:w-11 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
