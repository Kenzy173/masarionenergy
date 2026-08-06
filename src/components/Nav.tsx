"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Minus } from "lucide-react";
import { SiteMark } from "./SiteMark";
import { services } from "@/lib/content";

const mainNav = [
  { label: "Projects", href: "/projects" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Mobile drawer links (Contact is handled by the dedicated gold button)
const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

const serviceSlugs = services.map((s) => s.slug);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isServicePage = serviceSlugs.some(
    (slug) => pathname.startsWith(`/services/${slug}`)
  );
  const servicesActive = pathname === "/services" || isServicePage;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Scroll shadow
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close menus on Escape (keyboard users)
  useEffect(() => {
    if (!open && !servicesOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-indigo-700 text-paper transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(8,40,24,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-paper" onClick={() => { setOpen(false); setServicesOpen(false); }}>
          <SiteMark imgClassName="h-11 w-auto md:h-14" />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 type-label transition-colors hover:text-paper ${
                servicesActive ? "text-paper" : "text-indigo-100"
              }`}
              aria-expanded={servicesOpen}
            >
              <span className={servicesActive ? "border-b border-amber-500 pb-0.5" : "pb-0.5"}>
                Services
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-indigo-600 bg-indigo-700 py-2 shadow-lg"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-5 py-2.5 type-body-sm text-indigo-100 transition-colors hover:bg-indigo-600 hover:text-paper"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="mx-3 my-1 border-t border-indigo-600" />
                <Link
                  href="/services"
                  className="block px-5 py-2.5 text-sm font-medium text-indigo-200 transition-colors hover:bg-indigo-600 hover:text-paper"
                  onClick={() => setServicesOpen(false)}
                >
                  All Services →
                </Link>
              </div>
            )}
          </div>

          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`type-label transition-colors hover:text-paper ${
                isActive(item.href) ? "text-paper border-b border-amber-500 pb-0.5" : "text-indigo-100 border-b border-transparent pb-0.5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
          >
            Request a consultation
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setMobileServicesOpen(false);
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu: overlay dropdown below the header (does not push content) */}
      {open && (
        <nav
          className="absolute left-0 right-0 top-full z-50 md:hidden max-h-[80vh] overflow-y-auto border-t border-indigo-600 bg-indigo-700 px-6 pb-6 pt-2 shadow-[0_24px_48px_-12px_rgba(8,40,24,0.55)] motion-safe:animate-[menu-in_200ms_ease-out]"
          aria-label="Primary"
        >
          <ul className="flex flex-col">
            {/* Home */}
            <li className="border-b border-indigo-600/70">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-3.5 text-[15px] font-semibold transition-colors hover:text-paper ${
                  isActive("/") ? "text-amber-300" : "text-indigo-100"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services (expandable) */}
            <li className="border-b border-indigo-600/70">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={`py-3.5 text-[15px] font-semibold transition-colors hover:text-paper ${
                    servicesActive ? "text-amber-300" : "text-indigo-100"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-label={mobileServicesOpen ? "Collapse services" : "Expand services"}
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center py-3.5 pl-4 text-indigo-100 transition-colors hover:text-amber-300"
                >
                  {mobileServicesOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </div>
              {mobileServicesOpen && (
                <ul className="mb-3 flex flex-col gap-1 border-l border-indigo-600 pl-4">
                  {services.map((service) => {
                    const active = pathname === `/services/${service.slug}`;
                    return (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={() => setOpen(false)}
                          className={`block py-2 text-sm transition-colors hover:text-paper ${
                            active ? "text-amber-300" : "text-indigo-200"
                          }`}
                        >
                          {service.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {/* Remaining links */}
            {mobileLinks
              .filter((item) => item.href !== "/" && item.href !== "/services")
              .map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="border-b border-indigo-600/70">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3.5 text-[15px] font-semibold transition-colors hover:text-paper ${
                        active ? "text-amber-300" : "text-indigo-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

            {/* Gold Contact Us button */}
            <li className="pt-5">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-amber-600 px-4 py-3 text-center text-sm font-semibold text-indigo-900 transition-colors hover:bg-amber-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
