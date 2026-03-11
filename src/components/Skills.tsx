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
    <section ref={containerRef} className="section-padding border-t-subtle">
      <div className="text-label mb-16 scrub-reveal">04 / CAPABILITIES & CREDENTIALS</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="scrub-reveal">
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">
            Languages
          </h4>
          <ul className="text-zinc-500 font-light space-y-3 text-sm">
            <li>Python</li>
            <li>C++</li>
            <li>R / SQL</li>
            <li>Bash</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="scrub-reveal">
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">
            ML & Data
          </h4>
          <ul className="text-zinc-500 font-light space-y-3 text-sm">
            <li>PyTorch / Lightning</li>
            <li>PyTorch Geometric</li>
            <li>TensorFlow</li>
            <li>Scikit-learn</li>
            <li>NumPy / Pandas</li>
          </ul>
        </div>

        <div className="scrub-reveal">
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">
            Domains
          </h4>
          <ul className="text-zinc-500 font-light space-y-3 text-sm">
            <li>Earth Observation</li>
            <li>Neuroimaging</li>
            <li>ML Systems</li>
            <li>Signal Processing</li>
            <li>Reinforcement Learning</li>
          </ul>
        </div>

        <div className="scrub-reveal">
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">
            Certifications
          </h4>
          <ul className="text-zinc-500 font-light space-y-4 text-sm">
            <li>
              <span className="block text-zinc-300">Deep Learning Specialization</span>
              <span className="block text-xs mt-1">DeepLearning.AI, Coursera</span>
            </li>
            <li>
              <span className="block text-zinc-300">Advanced Neurobiology I</span>
              <span className="block text-xs mt-1">Peking University, Coursera</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
