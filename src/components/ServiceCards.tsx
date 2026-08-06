"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

export function ServiceCards() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <li key={service.slug}>
          {/* Animated feature card (21st.dev pattern): spring load-in on scroll + hover lift */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.8,
              delay: (i % 3) * 0.08,
            }}
            whileHover={{ scale: 1.02 }}
            className="h-full"
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(8,40,24,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-indigo-100">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent" />
                {/* Number badge */}
                <span className="absolute top-3 left-3 font-mono text-xs text-white bg-indigo-900 rounded-full px-2 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-indigo-700">
                  {service.name}
                </h3>
                <p className="mt-1.5 flex-1 type-body-sm text-ink-soft">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 transition-colors group-hover:text-amber-800">
                  View service
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
