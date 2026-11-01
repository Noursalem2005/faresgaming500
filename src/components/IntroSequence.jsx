import React, { useEffect, useRef, useState } from 'react';

export default function IntroSequence({ onDone, enabled = true }) {
  const canvasRef = useRef(null);
  const [captionVisible, setCaptionVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const hasFinishedRef = useRef(false);
  const animRef = useRef(null);

  // Sound triggers & AudioContext ref
  const audioCtxRef = useRef(null);
  const playedStreak1Audio = useRef(false);
  const playedStreak2Audio = useRef(false);
  const playedImpactAudio = useRef(false);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  };

  // High-impact sword slash sound (Hybrid: HTML5 Audio + Web Audio API synthesizer)
  const playBladeSlash = (pitch = 1.0, intensity = 1.0) => {
    // 1. Direct HTML5 Audio playback for maximum compatibility
    try {
      const slashAudio = new Audio('/assets/slash.wav');
      slashAudio.volume = Math.min(1, 0.65 * intensity);
      slashAudio.playbackRate = pitch;
      slashAudio.play().catch(() => {});
    } catch {}

    // 2. Procedural Web Audio API synthesizer for the whoosh + steel slice
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;

      // Air displacement / Whoosh (filtered noise sweep)
      const bufferSize = Math.floor(ctx.sampleRate * 0.32);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3400 * pitch, t);
      filter.frequency.exponentialRampToValueAtTime(320 * pitch, t + 0.26);
      filter.Q.setValueAtTime(3.2, t);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, t);
      noiseGain.gain.linearRampToValueAtTime(0.42 * intensity, t + 0.03);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      whiteNoise.start(t);
      whiteNoise.stop(t + 0.32);

      // Steel blade resonance (metallic edge)
      const steelOsc = ctx.createOscillator();
      steelOsc.type = 'sine';
      steelOsc.frequency.setValueAtTime(2100 * pitch, t);
      steelOsc.frequency.exponentialRampToValueAtTime(1100 * pitch, t + 0.2);

      const steelGain = ctx.createGain();
      steelGain.gain.setValueAtTime(0.001, t);
      steelGain.gain.linearRampToValueAtTime(0.22 * intensity, t + 0.02);
      steelGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);

      steelOsc.connect(steelGain);
      steelGain.connect(ctx.destination);

      steelOsc.start(t);
      steelOsc.stop(t + 0.25);
    } catch {}
  };

  const playBladeImpact = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(2600, t);
      osc1.frequency.exponentialRampToValueAtTime(1300, t + 0.35);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(3800, t);
      osc2.frequency.exponentialRampToValueAtTime(1900, t + 0.45);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.26, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.48);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.5);
      osc2.stop(t + 0.5);
    } catch {}
  };

  const finishIntro = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setFadeOut(true);
    setTimeout(() => {
      onDone?.();
    }, 700);
  };

  useEffect(() => {
    if (!enabled) {
      onDone?.();
      return;
    }

    // Try to unlock audio context immediately on mount & on first interaction
    getAudioContext();
    const unlockAudio = () => {
      getAudioContext();
    };
    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });

    // Advance smoothly after crossing slash completes
    const introTimer = setTimeout(() => {
      finishIntro();
    }, 2400);

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

      // Streak 1 (300ms to 950ms) + Sound
      if (elapsed >= 300) {
        if (!playedStreak1Audio.current) {
          playedStreak1Audio.current = true;
          playBladeSlash(1.0, 1.0);
        }
      }

      if (elapsed >= 300 && elapsed <= 950) {
        const p1 = Math.min(1, (elapsed - 300) / 420);
        const pt = streak1(p1);
        const fade = elapsed > 650 ? Math.max(0, 1 - (elapsed - 650) / 300) : 1;

        if (p1 < 1 && Math.random() > 0.4) {
          sparks.push({
            x: pt.x,
            y: pt.y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
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

      // Streak 2 (480ms to 1100ms) + Sound
      if (elapsed >= 480) {
        if (!playedStreak2Audio.current) {
          playedStreak2Audio.current = true;
          playBladeSlash(1.18, 0.95);
        }
      }

      if (elapsed >= 480 && elapsed <= 1100) {
        const p2 = Math.min(1, (elapsed - 480) / 400);
        const pt2 = streak2(p2);
        const fade2 = elapsed > 820 ? Math.max(0, 1 - (elapsed - 820) / 280) : 1;

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

      // Cross Glint Flash (650ms to 900ms) + Metallic Strike
      if (elapsed >= 650) {
        if (!playedImpactAudio.current) {
          playedImpactAudio.current = true;
          playBladeImpact();
        }
      }

      if (elapsed >= 650 && elapsed <= 900) {
        const flashProgress = (elapsed - 650) / 250;
        const flashAlpha = Math.sin(flashProgress * Math.PI) * 0.8;
        const cx = width * 0.5;
        const cy = height * 0.48;

        ctx.save();
        const flashGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 100);
        flashGrad.addColorStop(0, `rgba(255, 255, 255, ${flashAlpha})`);
        flashGrad.addColorStop(0.4, `rgba(120, 208, 255, ${flashAlpha * 0.6})`);
        flashGrad.addColorStop(1, 'rgba(120, 208, 255, 0)');
        ctx.fillStyle = flashGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 100, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${flashAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - 35 * flashAlpha, cy);
        ctx.lineTo(cx + 35 * flashAlpha, cy);
        ctx.moveTo(cx, cy - 35 * flashAlpha);
        ctx.lineTo(cx, cy + 35 * flashAlpha);
        ctx.stroke();
        ctx.restore();
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.04;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(180, 225, 255, ${s.life})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fill();
      }

      // Caption Reveal
      if (elapsed >= 750 && !captionVisible) {
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
      window.removeEventListener('pointerdown', unlockAudio);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [enabled, captionVisible]);

  if (!enabled) return null;

  return (
    <div
      onClick={finishIntro}
      className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer select-none transition-all duration-700 ease-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(1800px 700px at 50% 30%, #082260 0%, #05184a 25%, #041038 55%, #02071f 100%)',
      }}
    >
      {/* 1. Crossing Slash Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* 2. Centered Title Overlay */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pointer-events-none">
        <h1
          className={`font-black uppercase tracking-tighter transition-all duration-600 font-display ${
            captionVisible
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-4 blur-xs'
          }`}
          style={{
            fontSize: 'clamp(44px, 7.5vw, 96px)',
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            color: '#ffffff',
            textShadow: '0 0 40px rgba(56, 189, 248, 0.5)'
          }}
        >
          FARES GAMING
        </h1>

        <p
          className={`mt-3 text-xs md:text-sm font-semibold tracking-[0.28em] text-[#78d0ff] uppercase transition-all duration-600 delay-100 ${
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
