import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useAnimations';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'petal' | 'sparkle';
}

/**
 * Canvas-based floating rose petals and golden sparkles.
 * GPU-friendly: single canvas, rAF loop, capped particle count.
 */
export default function PetalsCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particleCount = width < 640 ? 14 : 28;
    const particles: Particle[] = [];

    const spawn = (initial = false): Particle => {
      const type: 'petal' | 'sparkle' = Math.random() > 0.35 ? 'petal' : 'sparkle';
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 20,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(0.3 + Math.random() * 0.8),
        size: type === 'petal' ? 6 + Math.random() * 10 : 1.5 + Math.random() * 2.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: 0.4 + Math.random() * 0.5,
        type,
      };
    };

    for (let i = 0; i < particleCount; i++) particles.push(spawn(true));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.vx += Math.sin(p.y * 0.01) * 0.005;

        if (p.y < -30) {
          particles[i] = spawn();
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          // Draw a rose petal shape
          const s = p.size;
          ctx.fillStyle = '#C8A45D';
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.bezierCurveTo(s * 0.7, -s * 0.7, s * 0.7, s * 0.5, 0, s);
          ctx.bezierCurveTo(-s * 0.7, s * 0.5, -s * 0.7, -s * 0.7, 0, -s);
          ctx.fill();
          // Inner highlight
          ctx.fillStyle = 'rgba(224, 196, 144, 0.4)';
          ctx.beginPath();
          ctx.ellipse(0, 0, s * 0.25, s * 0.5, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Golden sparkle — 4-point star
          const s = p.size;
          ctx.fillStyle = '#E0C490';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#C8A45D';
          ctx.beginPath();
          ctx.moveTo(0, -s * 2);
          ctx.lineTo(s * 0.4, -s * 0.4);
          ctx.lineTo(s * 2, 0);
          ctx.lineTo(s * 0.4, s * 0.4);
          ctx.lineTo(0, s * 2);
          ctx.lineTo(-s * 0.4, s * 0.4);
          ctx.lineTo(-s * 2, 0);
          ctx.lineTo(-s * 0.4, -s * 0.4);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
