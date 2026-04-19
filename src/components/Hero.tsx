"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const texts = containerRef.current.querySelectorAll(".hero-text");
    gsap.to(texts, {
      y: "0%",
      duration: 1.5,
      stagger: 0.12,
      ease: "power4.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-col justify-end section-padding pb-[10vh]"
    >
      {/* Subtitle labels */}
      <div className="mb-8">
        <div className="text-label mb-4">
          <span className="reveal-mask">
            <span className="reveal-text hero-text text-slate-500">
              CURRENTLY AT AMAZON + SATSURE
            </span>
          </span>
          <br />
          <span className="reveal-mask">
            <span className="reveal-text hero-text mt-2 text-slate-500">
              MATHEMATICS & COMPUTING, MIT MANIPAL
            </span>
          </span>
        </div>
      </div>

      {/* Main display heading — italic serif */}
      <div className="mb-4 scrub-reveal">
        <span className="reveal-mask block">
          <span className="reveal-text hero-text text-5xl md:text-7xl font-[family-name:var(--font-display)] text-[var(--accent)] font-light italic mb-2">
            Aniruddha Roy
          </span>
        </span>
      </div>

      <h1 className="title-huge leading-tight">
        <span className="reveal-mask block pb-4">
          <span className="reveal-text hero-text">Research and</span>
        </span>
        <span className="reveal-mask block pb-6">
          <span className="reveal-text hero-text text-[var(--text-main)] italic relative">
            Infra.
            <span className="absolute -inset-4 rounded-full bg-[var(--accent-glow)] blur-[60px] -z-10 mix-blend-screen opacity-70 block" />
          </span>
        </span>
      </h1>

      {/* CTA buttons */}
      <div className="mt-12 flex flex-wrap gap-4">
        <span className="reveal-mask">
          <a href="#projects" className="reveal-text hero-text pill-btn pill-btn-outline">
            View Work
          </a>
        </span>
        <span className="reveal-mask">
          <a
            href="mailto:anni.kelp@gmail.com"
            className="reveal-text hero-text pill-btn pill-btn-primary"
          >
            Get in Touch
          </a>
        </span>
      </div>
    </section>
  );
}
