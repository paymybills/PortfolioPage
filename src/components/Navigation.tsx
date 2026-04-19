"use client";

import { useState, useEffect } from "react";
import { Box } from "lucide-react"; // Using an elegant icon to replace the text

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
          scrolled 
            ? "bg-white/70 backdrop-blur-xl border border-black/5" 
            : "bg-white/40 backdrop-blur-md border border-white/50"
        }`}
      >
        {/* Logo / Icon */}
        <a
          href="#"
          className="flex items-center gap-2 pl-3 pr-4 py-1.5 transition-opacity hover:opacity-70"
        >
          <Box className="w-5 h-5 text-slate-800" strokeWidth={2} />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2 font-sans">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-black/5 transition-all duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:anni.kelp@gmail.com"
          className="ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 shadow-md whitespace-nowrap font-sans tracking-wide"
        >
          Get in Touch
        </a>
      </nav>
    </div>
  );
}
