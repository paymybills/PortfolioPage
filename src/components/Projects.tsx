"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
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
    <section ref={containerRef} className="section-padding bg-[#050505]">
      <div className="text-label mb-16 scrub-reveal">03 / ARCHITECTURE & SYSTEMS</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {/* Stratify */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-center justify-center overflow-hidden group">
            <div className="w-1/2 h-px bg-zinc-800 group-hover:w-full group-hover:bg-zinc-500 transition-all duration-1000 ease-in-out"></div>
            <div className="absolute w-px h-1/2 bg-zinc-800 group-hover:h-full group-hover:bg-zinc-500 transition-all duration-1000 ease-in-out"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                Stratify Engine
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                High-performance semantic document retrieval engine. Ingests PDFs,
                extracts layout, and builds a FAISS-based dense vector index.
                Reduced query latency by 40% via modular 3-tier architecture.
              </p>
            </div>
            <a
              href="https://github.com/paymybills/Stratify-"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* AIL */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-center justify-center overflow-hidden group">
            <div className="absolute w-12 h-12 border border-zinc-700 rounded-full group-hover:scale-[3] transition-all duration-1000 ease-out opacity-50"></div>
            <div className="absolute w-24 h-24 border border-zinc-800 rounded-full group-hover:scale-[2] transition-all duration-700 ease-out opacity-30"></div>
            <div className="absolute w-2 h-2 bg-zinc-600 rounded-full group-hover:bg-white transition-colors duration-500"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                AIL Framework
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                5-layer intelligence pipeline integrating co-change coupling
                analysis and commit blast radius. Computes transitive
                architectural impact, technical debt risk mapping, and dynamic
                Gemini selection.
              </p>
            </div>
            <a
              href="https://github.com/RajRudra06/AIL"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Backtester + RL */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex flex-col items-center justify-center overflow-hidden group gap-2">
            <div className="w-1/3 h-px bg-zinc-700 group-hover:w-2/3 transition-all duration-700"></div>
            <div className="w-1/2 h-px bg-zinc-600 group-hover:w-1/3 transition-all duration-500"></div>
            <div className="w-2/3 h-px bg-zinc-800 group-hover:w-1/2 transition-all duration-1000"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                Vectorized Backtester & RL
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                Modular Python framework evaluating financial strategies at scale
                (1,000+ iters/min). Integrated a PPO-based RL agent with
                cascaded LSTMs for temporal feature extraction in volatile
                markets.
              </p>
            </div>
            <a
              href="https://github.com/paymybills/Backtester"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Deep Audio Denoising */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-center justify-center overflow-hidden group gap-1">
            <div className="w-1 h-4 bg-zinc-800 group-hover:h-16 transition-all duration-300"></div>
            <div className="w-1 h-12 bg-zinc-700 group-hover:h-8 transition-all duration-500"></div>
            <div className="w-1 h-24 bg-zinc-600 group-hover:h-20 transition-all duration-200"></div>
            <div className="w-1 h-8 bg-zinc-700 group-hover:h-24 transition-all duration-700"></div>
            <div className="w-1 h-16 bg-zinc-800 group-hover:h-6 transition-all duration-400"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                Deep Audio Denoising (ANC)
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                Real-time ANC system using FxLMS adaptive filtering. Built a deep
                audio denoising pipeline using a DCCRN in the complex STFT domain,
                achieving 12dB SNR improvement.
              </p>
            </div>
            <a
              href="https://github.com/paymybills/ANC"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* PhotoOrbit */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-center justify-center overflow-hidden group">
            <div className="w-20 h-20 border border-zinc-700 rotate-45 group-hover:rotate-90 group-hover:border-zinc-500 transition-all duration-1000 absolute"></div>
            <div className="w-12 h-12 border border-zinc-600 rotate-12 group-hover:-rotate-45 transition-all duration-700 absolute"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                PhotoOrbit 3D
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                MiDaS-based monocular depth estimation pipeline generating
                mesh-based 3D photospheres from single images. Implemented
                real-time parallax rendering via OpenGL/Open3D.
              </p>
            </div>
            <div className="p-3 border border-zinc-900 rounded-full opacity-50 cursor-not-allowed">
              <Lock className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Physics Engine */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-center justify-center overflow-hidden group">
            <div className="w-2 h-2 rounded-full bg-zinc-500 absolute group-hover:-translate-y-8 group-hover:translate-x-8 transition-transform duration-700"></div>
            <div className="w-1 h-1 rounded-full bg-zinc-600 absolute group-hover:translate-y-6 group-hover:-translate-x-12 transition-transform duration-1000"></div>
            <div className="w-3 h-3 border border-zinc-700 rounded-full absolute group-hover:-translate-y-12 group-hover:-translate-x-6 transition-transform duration-500"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                Physics 3D Particle Engine
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                Browser-based physics engine powering interactive graphing.
                Maintained 60 FPS on mobile with 5,000+ dynamically interacting
                nodes by optimizing WebGL buffers.
              </p>
            </div>
            <a
              href="https://ttcprojects.vercel.app/"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Time-Series Forecasting */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-end justify-center overflow-hidden group gap-2 pb-16">
            <div className="w-2 h-4 bg-zinc-800 group-hover:h-8 transition-all duration-300"></div>
            <div className="w-2 h-8 bg-zinc-700 group-hover:h-12 transition-all duration-500"></div>
            <div className="w-2 h-6 bg-zinc-600 group-hover:h-20 transition-all duration-400"></div>
            <div className="w-2 h-16 bg-zinc-500 group-hover:h-10 transition-all duration-700"></div>
            <div className="w-2 h-12 bg-zinc-700 group-hover:h-24 transition-all duration-200"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                Time-Series Forecasting
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                ARIMA and seasonal ARIMA models on banking data. Full workflow:
                stationarity checks, model selection via AIC/BIC, and multi-step
                evaluation strategies.
              </p>
            </div>
            <a
              href="https://github.com/paymybills/Time-Series-"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* SkyePlay */}
        <div className="scrub-reveal project-card">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-[#1a1a1a] mb-8 relative flex items-center justify-center overflow-hidden group">
            <div className="w-16 h-10 border border-zinc-700 rounded-md flex items-center justify-center group-hover:border-zinc-500 transition-colors">
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-zinc-600 group-hover:border-l-zinc-400 transition-colors ml-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light mb-3 project-title text-zinc-300">
                SkyePlay Media Utility
              </h3>
              <p className="text-zinc-500 font-light text-sm mb-4 max-w-md">
                Flutter-based cross-platform application integrating REST APIs and
                JSON handling. Applied strict modular widget design and state
                management patterns.
              </p>
            </div>
            <a
              href="https://github.com/paymybills/SkyePlay"
              target="_blank"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
