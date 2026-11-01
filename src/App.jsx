import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import IntroSequence from './components/IntroSequence';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoachingSection from './components/CoachingSection';
import ChampionPocket from './components/ChampionPocket';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(false); // Bypassed for now per user request
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to Light Mode (Kunain Paper Theme)

  // Initialize Lenis buttery smooth scroll (Kunain-style momentum)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Smooth scroll for all internal anchor links (#top, #coaching, #champions, #about, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      e.preventDefault();

      if (href === '#' || href === '#top') {
        lenis.scrollTo(0, { duration: 1.2, offset: 0 });
        try {
          history.replaceState(null, '', ' ');
        } catch {}
        return;
      }

      try {
        const target = document.querySelector(href);
        if (target) {
          // -72px offset for the fixed navbar clearance
          lenis.scrollTo(target, { duration: 1.2, offset: -72 });
          try {
            history.replaceState(null, '', href);
          } catch {}
        }
      } catch (err) {
        // Fallback for special selector edge cases
        const id = href.replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          lenis.scrollTo(target, { duration: 1.2, offset: -72 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Sync theme with document element & persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      try {
        localStorage.setItem('fares_theme', 'dark');
      } catch {}
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      try {
        localStorage.setItem('fares_theme', 'light');
      } catch {}
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] selection:bg-[var(--accent-blue)] selection:text-white transition-colors duration-300">
      
      {/* 1. Fast Kunain-Style Crossing Slash Cut */}
      {showIntro && (
        <IntroSequence
          enabled={showIntro}
          onDone={() => setShowIntro(false)}
        />
      )}

      {/* 2. Minimalist Header with Theme Switcher & Social Logos */}
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      {/* 3. Main Creator Flow */}
      <main className="relative z-10">
        {/* Unified Continuous Master Stage: Hero + Coaching sharing ONE unbroken background */}
        <div 
          className="relative transition-colors duration-300"
          style={{
            background: 'var(--banner-bg)',
          }}
        >
          <HeroSection onOpenVideo={handlePlayVideo} />
          <CoachingSection />
        </div>

        <ChampionPocket />
        <AboutSection />
      </main>

      {/* 4. Compact Footer with 3D Transparent Viego Accent */}
      <Footer />

      {/* 5. Clean Video Player Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        video={selectedVideo}
      />

    </div>
  );
}
