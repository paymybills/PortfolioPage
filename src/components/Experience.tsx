"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  return (
    <section ref={containerRef} className="section-padding">
      <div className="text-label mb-16 scrub-reveal">02 / RESEARCH & EXPERIENCE</div>

      {/* SatSure */}
      <div className="border-t-subtle py-12 flex flex-col md:flex-row justify-between gap-8 group">
        <div className="w-full md:w-1/3 scrub-reveal">
          <h2 className="text-3xl font-light mb-2">Earth Observation</h2>
          <p className="text-label text-zinc-500">SATSURE · FEB 2026 — PRESENT</p>
        </div>
        <div className="w-full md:w-1/2 scrub-reveal">
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
            Co-developing an India-centric Earth observation benchmark suite to
            systematically study geographic distribution shift in satellite
            imagery models.
          </p>
          <ul className="text-zinc-500 text-sm space-y-2 font-light">
            <li>
              — Designing highly scalable geospatial ML pipelines for multi-sensor
              ingestion.
            </li>
            <li>
              — Contributing to a geospatial foundation model tailored to Indian
              land-use patterns.
            </li>
          </ul>
        </div>
      </div>

      {/* IIT Kharagpur */}
      <div className="border-t-subtle py-12 flex flex-col md:flex-row justify-between gap-8 group">
        <div className="w-full md:w-1/3 scrub-reveal">
          <h2 className="text-3xl font-light mb-2">Neuroimaging ML Intern</h2>
          <p className="text-label text-zinc-500">IIT KHARAGPUR · JUN 2025 — PRESENT</p>
        </div>
        <div className="w-full md:w-1/2 scrub-reveal">
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
            Developing spatiotemporal sequence models for fMRI data using
            Mamba-style architectures, targeting clinically relevant prediction
            tasks.
          </p>
          <ul className="text-zinc-500 text-sm space-y-2 font-light">
            <li>
              — Built robust preprocessing pipelines to transform raw signals into
              structured connectivity graphs.
            </li>
            <li>
              — Open-sourced BrainGAT; benchmarking GNN baselines against state
              space models.
            </li>
          </ul>
        </div>
      </div>

      {/* Outlier */}
      <div className="border-t-subtle py-12 flex flex-col md:flex-row justify-between gap-8 group">
        <div className="w-full md:w-1/3 scrub-reveal">
          <h2 className="text-3xl font-light mb-2">AI Systems Evaluator</h2>
          <p className="text-label text-zinc-500">OUTLIER · JAN 2025 — PRESENT</p>
        </div>
        <div className="w-full md:w-1/2 scrub-reveal">
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
            Engineered rigorous test cases and edge-case scenarios to stress-test
            reasoning and identify failure modes in production AI systems.
          </p>
          <ul className="text-zinc-500 text-sm space-y-2 font-light">
            <li>
              — Collaborated with reinforcement learning teams on reward function
              design.
            </li>
            <li>
              — Delivered structured quality evaluations improving model
              consistency.
            </li>
          </ul>
        </div>
      </div>

      {/* The Turing Circle */}
      <div className="border-t-subtle py-12 flex flex-col md:flex-row justify-between gap-8 group">
        <div className="w-full md:w-1/3 scrub-reveal">
          <h2 className="text-3xl font-light mb-2">Head of ML</h2>
          <p className="text-label text-zinc-500">
            THE TURING CIRCLE · DEC 2024 — PRESENT
          </p>
        </div>
        <div className="w-full md:w-1/2 scrub-reveal">
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
            Leading a team of 10+ student researchers across applied ML projects,
            driving project scoping, architecture decisions, and code review
            processes.
          </p>
          <ul className="text-zinc-500 text-sm space-y-2 font-light">
            <li>— Established best practices for experimentation and ablation studies.</li>
            <li>— Mentored junior members in software engineering and ML fundamentals.</li>
          </ul>
        </div>
      </div>

      <div className="border-t-subtle"></div>
    </section>
  );
}
