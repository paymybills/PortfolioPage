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
            <span className="reveal-text hero-text text-zinc-400">
              CURRENTLY AT AMAZON + SATSURE
            </span>
          </span>
          <br />
          <span className="reveal-mask">
            <span className="reveal-text hero-text mt-2">
              MATHEMATICS & COMPUTING, MIT MANIPAL
            </span>
          </span>
        </div>
      </div>

      {/* Main display heading — italic serif */}
      <h1 className="title-huge">
        <span className="reveal-mask block">
          <span className="reveal-text hero-text">Research &</span>
        </span>
        <span className="reveal-mask block">
          <span className="reveal-text hero-text text-[var(--accent-light)] accent-glow-text">
            Systems.
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
