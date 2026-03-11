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
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
    });
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex flex-col justify-end section-padding pb-[10vh]">
      <div className="mb-8">
        <div className="text-label mb-4">
          <span className="reveal-mask">
            <span className="reveal-text hero-text">MATHEMATICS & COMPUTING</span>
          </span>
          <br />
          <span className="reveal-mask">
            <span className="reveal-text hero-text">MIT MANIPAL — 2027</span>
          </span>
        </div>
      </div>
      <h1 className="title-huge uppercase">
        <span className="reveal-mask block">
          <span className="reveal-text hero-text">SYSTEMS</span>
        </span>
        <span className="reveal-mask block">
          <span className="reveal-text hero-text text-zinc-600">
            ENGINEERING.
          </span>
        </span>
      </h1>
    </section>
  );
}
