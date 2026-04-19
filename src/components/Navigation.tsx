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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav
        className={`flex items-center justify-between w-full max-w-5xl px-3 py-2 rounded-full transition-all duration-500 shadow-xl ${
          scrolled ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-white/5 backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 pl-3 pr-4 py-1.5 text-sm font-semibold tracking-wider text-white whitespace-nowrap"
        >
          <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
             <span className="text-[10px]">A</span>
          </div>
          A.R. Systems
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - Solid white to match the "Sign up" button from the screenshot */}
        <a
          href="mailto:anni.kelp@gmail.com"
          className="ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-white text-slate-900 hover:bg-zinc-200 transition-all duration-300 shadow-md whitespace-nowrap"
        >
          Get in Touch
        </a>
      </nav>
    </div>
  );
}
