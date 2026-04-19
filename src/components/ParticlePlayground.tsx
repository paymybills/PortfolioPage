"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const createParticle = (w: number, h: number): Particle => {
  const colors = ["#a855f7", "#fb923c", "#0ea5e9", "#e2e8f0"];
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    radius: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
};

const updateParticle = (
  p: Particle,
  w: number,
  h: number,
  mouse: { x: number; y: number; isDown: boolean }
) => {
  p.x += p.vx;
  p.y += p.vy;

  if (p.x < 0 || p.x > w) p.vx *= -1;
  if (p.y < 0 || p.y > h) p.vy *= -1;

  const dx = mouse.x - p.x;
  const dy = mouse.y - p.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  const repelRadius = mouse.isDown ? 250 : 120;

  if (dist < repelRadius) {
    const forceDirectionX = dx / dist;
    const forceDirectionY = dy / dist;
    const force = (repelRadius - dist) / repelRadius;
    const pushForce = mouse.isDown ? force * 15 : force * 5;

    p.vx -= forceDirectionX * pushForce;
    p.vy -= forceDirectionY * pushForce;
  }

  p.vx *= 0.95;
  p.vy *= 0.95;

  if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.5;
  if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.5;
};

const drawParticle = (p: Particle, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
  ctx.fillStyle = p.color;
  ctx.fill();
  ctx.closePath();
};

export default function ParticlePlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const mouse = { x: -1000, y: -1000, isDown: false };
    let animationFrameId: number;
    let particles: Particle[] = [];

    const init = () => {
      w = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      h = canvas.height = 400;
      particles = [];
      const particleCount = Math.floor((w * h) / 6000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(w, h));
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
        updateParticle(particles[i], w, h, mouse);
        drawParticle(particles[i], ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    
    const setMouse = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    };
    
    canvas.addEventListener("mousemove", setMouse as EventListener);
    canvas.addEventListener("touchmove", setMouse as EventListener, { passive: true });
    canvas.addEventListener("mousedown", () => (mouse.isDown = true));
    canvas.addEventListener("touchstart", ((e: TouchEvent) => {
      setMouse(e);
      mouse.isDown = true;
    }) as EventListener, { passive: true });
    canvas.addEventListener("mouseup", () => (mouse.isDown = false));
    canvas.addEventListener("touchend", () => {
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
      <div className="text-label mb-8 scrub-reveal font-medium">
        05 / A WILD GOOSE CHASE FOR YOU
      </div>
      <div className="relative w-full h-[400px] border border-[var(--border)] rounded-[24px] overflow-hidden glass-strong group cursor-crosshair">
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full"></canvas>
        <div className="absolute bottom-6 right-6 text-[10px] text-[var(--accent)] font-medium tracking-widest uppercase pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
          Touch To Interact &mdash; Tap & Drag to Repel
        </div>
      </div>
    </section>
  );
}
