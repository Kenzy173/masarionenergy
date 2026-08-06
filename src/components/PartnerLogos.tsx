"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const logos = Array.from({ length: 34 }, (_, i) => i + 1);
const interval = 5000;

function usePerSlide() {
  const [count, setCount] = useState(6);
  useEffect(() => {
    function compute() {
      const w = window.innerWidth;
      setCount(w < 640 ? 3 : w < 1024 ? 4 : 6);
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return count;
}

export function PartnerLogos() {
  const perSlide = usePerSlide();
  const totalSlides = Math.max(1, Math.ceil(logos.length / perSlide));
  const [slide, setSlide] = useState(0);

  // Reset slide if total changes (resize)
  useEffect(() => {
    setSlide((s) => Math.min(s, totalSlides - 1));
  }, [totalSlides]);

  const next = useCallback(() => setSlide((s) => (s + 1) % totalSlides), [totalSlides]);

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next]);

  const visible = logos.slice(slide * perSlide, slide * perSlide + perSlide);

  return (
    <section className="overflow-hidden border-t border-line bg-paper py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="type-kicker text-center text-indigo-500">Trusted by</p>

        <div className="relative mt-8">
          {/* Logo row: keyed on slide for smooth crossfade */}
          <div
            key={`${slide}-${perSlide}`}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 sm:gap-x-8 motion-safe:animate-[logo-in_400ms_ease-out_both]"
          >
            {visible.map((n) => (
              <div
                key={n}
                className="flex min-w-0 flex-1 items-center justify-center"
              >
                <Image
                  src={`/images/partners/cl${n}.png`}
                  alt=""
                  width={200}
                  height={72}
                  className="h-10 w-auto max-w-full object-contain sm:h-14"
                  loading="eager"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-1">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slide
                      ? "w-6 bg-indigo-700"
                      : "w-1.5 bg-line hover:bg-indigo-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
