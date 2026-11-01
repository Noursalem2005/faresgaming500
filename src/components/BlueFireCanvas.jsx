import React, { useEffect, useRef } from 'react';

export default function BlueFireCanvas({ active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Ethereal flame particles - base lowered further down & exact spectral cyan colors
    const particles = [];
    const maxParticles = 32;

    // Spawn point concentrated around Viego's sword and body (right-center)
    const spawnParticle = () => {
      const x = width * 0.45 + (Math.random() - 0.5) * (width * 0.4);
      const y = height * 0.85 + Math.random() * (height * 0.1);
      particles.push({
        x,
        y,
        baseX: x,
        size: 3 + Math.random() * 8,
        vy: 1.2 + Math.random() * 2.2, // Float upward
        vx: (Math.random() - 0.5) * 0.8,
        swirlSpeed: 0.02 + Math.random() * 0.03,
        swirlAmplitude: 15 + Math.random() * 25,
        life: 0,
        maxLife: 80 + Math.random() * 70,
        colorType: Math.random()
      });
    };

    let animId;
    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      tick++;
      if (active && particles.length < maxParticles && tick % 3 === 0) {
        spawnParticle();
      }

      ctx.save();
      // Spectral blending matching dark mode
      ctx.globalCompositeOperation = 'source-over';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.y -= p.vy;
        p.x = p.baseX + Math.sin(p.life * p.swirlSpeed) * p.swirlAmplitude + p.vx * p.life;

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.7;
        const currentSize = p.size * (1 - progress * 0.35);

        if (progress >= 1 || p.y < -20) {
          particles.splice(i, 1);
          continue;
        }

        // Exact original spectral soul-fire colors (as in dark mode)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 2.5);
        if (p.colorType > 0.4) {
          // Luminous Cyan / Soul Fire
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          grad.addColorStop(0.35, `rgba(56, 189, 248, ${alpha * 0.85})`);
          grad.addColorStop(0.8, `rgba(30, 75, 209, ${alpha * 0.3})`);
          grad.addColorStop(1, 'rgba(30, 75, 209, 0)');
        } else {
          // Deep Ruined Sapphire Flame
          grad.addColorStop(0, `rgba(165, 243, 252, ${alpha})`);
          grad.addColorStop(0.4, `rgba(14, 165, 233, ${alpha * 0.75})`);
          grad.addColorStop(0.8, `rgba(8, 47, 138, ${alpha * 0.25})`);
          grad.addColorStop(1, 'rgba(8, 47, 138, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none select-none overflow-visible"
    />
  );
}
