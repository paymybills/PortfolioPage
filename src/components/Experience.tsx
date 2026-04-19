"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BorderGlow from "./BorderGlow";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
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

  const borderGlowProps = {
    edgeSensitivity: 30,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    glowColor: "270 80 50",
    borderRadius: 24,
    glowRadius: 30,
    glowIntensity: 0.6,
    coneSpread: 25,
    animated: false,
    colors: ['#9b7ae8', '#c4a8ff', '#6c3cdc'], // Match theme
    fillOpacity: 0.35,
  };

  return (
    <section ref={containerRef} id="experience" className="section-padding">
      <div className="text-label mb-16 scrub-reveal">
        02 / RESEARCH & EXPERIENCE
      </div>

      <div className="flex flex-col gap-8">
        {/* Amazon */}
        <BorderGlow {...borderGlowProps}>
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between gap-8 group backdrop-blur-md">
            <div className="w-full md:w-1/3 scrub-reveal">
              <h2 className="text-3xl font-light mb-2 font-[family-name:var(--font-display)] italic text-slate-900">
                Software Dev Engineer Intern
              </h2>
              <p className="text-label text-[var(--accent)]">
                AMAZON · UPCOMING SUMMER 2026
              </p>
            </div>
            <div className="w-full md:w-1/2 scrub-reveal">
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-4 group-hover:text-slate-900 transition-colors duration-500">
                Incoming software engineering intern preparing to build high-performance distributed systems at global scale.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 font-light">
                <li>— Focus on highly scalable, fault-tolerant cloud computing architectures.</li>
                <li>— Applying robust object-oriented patterns to massive-domain problems.</li>
              </ul>
            </div>
          </div>
        </BorderGlow>

        {/* SatSure */}
        <BorderGlow {...borderGlowProps}>
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between gap-8 group backdrop-blur-md">
            <div className="w-full md:w-1/3 scrub-reveal">
              <h2 className="text-3xl font-light mb-2 font-[family-name:var(--font-display)] italic text-slate-900">
                Earth Observation
              </h2>
              <p className="text-label text-[var(--accent)]">
                SATSURE · FEB 2026 — PRESENT
              </p>
            </div>
            <div className="w-full md:w-1/2 scrub-reveal">
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-4 group-hover:text-slate-900 transition-colors duration-500">
                Co-developing an India-centric Earth observation benchmark suite to
                systematically study geographic distribution shift in satellite
                imagery models.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 font-light">
                <li>— Designing highly scalable geospatial ML pipelines for multi-sensor ingestion.</li>
                <li>— Contributing to a geospatial foundation model tailored to Indian land-use patterns.</li>
              </ul>
            </div>
          </div>
        </BorderGlow>

        {/* Outlier */}
        <BorderGlow {...borderGlowProps}>
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between gap-8 group backdrop-blur-md">
            <div className="w-full md:w-1/3 scrub-reveal">
              <h2 className="text-3xl font-light mb-2 font-[family-name:var(--font-display)] italic text-slate-900">
                AI Systems Evaluator
              </h2>
              <p className="text-label text-[var(--accent)]">
                OUTLIER · JAN 2025 — PRESENT
              </p>
            </div>
            <div className="w-full md:w-1/2 scrub-reveal">
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-4 group-hover:text-slate-900 transition-colors duration-500">
                Engineered rigorous test cases and edge-case scenarios to stress-test
                reasoning and identify failure modes in production AI systems.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 font-light">
                <li>— Collaborated with reinforcement learning teams on reward function design.</li>
                <li>— Delivered structured quality evaluations improving model consistency.</li>
              </ul>
            </div>
          </div>
        </BorderGlow>

        {/* The Turing Circle */}
        <BorderGlow {...borderGlowProps}>
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between gap-8 group backdrop-blur-md">
            <div className="w-full md:w-1/3 scrub-reveal">
              <h2 className="text-3xl font-light mb-2 font-[family-name:var(--font-display)] italic text-slate-900">
                Head of ML
              </h2>
              <p className="text-label text-[var(--accent)]">
                THE TURING CIRCLE · DEC 2024 — PRESENT
              </p>
            </div>
            <div className="w-full md:w-1/2 scrub-reveal">
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-4 group-hover:text-slate-900 transition-colors duration-500">
                Leading a team of 10+ student researchers across applied ML
                projects, driving project scoping, architecture decisions, and code
                review processes.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 font-light">
                <li>— Established best practices for experimentation and ablation studies.</li>
                <li>— Mentored junior members in software engineering and ML fundamentals.</li>
              </ul>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
