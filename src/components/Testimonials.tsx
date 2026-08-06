"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { testimonials } from "@/lib/content";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <figure className="flex w-[22rem] shrink-0 flex-col justify-between rounded-2xl border border-line bg-paper p-6 sm:w-[26rem]">
      <div>
        <span className="block text-3xl leading-none text-indigo-200" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="mt-2 type-body-sm text-ink">
          {testimonial.quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-700 text-paper">
          <span className="font-mono text-xs font-medium">
            {testimonial.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <span className="block text-sm font-semibold text-ink">{testimonial.name}</span>
          <span className="block text-xs text-ink-soft">{testimonial.title}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const track = [...testimonials, ...testimonials];
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-line bg-paper-warm py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="type-kicker text-indigo-500">05 · Testimonials</p>
            <h2 className="mt-3 text-balance type-headline">Join our happy customers</h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="type-body-sm text-ink-soft sm:max-w-xs">
              Working with operators, developers, and project owners across the
              energy value chain.
            </p>
            {/* Pause/play control for the moving marquee (WCAG 2.2.2) */}
            <button
              type="button"
              onClick={() => setPaused((v) => !v)}
              aria-pressed={paused}
              aria-label={paused ? "Play testimonials" : "Pause testimonials"}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-indigo-700 transition-colors hover:border-indigo-300 hover:text-indigo-700 motion-reduce:hidden"
            >
              {paused ? (
                <Play size={16} aria-hidden="true" />
              ) : (
                <Pause size={16} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Marquee track: pauses on hover and while focused (keyboard users) */}
      <div
        className="group relative mt-10 flex overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
        }}
      >
        <div className={`flex shrink-0 animate-marquee gap-6 pr-6 ${paused ? "marquee-paused" : ""}`}>
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
        {/* Fade edges (confined to the marquee strip) */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper-warm to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper-warm to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
