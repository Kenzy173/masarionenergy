"use client";

import { useEffect, useRef, useState } from "react";

type StatValueProps = {
  value: string;
};

/**
 * The one authored focal moment on the homepage: the hero proof band counts
 * each statistic up from zero once on load (~650ms, exponential ease-out).
 * Respects prefers-reduced-motion by rendering the final value instantly.
 */
export function StatValue({ value }: StatValueProps) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(() => `0${suffix}`);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedRef.current) {
      setDisplay(value);
      return;
    }

    const duration = 650;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(target * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, suffix, value]);

  return (
    <dd className="order-1 type-data text-paper" aria-label={value}>
      {display}
    </dd>
  );
}
