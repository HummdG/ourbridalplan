"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // When menu is open, always show solid nav background regardless of scroll
  const navBg = menuOpen
    ? "bg-cream border-b border-warm-gray/40"
    : scrolled
    ? "bg-white/96 backdrop-blur-sm border-b border-warm-gray/60"
    : "bg-transparent border-b border-transparent";

  const isLight = scrolled || menuOpen;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="#" onClick={closeMenu} className="flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Our Bridal Plan"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                  isLight
                    ? "text-charcoal hover:text-ink"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`text-xs tracking-[0.18em] uppercase px-7 py-2.5 transition-all duration-300 ${
                isLight
                  ? "bg-ink text-white hover:bg-charcoal"
                  : "bg-white/90 text-ink hover:bg-white"
              }`}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block h-px w-6 transition-all duration-300 origin-center ${
                menuOpen
                  ? "rotate-45 translate-y-[7px]"
                  : ""
              } ${isLight ? "bg-ink" : "bg-white"}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              } ${isLight ? "bg-ink" : "bg-white"}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 origin-center ${
                menuOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : ""
              } ${isLight ? "bg-ink" : "bg-white"}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu, sits below nav (z-40 < z-50) */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-1 transition-opacity duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Offset for nav bar height */}
        <div className="mt-20 flex flex-col items-center">
          <Image
            src="/brand/logo.png"
            alt="Our Bridal Plan"
            width={80}
            height={80}
            className="h-20 w-20 object-contain mb-6"
          />
          <div className="w-8 h-px bg-gold mb-8" />
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl text-ink py-3 hover:text-charcoal transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-8 bg-ink text-white px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-charcoal transition-colors"
            onClick={closeMenu}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
}
