import React from 'react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[880px] lg:min-h-[980px] flex items-center py-24 lg:py-36 border-t border-[var(--border-line)] overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--about-bg)',
      }}
    >
      {/* 1. Atmospheric Deep Crimson Ambient Glow */}
      <div 
        className="absolute right-[-4vw] lg:right-[4vw] top-1/2 -translate-y-1/2 w-[65vw] max-w-[850px] h-[95%] pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 75% 70% at 55% 50%, rgba(239, 68, 68, 0.16) 0%, rgba(185, 28, 28, 0.06) 50%, transparent 80%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 2. Giant Faded Background Typography for Dramatic Depth */}
      <div
        className="absolute right-2 lg:right-10 top-8 text-[18vw] font-black uppercase text-black/[0.04] dark:text-white/[0.02] font-display pointer-events-none select-none leading-none tracking-tighter z-[0]"
        aria-hidden="true"
      >
        RUINED
      </div>

      {/* 3. MASSIVE DOMINATING CRIMSON VIEGO (Lowered down for natural grounding) */}
      <div className="absolute right-[-10vw] sm:right-[-5vw] lg:right-[0vw] xl:right-[3vw] bottom-[-25px] top-[4%] lg:top-[6%] w-[76vw] sm:w-[68vw] lg:w-[60vw] max-w-[920px] h-[102%] lg:h-[104%] pointer-events-none select-none z-[5] flex items-end justify-end">
        
        {/* Organic Fiery Rim Aura Backdrop */}
        <div 
          className="absolute inset-0 scale-[1.04] pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle 440px at 45% 65%, rgba(239, 68, 68, 0.22), transparent 70%), radial-gradient(circle 320px at 60% 25%, rgba(255, 80, 80, 0.18), transparent 65%)',
            filter: 'blur(40px)',
          }}
        />

        {/* The Dominant 3D Render: Monumental sword, boots, and crown dissolving into the floor */}
        <img
          src="/assets/viego-crimson.webp"
          alt="Crimson Ruined King Viego"
          className="w-full h-full object-contain object-bottom lg:object-right-bottom transition-all duration-300"
          loading="lazy"
          decoding="async"
          style={{
            // Organic fiery rim glow directly on the silhouette
            filter: 'drop-shadow(0 0 16px rgba(239, 68, 68, 0.55)) drop-shadow(0 0 45px rgba(220, 38, 38, 0.35)) drop-shadow(0 25px 60px rgba(11, 18, 48, 0.28)) brightness(1.03) contrast(1.05)',
            // Soft bottom feather so sword and boots seamlessly dissolve into the section floor
            maskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.4) 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.4) 94%, transparent 100%)',
          }}
        />
      </div>

      {/* 4. Text Copy - Colored "About Fares" separated far above in the left corner */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Separated Section Identifier - Far Above in the Left Corner with Accent Color */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <span className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[var(--accent-blue)] font-display inline-flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-blue)]" />
            <span>About Fares</span>
          </span>
        </div>

        {/* Main Content Block Below with Breathing Room */}
        <div className="max-w-lg lg:max-w-[480px]">
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-main)] font-display leading-[1.08]">
            Jungle fundamentals, not flashy illusions.
          </h2>

          <div className="mt-6 space-y-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-normal">
            <p>
              I'm Fares, a high-elo solo queue jungler on EUW. My gameplay focuses on aggressive jungle macro, wave management control, and limit-testing teamfight carries.
            </p>
            <p>
              While Viego is my signature pick, my pool spans high-tempo playmakers like Lee Sin and Shaco.
            </p>
            <p className="text-xs font-mono text-[var(--text-muted)] pt-4 border-t border-[var(--border-line)]">
              Live streaming daily on Kick & YouTube · 10:00 PM – 08:00 AM
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
