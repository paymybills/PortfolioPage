"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const scrubEls = containerRef.current.querySelectorAll(".scrub-reveal");

    scrubEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="section-padding h-[75vh] flex flex-col justify-between items-center text-center relative overflow-hidden"
    >
      {/* Subtle purple glow behind CTA */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(155,122,232,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <div className="text-label mb-8 scrub-reveal">INITIATE CONTACT</div>
        <a
          href="mailto:anni.kelp@gmail.com"
          className="title-huge hover:text-[var(--accent-deep)] transition-colors duration-500 scrub-reveal text-slate-900"
        >
          Connect.
        </a>
        <p className="text-slate-600 text-sm mt-8 max-w-md scrub-reveal font-light">
          Open to research collaborations, ML engineering roles, and interesting
          systems problems.
        </p>
      </div>
      <div className="w-full flex justify-between border-t-subtle pt-8 text-label scrub-reveal relative z-10">
        <div className="text-slate-500 font-medium tracking-widest">BASED IN INDIA</div>
        <div className="text-slate-500 font-medium tracking-widest">© 2026 ANIRUDDHA ROY</div>
      </div>
    </footer>
  );
}
