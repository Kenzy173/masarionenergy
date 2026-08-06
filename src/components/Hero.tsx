"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { stats } from "@/lib/content";
import { StatValue } from "./StatValue";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  // Reveal after a max wait; skip the preloader entirely for reduced motion.
  // The full-screen fixed overlay is unmounted the moment the video is ready
  // (never left lingering) to avoid Android blank-bar compositing artifacts.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVideoReady(true);
      return;
    }
    const id = setTimeout(() => setVideoReady(true), 4000);
    return () => clearTimeout(id);
  }, []);

  const showPreloader = !videoReady;

  return (
    <>
      {showPreloader && (
        <div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-indigo-700"
          aria-hidden="true"
        >
          <div
            className="h-12 w-12 rounded-full border-2 border-indigo-600/40 border-t-amber-500 animate-spin"
            aria-hidden="true"
          />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-100">
            Masarion Energy
          </p>
        </div>
      )}

      <section className="relative overflow-hidden bg-indigo-700 text-paper">
        <HeroVideo onReady={() => setVideoReady(true)} />

      <div className="relative mx-auto flex min-h-[58vh] max-w-6xl items-center px-6 py-14 md:min-h-[64vh] md:py-20">
        <div className="relative max-w-3xl motion-safe:animate-[hero-in_0.7s_ease-out_both]">
          <h1 className="text-balance type-display text-paper">
            Masarion Energy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-snug font-medium text-indigo-50 md:text-xl">
            Your trusted partner in innovative and sustainable energy solutions,
            powering Africa&rsquo;s future together.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-semibold text-indigo-900 shadow-[0_2px_12px_rgba(216,152,24,0.35)] transition-all hover:bg-amber-500 hover:shadow-[0_4px_20px_rgba(216,152,24,0.45)]"
            >
              See Our Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-indigo-400/50 px-6 py-3.5 text-sm font-semibold text-indigo-100 transition-colors hover:border-indigo-200 hover:text-paper"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-indigo-600/70">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-frame flex flex-col border-indigo-600/70 py-6 pr-4 pl-4 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-4"
            >
              <span aria-hidden="true" className="stat-corner-tr" />
              <span aria-hidden="true" className="stat-corner-bl" />
              <dt className="order-2 mt-1 type-label text-indigo-200">
                {stat.label}
              </dt>
              <StatValue value={stat.value} />
            </div>
          ))}
        </dl>
      </div>
    </section>
    </>
  );
}

function HeroVideo({ onReady }: { onReady?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.65; // slow, cinematic playback

    function handleReady() {
      onReadyRef.current?.();
    }
    // Already buffered (e.g. cached) — reveal immediately, no spinner flash.
    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener("canplay", handleReady);
    }

    return () => video.removeEventListener("canplay", handleReady);
  }, []);

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-offshore-poster.webp"
        aria-hidden="true"
      >
        <source src="/video/hero-offshore.mp4" type="video/mp4" />
      </video>
      {/* Indigo scrim: keeps text contrast on the left while letting the footage show through. */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-700/70 to-indigo-700/15" />
      <div className="absolute inset-0 bg-indigo-900/10" />
    </div>
  );
}
