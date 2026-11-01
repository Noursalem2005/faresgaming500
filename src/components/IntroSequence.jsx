import React, { useEffect, useRef, useState } from 'react';

export default function IntroSequence({ onDone, enabled = true }) {
  const canvasRef = useRef(null);
  const [captionVisible, setCaptionVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const hasFinishedRef = useRef(false);
  const animRef = useRef(null);

  const finishIntro = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setFadeOut(true);
    setTimeout(() => {
      onDone?.();
    }, 500);
  };

  useEffect(() => {
    if (!enabled) {
      onDone?.();
      return;
    }

    // Fastened by 1s (1400ms total duration, fast and snappy Kunain speed)
    const introTimer = setTimeout(() => {
      finishIntro();
    }, 1400);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();
    const sparks = [];

    // Crossing Slash Trajectories (Kunain X-Slash)
    const streak1 = (progress) => {
      const p = Math.min(1, Math.max(0, progress));
      const eased = 1 - Math.pow(1 - p, 4);
      const startX = -width * 0.05;
      const endX = width * 1.05;
      const x = startX + (endX - startX) * eased;
      const y = height * 0.48 + (x - width * 0.5) * -0.12;
      return { x, y };
    };

    const streak2 = (progress) => {
      const p = Math.min(1, Math.max(0, progress));
      const eased = 1 - Math.pow(1 - p, 4);
      const startX = width * 1.05;
      const endX = -width * 0.05;
      const x = startX + (endX - startX) * eased;
      const y = height * 0.48 + (x - width * 0.5) * 0.22;
      return { x, y };
    };

    const render = (now) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      // Fast Streak 1 (120ms to 540ms)
      if (elapsed >= 120 && elapsed <= 560) {
        const p1 = Math.min(1, (elapsed - 120) / 320);
        const pt = streak1(p1);
        const fade = elapsed > 380 ? Math.max(0, 1 - (elapsed - 380) / 180) : 1;

        if (p1 < 1 && Math.random() > 0.4) {
          sparks.push({
            x: pt.x,
            y: pt.y,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            life: 1,
            size: 1.5 + Math.random() * 2
          });
        }

        ctx.save();
        ctx.strokeStyle = `rgba(120, 208, 255, ${0.9 * fade})`;
        ctx.shadowColor = `rgba(91, 140, 255, ${fade})`;
        ctx.shadowBlur = 18;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        const startPt = streak1(Math.max(0, p1 - 0.35));
        ctx.moveTo(startPt.x, startPt.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();

        ctx.strokeStyle = `rgba(255, 255, 255, ${fade})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Fast Streak 2 (220ms to 640ms)
      if (elapsed >= 220 && elapsed <= 660) {
        const p2 = Math.min(1, (elapsed - 220) / 320);
        const pt2 = streak2(p2);
        const fade2 = elapsed > 480 ? Math.max(0, 1 - (elapsed - 480) / 180) : 1;

        ctx.save();
        ctx.strokeStyle = `rgba(120, 208, 255, ${0.95 * fade2})`;
        ctx.shadowColor = `rgba(91, 140, 255, ${fade2})`;
        ctx.shadowBlur = 22;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        const startPt2 = streak2(Math.max(0, p2 - 0.35));
        ctx.moveTo(startPt2.x, startPt2.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.stroke();

        ctx.strokeStyle = `rgba(255, 255, 255, ${fade2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Fast Cross Glint Flash (340ms to 560ms)
      if (elapsed >= 340 && elapsed <= 560) {
        const flashProgress = (elapsed - 340) / 220;
        const flashAlpha = Math.sin(flashProgress * Math.PI) * 0.85;
        const cx = width * 0.5;
        const cy = height * 0.48;

        ctx.save();
        const flashGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 110);
        flashGrad.addColorStop(0, `rgba(255, 255, 255, ${flashAlpha})`);
        flashGrad.addColorStop(0.4, `rgba(120, 208, 255, ${flashAlpha * 0.6})`);
        flashGrad.addColorStop(1, 'rgba(120, 208, 255, 0)');
        ctx.fillStyle = flashGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 110, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${flashAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - 40 * flashAlpha, cy);
        ctx.lineTo(cx + 40 * flashAlpha, cy);
        ctx.moveTo(cx, cy - 40 * flashAlpha);
        ctx.lineTo(cx, cy + 40 * flashAlpha);
        ctx.stroke();
        ctx.restore();
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.055;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(180, 225, 255, ${s.life})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fill();
      }

      // Caption Reveal (Fast: at 420ms right as glint peaks)
      if (elapsed >= 420 && !captionVisible) {
        setCaptionVisible(true);
      }

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') finishIntro();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(introTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [enabled, captionVisible]);

  if (!enabled) return null;

  return (
    <div
      onClick={finishIntro}
      className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer select-none transition-all duration-500 ease-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(1800px 700px at 50% 30%, #082260 0%, #05184a 25%, #041038 55%, #02071f 100%)',
      }}
    >
      {/* 1. Crossing Slash Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* 2. Centered Title Overlay with Mathematically Centered Circular Emblem */}
      <div className="relative z-20 text-center px-4 max-w-5xl w-full mx-auto flex flex-col items-center pointer-events-none">
        
        {/* Perfectly Balanced 3-Column Grid: Left (FARES) | Dead-Center (Emblem) | Right (GAMING) */}
        <div
          className={`w-full grid grid-cols-[1fr_auto_1fr] items-center font-black uppercase tracking-tighter transition-all duration-500 ease-out font-display ${
            captionVisible
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-3 blur-xs'
          }`}
          style={{
            fontSize: 'clamp(36px, 6.8vw, 92px)',
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            color: '#ffffff',
            textShadow: '0 0 45px rgba(56, 189, 248, 0.55)'
          }}
        >
          {/* Left Wing (1fr) - Right-aligned to hug the center emblem */}
          <div className="text-right pr-3.5 sm:pr-5 lg:pr-6">
            <span>FARES</span>
          </div>

          {/* EXACT Center (Auto) - Positioned at 50% dead center, elevated slightly to top-middle */}
          <div className="relative -translate-y-2.5 sm:-translate-y-3.5 lg:-translate-y-4 inline-flex items-center justify-center shrink-0">
            <div className="w-[clamp(42px,5.5vw,78px)] h-[clamp(42px,5.5vw,78px)] rounded-full overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_28px_rgba(56,189,248,0.65)] bg-[#040b1e] p-[1.5px] transition-transform duration-500">
              <img
                src="/assets/fares-emblem.webp"
                alt="Fares Gaming Emblem"
                className="w-full h-full object-cover rounded-full select-none"
                loading="eager"
              />
            </div>
            {/* Subtle Ethereal Pulse Ring */}
            <div className="absolute inset-0 rounded-full border border-[#78d0ff]/50 scale-110 pointer-events-none animate-pulse" />
          </div>

          {/* Right Wing (1fr) - Left-aligned to mirror the left side identically */}
          <div className="text-left pl-3.5 sm:pl-5 lg:pl-6">
            <span>GAMING</span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className={`mt-4 text-xs md:text-sm font-semibold tracking-[0.28em] text-[#78d0ff] uppercase transition-all duration-500 delay-100 ${
            captionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          MASTER TIER · EUW JUNGLE
        </p>

      </div>

      {/* Skip Hint */}
      <div className="absolute bottom-6 right-8 text-[11px] font-mono tracking-widest text-[#78d0ff]/60 hover:text-white transition-colors z-30">
        CLICK ANYWHERE OR ESC TO ENTER
      </div>
    </div>
  );
}
