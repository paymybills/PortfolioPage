import WebGLBackground from "@/components/WebGLBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <>
      {/* The Obsidian Fluid Background */}
      <WebGLBackground />

      {/* Minimalist Header */}
      <Navigation />

      {/* Scrollable Content */}
      <div id="content-wrapper" className="relative z-10">
        <Hero />

        {/* Intro/Philosophy */}
        <section className="section-padding flex justify-end">
          <div className="w-full md:w-1/2">
            <div className="text-label mb-8 scrub-reveal font-medium">01 / OVERVIEW</div>
            <p className="text-body scrub-reveal text-white">
              I engineer end-to-end ML systems and research-grade pipelines.
              From Earth observation architectures to neuroimaging state space
              models, my focus is absolute precision under distribution shift.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 scrub-reveal">
              <span className="px-4 py-2 border border-[#333] rounded-full text-xs tracking-widest uppercase text-zinc-400 hover:border-white hover:text-white transition-colors cursor-default">
                C++ / Python
              </span>
              <span className="px-4 py-2 border border-[#333] rounded-full text-xs tracking-widest uppercase text-zinc-400 hover:border-white hover:text-white transition-colors cursor-default">
                PyTorch
              </span>
              <span className="px-4 py-2 border border-[#333] rounded-full text-xs tracking-widest uppercase text-zinc-400 hover:border-white hover:text-white transition-colors cursor-default">
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
