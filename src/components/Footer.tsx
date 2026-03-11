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
    <footer ref={containerRef} className="section-padding h-screen flex flex-col justify-between items-center text-center">
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="text-label mb-8 scrub-reveal">INITIATE CONTACT</div>
        <a
          href="mailto:anni.kelp@gmail.com"
          className="title-huge hover:text-zinc-500 transition-colors duration-500 scrub-reveal"
        >
          CONNECT.
        </a>
      </div>
      <div className="w-full flex justify-between border-t-subtle pt-8 text-label scrub-reveal">
        <div>BASED IN INDIA</div>
        <div>© 2026 ANIRUDDHA ROY</div>
      </div>
    </footer>
  );
}
