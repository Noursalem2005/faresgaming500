import React, { useEffect, useRef } from 'react';

export default function RuinedGroundSigil() {
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

    // Ethereal Soul Fire Particles: Lower grounding & original spectral cyan colors
    const particles = [];
    const maxParticles = 36;

    const spawnParticle = () => {
      // Erupts directly from the Camavor Crown crest and inner fissures
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (width * 0.28);
      const x = width * 0.5 + Math.cos(angle) * radius;
      // Directly aligned with the projected Camavor crown center
      const y = height * 0.90 + Math.sin(angle) * (radius * 0.28);

      particles.push({
        x,
        y,
        baseX: x,
        size: 3.5 + Math.random() * 9,
        vy: 0.65 + Math.random() * 0.95,
        vx: (Math.random() - 0.5) * 0.55,
        swirlSpeed: 0.014 + Math.random() * 0.022,
        swirlAmplitude: 15 + Math.random() * 26,
        life: 0,
        maxLife: 135 + Math.random() * 95,
        colorType: Math.random()
      });
    };

    let animId;
    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      if (particles.length < maxParticles && tick % 3 === 0) {
        spawnParticle();
      }

      ctx.save();
      ctx.globalCompositeOperation = 'source-over';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        // Acceleration upward
        p.y -= p.vy;
        p.vy += 0.036;
        p.x = p.baseX + Math.sin(p.life * p.swirlSpeed) * p.swirlAmplitude + p.vx * p.life;

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.8;
        const currentSize = p.size * (1 - progress * 0.3);

        if (progress >= 1 || p.y < -30) {
          particles.splice(i, 1);
          continue;
        }

        // Exact original spectral soul-fire colors (as in dark mode)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 2.5);
        if (p.colorType > 0.4) {
          // Luminous Soul Cyan Flame
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          grad.addColorStop(0.35, `rgba(56, 189, 248, ${alpha * 0.85})`);
          grad.addColorStop(0.8, `rgba(30, 75, 209, ${alpha * 0.3})`);
          grad.addColorStop(1, 'rgba(30, 75, 209, 0)');
        } else {
          // Deep Ruined Sapphire Flame
          grad.addColorStop(0, `rgba(186, 230, 253, ${alpha})`);
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
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] flex items-end justify-center select-none pointer-events-none overflow-visible">
      
      {/* 1. Ground Perspective Floor Plane: Camavor Crown Sigil Lowered Down */}
      <div 
        className="absolute bottom-[-75px] lg:bottom-[-100px] w-[520px] sm:w-[660px] h-[520px] sm:h-[660px] flex items-center justify-center"
        style={{
          transform: 'perspective(750px) rotateX(65deg)',
          transformOrigin: '50% 80%',
        }}
      >
        {/* Soft Radial Under-Glow (Exact original spectral cyan glow) */}
        <div className="absolute inset-0 rounded-full bg-[#38bdf8]/15 blur-3xl animate-pulse" />

        {/* Camavor Crown Sigil & Radial Ground Cracks SVG - Exact original spectral cyan */}
        <svg 
          viewBox="0 0 400 400" 
          className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.7)]"
          style={{ overflow: 'visible' }}
        >
          {/* Concentric Runic Rings */}
          <circle cx="200" cy="200" r="175" fill="none" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="148" fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(56, 189, 248, 0.55)" strokeWidth="2" />

          {/* Radiating Ruination Ground Cracks / Fissures */}
          <path d="M200 95 L192 55 L178 35 L160 10" fill="none" stroke="rgba(56, 189, 248, 0.7)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M200 305 L208 345 L220 370 L240 395" fill="none" stroke="rgba(56, 189, 248, 0.7)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M95 200 L55 208 L30 222 L5 238" fill="none" stroke="rgba(56, 189, 248, 0.7)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M305 200 L345 192 L372 178 L398 160" fill="none" stroke="rgba(56, 189, 248, 0.7)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Secondary diagonal fissures */}
          <path d="M130 130 L102 102 L75 85 L48 55" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" strokeLinecap="round" />
          <path d="M270 270 L298 298 L325 315 L355 342" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" strokeLinecap="round" />
          <path d="M270 130 L298 102 L325 85 L352 58" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" strokeLinecap="round" />
          <path d="M130 270 L102 298 L80 320 L52 348" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" strokeLinecap="round" />

          {/* Viego's Iconic 3-Spiked Crown Crest in the Center */}
          <path 
            d="M165 235 L175 165 L190 205 L200 135 L210 205 L225 165 L235 235 Z" 
            fill="rgba(56, 189, 248, 0.22)" 
            stroke="rgba(120, 210, 255, 0.95)" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
            className="filter drop-shadow-[0_0_20px_rgba(56,189,248,0.95)]"
          />

          {/* Center Soul Core */}
          <circle cx="200" cy="200" r="12" fill="rgba(255, 255, 255, 0.95)" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="200" cy="200" r="7" fill="#ffffff" />
        </svg>
      </div>

      {/* 2. Unbroken Continuous Soul Fire Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute -top-[550px] lg:-top-[750px] bottom-0 w-full h-[1100px] lg:h-[1400px] pointer-events-none z-10"
      />

    </div>
  );
}
