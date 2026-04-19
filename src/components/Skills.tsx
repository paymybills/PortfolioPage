"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
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
    <section
      ref={containerRef}
      id="skills"
      className="section-padding border-t-subtle"
    >
      <div className="text-label mb-16 scrub-reveal">
        04 / CAPABILITIES & CREDENTIALS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="scrub-reveal">
          <h4 className="text-[var(--accent-light)] font-medium mb-6 uppercase tracking-widest text-sm">
            Languages
          </h4>
          <ul className="text-zinc-500 font-light space-y-3 text-sm">
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Python
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              C++
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              R / SQL
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Bash
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              TypeScript
            </li>
          </ul>
        </div>

        <div className="scrub-reveal">
          <h4 className="text-[var(--accent-light)] font-medium mb-6 uppercase tracking-widest text-sm">
            ML & Data
          </h4>
          <ul className="text-zinc-500 font-light space-y-3 text-sm">
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              PyTorch / Lightning
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              PyTorch Geometric
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              TensorFlow
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Scikit-learn
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              NumPy / Pandas
            </li>
          </ul>
        </div>

        <div className="scrub-reveal">
          <h4 className="text-[var(--accent-light)] font-medium mb-6 uppercase tracking-widest text-sm">
            Domains
          </h4>
          <ul className="text-zinc-500 font-light space-y-3 text-sm">
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Earth Observation
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Neuroimaging
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              ML Systems
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Signal Processing
            </li>
            <li className="hover:text-[var(--accent-light)] transition-colors duration-300 cursor-default">
              Reinforcement Learning
            </li>
          </ul>
        </div>

        <div className="scrub-reveal">
          <h4 className="text-[var(--accent-light)] font-medium mb-6 uppercase tracking-widest text-sm">
            Certifications
          </h4>
          <ul className="text-zinc-500 font-light space-y-4 text-sm">
            <li>
              <span className="block text-zinc-300 hover:text-[var(--accent-light)] transition-colors duration-300">
                Deep Learning Specialization
              </span>
              <span className="block text-xs mt-1">
                DeepLearning.AI, Coursera
              </span>
            </li>
            <li>
              <span className="block text-zinc-300 hover:text-[var(--accent-light)] transition-colors duration-300">
                Advanced Neurobiology I
              </span>
              <span className="block text-xs mt-1">
                Peking University, Coursera
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
