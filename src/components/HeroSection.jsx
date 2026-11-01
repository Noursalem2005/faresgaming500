import React from 'react';
import { Youtube, Calendar } from 'lucide-react';
import BlueFireCanvas from './BlueFireCanvas';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[94vh] lg:min-h-[98vh] flex items-center overflow-visible bg-transparent"
    >
      {/* 1. Giant Background Watermark (.hero__mark) - Crisp, subtle & architectural */}
      <div
        className="hero__mark select-none pointer-events-none"
        aria-hidden="true"
      >
        FARES
      </div>

      {/* 2. Real-time Spectral Blue Fire / Mist Canvas - Overflow visible to connect with Coaching */}
      <div className="absolute right-0 bottom-[-150px] w-full lg:w-[65vw] h-[calc(100%+150px)] pointer-events-none z-[2] overflow-visible">
        <BlueFireCanvas active={true} />
      </div>

      {/* 3. Static & Enlarged 3D Viego Stage with signature spectral cyan glow & bottom fade */}
      <div className="hero__fig z-[5] select-none pointer-events-none">
        <img
          src="/assets/viego-transparent.png?v=2"
          alt="The Ruined King Viego"
          className="w-full h-full object-contain object-right-bottom transition-all duration-300"
          style={{
            // Signature ethereal cyan & sapphire rim glow matching his Ruined King theme
            filter: 'drop-shadow(0 0 16px rgba(56, 189, 248, 0.45)) drop-shadow(0 0 38px rgba(30, 75, 209, 0.25)) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.38))',
            // Deep bottom fade so Viego's legs smoothly dissolve into the floor
            maskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.7) 68%, rgba(0,0,0,0.2) 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.7) 68%, rgba(0,0,0,0.2) 85%, transparent 100%)',
          }}
          loading="eager"
        />
      </div>

      {/* 4. Hero Content (.hero__copy) - Lowered down to sit comfortably below Viego's sword */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-56 sm:pt-68 lg:pt-80 pb-16 lg:pb-24">
        <div className="max-w-md lg:max-w-[460px] transition-all duration-700 ease-out">
          
          {/* Main Headline - Natural Case (no uppercase), high-contrast & legible */}
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[var(--text-main)] font-display leading-snug">
            Master Tier Jungle on EUW.
          </h1>

          {/* Clean natural copy - simple muted color, comfortable reading size */}
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
            High-elo solo queue ranked, deep jungle macro & wave fundamentals, and Ruined King carry mechanics from Fares. Streaming live daily on Kick.
          </p>

          {/* Exactly 2 Clean Action Buttons: Book a Consultation & Watch on YouTube */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            {/* 1. Book a Consultation */}
            <a
              href="#coaching"
              className="pill pill-primary text-xs py-3 px-6 font-bold tracking-wide flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white/90 dark:text-[#080c16]" />
              <span>Book a Consultation</span>
            </a>

            {/* 2. Watch on YouTube - Dark text in light mode, white text in dark mode */}
            <a
              href="https://www.youtube.com/@Faresgaming500"
              target="_blank"
              rel="noreferrer"
              className="pill text-xs py-3 px-6 font-bold tracking-wide flex items-center gap-2 bg-white text-[#0b1230] border border-[#c3cad8] hover:bg-[#f1f4f9] hover:border-[#9ba8bc] shadow-sm hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] dark:border-white/10 dark:text-white group"
            >
              <Youtube className="w-4 h-4 text-red-600 fill-current shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#0b1230] dark:text-white">Watch on YouTube</span>
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
}
