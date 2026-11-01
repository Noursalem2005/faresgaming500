import React from 'react';
import { ExternalLink, Youtube } from 'lucide-react';

const CHAMPIONS = [
  {
    id: 'viego',
    name: 'Viego',
    title: 'The Ruined King',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg',
    description: "Fares's signature jungle champion. Played for aggressive skirmishes, early invades, and high-tempo teamfight resets.",
    youtubeUrl: 'https://www.youtube.com/watch?v=Zmb2GJsYRHM',
    videoLabel: 'Watch Viego Carry'
  },
  {
    id: 'lee-sin',
    name: 'Lee Sin',
    title: 'The Blind Monk',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
    description: 'High-tempo early game pick focused on fast invades, lane dive pressure, and neutral dragon control.',
    youtubeUrl: 'https://www.youtube.com/watch?v=-GjVl9opHdk',
    videoLabel: 'Watch Lee Sin Guide'
  },
  {
    id: 'shaco',
    name: 'Shaco',
    title: 'The Demon Jester',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg',
    description: 'Strategic solo queue pick focused on camp denial, level 2 ganks, and tilting enemy laners.',
    youtubeUrl: 'https://www.youtube.com/watch?v=0ysw68B1MW8',
    videoLabel: 'Watch Shaco Carry'
  }
];

export default function ChampionPocket() {
  return (
    <section 
      id="champions" 
      className="py-24 lg:py-32 relative border-t border-[var(--border-line)] overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--champ-bg)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Simple & Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-blue)] uppercase block mb-2.5">
              Champion Pool
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)] font-display">
              Signature Champions.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
              The primary champions Fares plays in Master tier solo queue on EUW.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@Faresgaming500"
            target="_blank"
            rel="noreferrer"
            className="inline-flex yt-button items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-sm transition-all duration-200 hover:-translate-y-0.5 group"
            style={{ color: '#0b1230' }}
          >
            <Youtube className="w-4 h-4 text-red-600 fill-current shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-bold" style={{ color: '#0b1230' }}>All YouTube Videos</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* 3 Simple, Clean & Easy-to-Read Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHAMPIONS.map((champ) => (
            <div
              key={champ.id}
              className="rounded-2xl overflow-hidden group flex flex-col bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] dark:bg-white/[0.03] dark:hover:bg-white/[0.05] border border-[var(--border-line)] hover:border-[var(--accent-blue)]/50 dark:hover:border-[#38bdf8]/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Champion Splash Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={champ.splash}
                  alt={champ.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                
                {/* Clean Champion Name & Title */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                    {champ.name}
                  </h3>
                  <p className="text-xs text-slate-200 font-mono mt-0.5">
                    {champ.title}
                  </p>
                </div>
              </div>

              {/* Card Body - Simple, Friendly, Easy to Read */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal mb-6">
                  {champ.description}
                </p>

                {/* Direct Action Button - High-contrast dark font color in light mode */}
                <a
                  href={champ.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full yt-button py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-between shadow-sm transition-all duration-200 hover:-translate-y-0.5 group/btn"
                  style={{ color: '#0b1230' }}
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-600 fill-current shrink-0 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-bold tracking-wide" style={{ color: '#0b1230' }}>{champ.videoLabel}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
