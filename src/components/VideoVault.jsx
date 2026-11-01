import React from 'react';
import { Play, Clock, ExternalLink } from 'lucide-react';

const VIDEOS = [
  {
    id: 'Zmb2GJsYRHM',
    title: 'كل اللي قلته في اللايف حصل حرفيًا! 🧠 | Viego vs Teemo Jungle',
    duration: '27:38',
    category: 'Viego vs Teemo'
  },
  {
    id: 'uZC6OobHIo4',
    title: 'How to MASTER Wave Management شرحت كل حاجه في الجيم ده وهتستفيد اكيد',
    duration: '26:06',
    category: 'Wave Control'
  },
  {
    id: '-GjVl9opHdk',
    title: 'شرح Lee Sin كامل 2026🔥 الكومبوهات - الرونز - الأيتمز - أسرار الاحتراف',
    duration: '06:33',
    category: 'Lee Sin Mastery'
  },
  {
    id: 'AeOfvH1l8bc',
    title: 'Lethality vs Armor Penetration | الفرق بينهم ببساطة في League of Legends',
    duration: '03:25',
    category: 'Item Mechanics'
  },
  {
    id: '0ysw68B1MW8',
    title: 'Kindred Had The Worst Game Of Her Life 💀 | Shaco Carry In high elo..',
    duration: '12:08',
    category: 'Shaco Infiltration'
  },
  {
    id: 'O1cc6cjTs-4',
    title: 'أصعب جيم لعبته في حياتي | ضد أقوى لاعيبة السيرفر (Challengers Rank 2 & 3)',
    duration: '04:36',
    category: 'High-Elo Solo Queue'
  }
];

export default function VideoVault({ onPlayVideo }) {
  return (
    <section 
      id="videos" 
      className="py-28 lg:py-36 relative border-t border-white/5 overflow-hidden transition-colors duration-300"
      style={{
        background: 'radial-gradient(1400px 600px at 50% 20%, #05143a 0%, #030d28 45%, #02071a 100%)',
      }}
    >
      {/* Subtle Ambient Glass Lights in Background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#1e4bd1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Luxury Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#38bdf8] uppercase block mb-3">
              Ranked Vault & Gameplay
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white font-display leading-tight">
              Curated Guides & Carries.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              High-elo solo queue vods, champion limit-testing, and wave management breakdowns from Fares's official channel.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@Faresgaming500"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 shadow-sm"
          >
            <span>All YouTube Videos</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Glassmorphic Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlayVideo({
                id: video.id,
                title: video.title,
                videoUrl: `https://www.youtube.com/embed/${video.id}?autoplay=1`
              })}
              className="rounded-2xl overflow-hidden cursor-pointer group flex flex-col bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#38bdf8]/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_40px_rgba(56,189,248,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-black/60">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Glass Luxury Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/20">
                  <div className="w-13 h-13 rounded-full bg-white/20 hover:bg-[#38bdf8] text-white hover:text-black border border-white/30 hover:border-[#38bdf8] flex items-center justify-center backdrop-blur-md shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-medium text-slate-300 flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3 h-3 text-[#38bdf8]" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#38bdf8] transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                </div>

                {/* Bottom luxury link row */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Watch Gameplay</span>
                  <span className="text-[#38bdf8] group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
