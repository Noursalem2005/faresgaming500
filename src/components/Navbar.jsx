import React, { useState, useEffect } from 'react';
import { Sun, Moon, Youtube } from 'lucide-react';

export default function Navbar({ isDarkMode, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--bg-page)]/85 backdrop-blur-md border-b border-[var(--border-line)] shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--border-line)] bg-[var(--bg-card)]">
            <img
              src="/assets/fares-avatar.jpg"
              alt="Fares Gaming"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://yt3.googleusercontent.com/YWQBiVGLM2aEqjEwygYgqALPYCL-iQcL12Xa_sJ4ff5W1jLkGCCTrehnCs9o8uNeC2j7mWxiuZA=s900-c-k-c0x00ffffff-no-rj';
              }}
            />
          </div>
          <span className="font-extrabold text-base tracking-tight text-[var(--text-main)] font-display">
            FARES <span className="text-[var(--accent-blue)]">GAMING</span>
          </span>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          <a href="#coaching" className="hover:text-[var(--text-main)] transition-colors">
            Coaching
          </a>
          <a href="#champions" className="hover:text-[var(--text-main)] transition-colors">
            Champion Pool
          </a>
          <a href="#about" className="hover:text-[var(--text-main)] transition-colors">
            About
          </a>
        </nav>

        {/* Action Controls & Official Channel Logos */}
        <div className="flex items-center gap-3">
          
          {/* Official YouTube Channel Button */}
          <a
            href="https://www.youtube.com/@Faresgaming500"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-red-600 hover:text-white hover:bg-red-600 transition-all flex items-center justify-center"
            title="YouTube: @Faresgaming500"
          >
            <Youtube className="w-4 h-4 fill-current" />
          </a>

          {/* Official TikTok Button */}
          <a
            href="https://www.tiktok.com/@faresgaming500"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-line)] transition-all flex items-center justify-center"
            title="TikTok: @faresgaming500"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.77.94V6.69z"/>
            </svg>
          </a>

          {/* Official Kick Button - Icon button matching YouTube & TikTok */}
          <a
            href="https://kick.com/faresgaming500"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-[var(--text-muted)] hover:text-[#53fc18] hover:bg-[var(--border-line)] transition-all flex items-center justify-center"
            title="Kick: @faresgaming500"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M1.333 0h7.111v6.222h2.667V3.556h3.556V0h7.111v8.889h-3.556v2.667h-2.666v1.778h2.666v2.667h3.556V24h-7.111v-3.556h-3.556v-2.666H8.444V24H1.333V0z" />
            </svg>
          </a>

          {/* Light / Dark Mode Toggle Button - Placed at the FAR RIGHT */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-line)] transition-all cursor-pointer ml-1"
            title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}
