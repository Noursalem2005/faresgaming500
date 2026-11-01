import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Twitch, Youtube } from 'lucide-react';

export default function Footer() {
  const socials = [
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/faresgaming500',
      icon: <Twitch className="w-3.5 h-3.5" />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Faresgaming500',
      icon: <Youtube className="w-3.5 h-3.5" />,
    },
    {
      name: 'Kick',
      url: 'https://kick.com/faresgaming500',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M1.333 0h7.111v6.222h2.667V3.556h3.556V0h7.111v8.889h-3.556v2.667h-2.666v1.778h2.666v2.667h3.556V24h-7.111v-3.556h-3.556v-2.666H8.444V24H1.333V0z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@faresgaming500',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.77.94V6.69z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/faresgaming5005',
      icon: <Instagram className="w-3.5 h-3.5" />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61570195921871',
      icon: <Facebook className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <footer 
      id="stream" 
      className="relative border-t border-[var(--border-line)] pt-12 pb-8 overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--bg-page)',
      }}
    >
      
      {/* Clean Viego Cutout Accent in Footer - Clear & visible in light mode */}
      <div className="pointer-events-none absolute right-[-1vw] bottom-0 w-[32vw] max-w-[290px] h-[88%] z-0 opacity-40 dark:opacity-25 select-none transition-opacity duration-300">
        <img
          src="/assets/viego-transparent.webp"
          alt="Viego"
          className="w-full h-full object-contain object-right-bottom"
          loading="lazy"
          decoding="async"
          style={{
            filter: 'drop-shadow(0 10px 25px rgba(11, 18, 48, 0.2)) contrast(1.05)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Creator Identity & Official Socials */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[var(--border-line)]">
          <div>
            <a href="#top" className="group inline-flex items-center gap-2" title="Back to top">
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-blue)] transition-colors font-display tracking-tight">
                Fares Gaming
              </h3>
            </a>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Official channels and social media profiles.
            </p>
          </div>

          {/* Social Channels Row - Clean, respectable minimal pill design */}
          <div className="flex flex-wrap items-center gap-2.5">
            {socials.map((social) => {
              const isYoutube = social.name === 'YouTube';
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    isYoutube
                      ? "group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white text-[#0b1230] border border-[#c3cad8] hover:bg-[#f1f4f9] hover:border-[#9ba8bc] dark:bg-white/[0.08] dark:hover:bg-white/[0.14] dark:border-white/10 dark:text-white transition-all duration-200 text-xs font-bold shadow-sm hover:-translate-y-0.5"
                      : "group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-line)] hover:border-[var(--text-muted)]/30 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all duration-200 text-xs font-medium shadow-sm hover:-translate-y-0.5"
                  }
                >
                  <span className={`shrink-0 transition-colors ${isYoutube ? 'text-red-600' : 'group-hover:text-[var(--text-main)]'}`}>
                    {social.icon}
                  </span>
                  <span className={`text-xs ${isYoutube ? 'font-bold text-[#0b1230] dark:text-white' : 'font-semibold text-[var(--text-main)]'}`}>
                    {social.name}
                  </span>
                  <ArrowUpRight className={`w-3 h-3 ${isYoutube ? 'text-[#5b6376] dark:text-white/60 group-hover:text-[#0b1230] dark:group-hover:text-white' : 'opacity-40 group-hover:opacity-100'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-0.5`} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[var(--text-muted)]">
          <span>© {new Date().getFullYear()} Fares Gaming · Master Tier Jungle EUW</span>
          <div className="flex items-center gap-6">
            <span>League of Legends is a trademark of Riot Games, Inc.</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-[var(--accent-blue)] hover:underline font-sans font-semibold cursor-pointer"
            >
              <span>Back to Top ↑</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
