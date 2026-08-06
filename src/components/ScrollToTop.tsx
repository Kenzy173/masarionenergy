"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const IDLE_MS = 180;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
      setScrolling(true);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setScrolling(false), IDLE_MS);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  function scrollToTop() {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }

  // Solid amber while the user is actively scrolling; transparent ghost when idle.
  const solid =
    "translate-y-0 scale-100 border-transparent bg-amber-600 text-indigo-900 shadow-[0_6px_24px_rgba(216,152,24,0.45)]";
  const ghost =
    "translate-y-0 scale-95 border-amber-600/40 bg-transparent text-amber-700 shadow-[0_4px_16px_rgba(8,40,24,0.18)]";

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
      className={`scroll-to-top fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border hover:border-transparent hover:bg-amber-600 hover:text-indigo-900 hover:shadow-[0_6px_24px_rgba(216,152,24,0.45)] md:right-6 md:h-11 md:w-11 ${
        visible
          ? scrolling
            ? solid
            : ghost
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
