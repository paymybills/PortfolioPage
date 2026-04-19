"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Lock } from "lucide-react";
import BorderGlow from "./BorderGlow";

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

  const borderGlowProps = {
    edgeSensitivity: 30,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    glowColor: "25 90 60", // Orange-ish Hue
    borderRadius: 16,
    glowRadius: 25,
    glowIntensity: 0.6,
    coneSpread: 25,
    animated: false,
    colors: ['#f97316', '#38bdf8', '#ea580c'], // Light blue & orange palette
    fillOpacity: 0.35,
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="section-padding"
    >
      <div className="text-label mb-16 scrub-reveal">
        03 / ARCHITECTURE & SYSTEMS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {/* BazaarBATNA */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              {/* Graphic specifically for the marketplace/negotiation concept */}
              <div className="absolute w-full h-full flex justify-around items-end opacity-20 group-hover:opacity-60 transition-opacity duration-1000">
                <div className="w-16 h-32 bg-slate-300 rounded-t-full border border-[var(--border)]"></div>
                <div className="w-16 h-20 bg-slate-300 rounded-t-full border border-[var(--border)] group-hover:bg-[var(--accent-light)] transition-colors duration-500"></div>
                <div className="w-16 h-40 bg-slate-300 rounded-t-full border border-[var(--border)]"></div>
              </div>
              <div className="w-24 h-24 border border-[var(--accent-deep)] rounded-full rotate-45 group-hover:-rotate-90 transition-transform duration-1000 ease-out z-10 opacity-70"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <div className="flex gap-2 items-center mb-3 flex-wrap">
                  <h3 className="text-2xl font-light project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                    BazaarBATNA
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-orange-100 text-[var(--accent-deep)] border border-orange-200 rounded-full shrink-0 shadow-sm">
                    META AI Hackathon Finalists
                  </span>
                </div>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  An OpenEnv task environment simulating real-world customer-vendor price negotiation with asymmetric information, career dynamics, and Rubinstein bargaining theory. BazaarBot drops an LLM agent into the role of a buyer at an Indian bazaar against a rule-based seller who anchors high and remembers patterns across deals.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/BazaarBATNA"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* Stratify */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="w-1/2 h-px bg-slate-300 group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-1000 ease-in-out"></div>
              <div className="absolute w-px h-1/2 bg-slate-300 group-hover:h-full group-hover:bg-[var(--accent)] transition-all duration-1000 ease-in-out"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  Stratify Engine
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  High-performance semantic document retrieval engine. Ingests
                  PDFs, extracts layout, and builds a FAISS-based dense vector
                  index. Reduced query latency by 40% via modular 3-tier
                  architecture.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/Stratify-"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* AIL */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="absolute w-12 h-12 border border-slate-300 rounded-full group-hover:scale-[3] group-hover:border-[var(--accent)] transition-all duration-1000 ease-out opacity-50"></div>
              <div className="absolute w-24 h-24 border border-slate-200 rounded-full group-hover:scale-[2] group-hover:border-[var(--accent-deep)] transition-all duration-700 ease-out opacity-80"></div>
              <div className="absolute w-2 h-2 bg-slate-400 rounded-full group-hover:bg-[var(--accent-light)] transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <div className="flex gap-2 items-center mb-3 flex-wrap">
                  <h3 className="text-2xl font-light mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                    AIL Framework
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-orange-100 text-[var(--accent-deep)] border border-orange-200 rounded-full shrink-0 shadow-sm mt-1">
                    Microsoft AI Hackathon Finalist
                  </span>
                </div>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  5-layer intelligence pipeline integrating co-change coupling
                  analysis and commit blast radius. Computes transitive
                  architectural impact, technical debt risk mapping, and dynamic
                  Gemini selection.
                </p>
              </div>
              <a
                href="https://github.com/RajRudra06/AIL"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* IITKPG_BrainGAT */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="absolute w-20 h-20 border-2 border-slated-200 rounded-full opacity-30"></div>
              <div className="absolute w-8 h-8 border border-[var(--accent-deep)] rotate-45 group-hover:rotate-90 group-hover:scale-125 transition-transform duration-700 ease-in-out"></div>
              <div className="absolute w-6 h-6 border border-[var(--accent-light)] rotate-12 group-hover:-rotate-45 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  fMRI BrainGAT
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  A culmination of an internship at IIT KGP for neuroimaging, applying Graph Attention Networks (GATs) to fMRI data to derive functional connectivity insights and novel topological discoveries.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/IITKPG_BrainGAT"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* Backtester + RL */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex flex-col items-center justify-center overflow-hidden group gap-2 rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="w-1/3 h-px bg-slate-300 group-hover:w-2/3 group-hover:bg-[var(--accent)] transition-all duration-700"></div>
              <div className="w-1/2 h-px bg-slate-400 group-hover:w-1/3 group-hover:bg-[var(--accent-light)] transition-all duration-500"></div>
              <div className="w-2/3 h-px bg-slate-200 group-hover:w-1/2 group-hover:bg-[var(--accent-deep)] transition-all duration-1000"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  Vectorized Backtester & RL
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  Modular Python framework evaluating financial strategies at
                  scale (1,000+ iters/min). Integrated a PPO-based RL agent with
                  cascaded LSTMs for temporal feature extraction in volatile
                  markets.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/Backtester"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* Deep Audio Denoising */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group gap-1 rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="w-1 h-4 bg-slate-300 group-hover:h-16 group-hover:bg-[var(--accent-deep)] transition-all duration-300"></div>
              <div className="w-1 h-12 bg-slate-400 group-hover:h-8 group-hover:bg-[var(--accent)] transition-all duration-500"></div>
              <div className="w-1 h-24 bg-slate-200 group-hover:h-20 group-hover:bg-[var(--accent-light)] transition-all duration-200"></div>
              <div className="w-1 h-8 bg-slate-300 group-hover:h-24 group-hover:bg-[var(--accent)] transition-all duration-700"></div>
              <div className="w-1 h-16 bg-slate-400 group-hover:h-6 group-hover:bg-[var(--accent-deep)] transition-all duration-400"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  Deep Audio Denoising (ANC)
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  Real-time ANC system using FxLMS adaptive filtering. Built a
                  deep audio denoising pipeline using a DCCRN in the complex STFT
                  domain, achieving 12dB SNR improvement.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/ANC"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* Time-Series Forecasting */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-end justify-center overflow-hidden group gap-2 pb-16 rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="w-2 h-4 bg-slate-300 group-hover:h-8 group-hover:bg-[var(--accent-deep)] transition-all duration-300"></div>
              <div className="w-2 h-8 bg-slate-400 group-hover:h-12 group-hover:bg-[var(--accent)] transition-all duration-500"></div>
              <div className="w-2 h-6 bg-slate-200 group-hover:h-20 group-hover:bg-[var(--accent-light)] transition-all duration-400"></div>
              <div className="w-2 h-16 bg-slate-300 group-hover:h-10 group-hover:bg-[var(--accent)] transition-all duration-700"></div>
              <div className="w-2 h-12 bg-slate-400 group-hover:h-24 group-hover:bg-[var(--accent-deep)] transition-all duration-200"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  Time-Series Forecasting
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  ARIMA and seasonal ARIMA models on banking data. Full workflow:
                  stationarity checks, model selection via AIC/BIC, and multi-step
                  evaluation strategies.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/Time-Series-"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* SkyePlay */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="w-16 h-10 border border-slate-300 rounded-md flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-slate-400 group-hover:border-l-[var(--accent-light)] transition-colors ml-1"></div>
              </div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  SkyePlay Media Utility
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  Flutter-based cross-platform application integrating REST APIs
                  and JSON handling. Applied strict modular widget design and
                  state management patterns.
                </p>
              </div>
              <a
                href="https://github.com/paymybills/SkyePlay"
                target="_blank"
                className="ml-4 p-3 border border-slate-300 text-slate-900 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_var(--accent-glow)] shrink-0 mt-1"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </BorderGlow>

        {/* PhotoOrbit */}
        <BorderGlow {...borderGlowProps} className="scrub-reveal h-full">
          <div className="p-6 h-full flex flex-col backdrop-blur-md">
            <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] mb-8 relative flex items-center justify-center overflow-hidden group rounded-xl hover:border-[var(--accent)] transition-colors duration-500">
              <div className="w-20 h-20 border border-slate-400 rotate-45 group-hover:rotate-90 group-hover:border-[var(--accent)] transition-all duration-1000 absolute"></div>
              <div className="w-12 h-12 border border-slate-300 rotate-12 group-hover:-rotate-45 group-hover:border-[var(--accent-light)] transition-all duration-700 absolute"></div>
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h3 className="text-2xl font-light mb-3 mt-1 project-title text-slate-900 font-[family-name:var(--font-display)] italic">
                  PhotoOrbit 3D
                </h3>
                <p className="text-slate-600 font-light text-sm mb-4 max-w-md">
                  MiDaS-based monocular depth estimation pipeline generating
                  mesh-based 3D photospheres from single images. Implemented
                  real-time parallax rendering via OpenGL/Open3D.
                </p>
              </div>
              <div className="ml-4 p-3 border border-slate-200 text-slate-400 rounded-full opacity-50 cursor-not-allowed shrink-0 mt-1">
                <Lock className="w-4 h-4" />
              </div>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
