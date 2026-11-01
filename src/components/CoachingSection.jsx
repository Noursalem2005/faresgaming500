import React, { useState } from 'react';
import { Copy, CheckCircle2, ArrowUpRight } from 'lucide-react';
import RuinedGroundSigil from './RuinedGroundSigil';

export default function CoachingSection() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const discordTag = "FaresGaming";

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordTag);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2200);
  };

  return (
    <section 
      id="coaching" 
      className="pt-6 pb-28 lg:pt-8 lg:pb-36 relative bg-transparent overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 2-Column Layout: Left Text & Outline Buttons | Right: Ruined Sigil & Soul Fire shifted left to align with Viego */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Natural Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 max-w-xl lg:max-w-2xl">
            
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-blue)] uppercase block mb-3">
              Ranked Mentorship
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-main)] font-display leading-[1.08]">
              Jungle Coaching with Fares.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
              Straightforward solo queue coaching to help you understand jungle tempo, fix pathing mistakes, and climb through Diamond and Master on EUW.
            </p>

            {/* Clean Outline Buttons: Empty inside, colored boundary, fills on hover */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              
              {/* 1. Discord Button: Blurple border, fills on hover */}
              <button
                onClick={handleCopyDiscord}
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-transparent border-2 border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer group"
                title="Click to copy Discord tag"
              >
                {copiedDiscord ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:text-white shrink-0" />
                    <span>Copied "{discordTag}"!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span>Copy Discord: {discordTag}</span>
                    <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0 ml-0.5" />
                  </>
                )}
              </button>

              {/* 2. Kick Button: Respectable emerald border in light mode, neon green in dark mode */}
              <a
                href="https://kick.com/faresgaming500"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border-2 border-emerald-600 dark:border-[#53fc18] text-emerald-700 dark:text-[#53fc18] hover:bg-emerald-600 dark:hover:bg-[#53fc18] hover:text-white dark:hover:text-black text-xs font-bold tracking-wide transition-all duration-300 group"
              >
                <span>Ask Live on Kick</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* 3. TikTok Button: Crimson/Pink border, fills on hover */}
              <a
                href="https://www.tiktok.com/@faresgaming500"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border-2 border-[#ff0050] text-[#ff0050] hover:bg-[#ff0050] hover:text-white text-xs font-bold tracking-wide transition-all duration-300 group"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.77.94V6.69z"/>
                </svg>
                <span>TikTok</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
              </a>

            </div>

            <p className="mt-5 text-xs font-mono text-[var(--text-muted)]">
              DM your OP.GG and rank goals on Discord or drop a whisper in Kick chat.
            </p>

          </div>

          {/* Right Column: Lore-Accurate Ruined Sigil & Rising Soul Fire - Lowered down and shifted left under Viego */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-start lg:-translate-x-24 xl:-translate-x-36 translate-y-10 lg:translate-y-16">
            <RuinedGroundSigil />
          </div>

        </div>

      </div>
    </section>
  );
}
