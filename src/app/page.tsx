
import LiquidEther from "@/components/LiquidEther";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>


      {/* Glassmorphic Navigation */}
      <Navigation />

      {/* Scrollable Content */}
      <div id="content-wrapper" className="relative z-10">
        <Hero />

        {/* Intro/Philosophy */}
        <section className="section-padding flex justify-end">
          <div className="w-full md:w-1/2">
            <div className="text-label mb-8 scrub-reveal font-medium">
              01 / OVERVIEW
            </div>
            <p className="text-body scrub-reveal">
              I engineer end-to-end ML systems and research-grade pipelines.
              From Earth observation architectures to neuroimaging state space
              models, my focus is absolute precision under distribution shift.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 scrub-reveal">
              <span className="px-4 py-2 border border-[var(--border)] rounded-full text-xs tracking-widest uppercase text-zinc-400 hover:border-[var(--accent)] hover:text-[var(--accent-light)] transition-colors cursor-default">
                C++ / Python
              </span>
              <span className="px-4 py-2 border border-[var(--border)] rounded-full text-xs tracking-widest uppercase text-zinc-400 hover:border-[var(--accent)] hover:text-[var(--accent-light)] transition-colors cursor-default">
                PyTorch
              </span>
              <span className="px-4 py-2 border border-[var(--border)] rounded-full text-xs tracking-widest uppercase text-zinc-400 hover:border-[var(--accent)] hover:text-[var(--accent-light)] transition-colors cursor-default">
                High-Performance Arch
              </span>
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
