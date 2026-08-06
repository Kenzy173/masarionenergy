"use client";

import { useLayoutEffect } from "react";

/**
 * Resets the viewport to the top on a fresh page load, before paint.
 *
 * The primary fix is a beforeInteractive script in the root layout that sets
 * history.scrollRestoration = "manual" (so the browser never restores a saved
 * position). This component is a belt-and-suspenders backup that runs in
 * useLayoutEffect (synchronously before the browser paints) to force top.
 */
export function ScrollReset() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
