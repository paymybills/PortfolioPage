"use client";

import { useEffect, useRef } from "react";

export default function ParticlePlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let mouse = { x: -1000, y: -1000, isDown: false };
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 2 + 1;
        const colors = ["#a855f7", "#fb923c", "#0ea5e9", "#e2e8f0"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const repelRadius = mouse.isDown ? 250 : 120;
        
        if (dist < repelRadius) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force = (repelRadius - dist) / repelRadius;
          const pushForce = mouse.isDown ? force * 15 : force * 5;
          
          this.vx -= forceDirectionX * pushForce;
          this.vy -= forceDirectionY * pushForce;
        }

        this.vx *= 0.95;
        this.vy *= 0.95;

        if (Math.abs(this.vx) < 0.2) this.vx += (Math.random() - 0.5) * 0.5;
        if (Math.abs(this.vy) < 0.2) this.vy += (Math.random() - 0.5) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      w = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      h = canvas.height = 400; 
      particles = [];
      const particleCount = Math.floor((w * h) / 6000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(Math.random() * w, Math.random() * h));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            const opacity = 0.2 - (dist / 80) * 0.2;
            ctx.strokeStyle = "rgba(148, 163, 184, " + opacity + ")";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    const setMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", setMouse);
    canvas.addEventListener("mousedown", () => (mouse.isDown = true));
    canvas.addEventListener("mouseup", () => (mouse.isDown = false));
    canvas.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isDown = false;
    });

    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="section-padding">
      <div className="text-label mb-8 scrub-reveal font-medium">05 / INTERACTIVE KINETICS</div>
      <div className="relative w-full h-[400px] border border-[var(--border)] rounded-[24px] overflow-hidden glass-strong group cursor-crosshair">
        <canvas ref={canvasRef} className="absolute inset-0 block"></canvas>
        <div className="absolute bottom-6 right-6 text-[10px] text-[var(--accent)] font-medium tracking-widest uppercase pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
          Hover To Interact &mdash; Click & Drag to Repel
        </div>
      </div>
    </section>
  );
}
