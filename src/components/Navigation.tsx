"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
        scrolled ? "glass-strong" : "glass"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white whitespace-nowrap"
      >
        A.R.
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-0.5">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="mailto:anni.kelp@gmail.com"
        className="ml-1 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded-full bg-white/10 text-white hover:bg-[var(--accent)] hover:shadow-[0_0_20px_rgba(155,122,232,0.3)] transition-all duration-300 whitespace-nowrap border border-white/10 hover:border-transparent"
      >
        Get in Touch ↗
      </a>
    </nav>
  );
}
