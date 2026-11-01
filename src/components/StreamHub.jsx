import React from 'react';
import { Tv, Youtube, MessageSquare, ExternalLink, Clock, ShieldCheck, Flame } from 'lucide-react';

export default function StreamHub() {
  return (
    <section id="stream" className="py-24 relative bg-[#020614] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#53fc18] uppercase block mb-2">
            DAILY LIVE STREAMS & COMMUNITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            STREAM SCHEDULE & CHANNELS
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Tune in live for night-owl solo queue grind, live wave analysis, viewer coaching, and high-elo limit testing.
          </p>
        </div>

        {/* 2-Column Hub: Kick Live Card + Socials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Kick Feature Card */}
          <div className="lg:col-span-7 kunain-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#53fc18]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#051c12] border border-[#53fc18]/30">
                  <span className="w-2 h-2 rounded-full bg-[#53fc18] animate-ping" />
                  <span className="text-[11px] font-mono font-bold text-[#53fc18] uppercase">
                    MAIN STREAM · KICK.COM
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#53fc18]" />
                  <span>10:00 PM – 08:00 AM Daily</span>
                </span>
              </div>

              {/* Banner / Streamer Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#53fc18]/30 shrink-0">
                  <img
                    src="/assets/fares-kick-avatar.webp"
                    alt="Fares Kick Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/fares-avatar.jpg';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white font-display">
                    FaresGaming500
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block">
                    1,750+ Followers · League of Legends Category
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "Streaming daily high elo ranked. Come hang out, ask questions about jungle pathing or match-ups, and watch real-time outplays."
              </p>
            </div>

            {/* Kick Action Button */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400">
                Direct Kick Channel: <strong className="text-white">kick.com/faresgaming500</strong>
              </div>

              <a
                href="https://kick.com/faresgaming500"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#020614] bg-[#53fc18] hover:bg-[#6aff36] transition-all shadow-[0_0_20px_rgba(83,252,24,0.3)]"
              >
                <Tv className="w-4 h-4 fill-current" />
                <span>Open Kick Stream</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

          {/* Social Channels Side */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* YouTube Channel Card */}
            <a
              href="https://www.youtube.com/@Faresgaming500"
              target="_blank"
              rel="noreferrer"
              className="kunain-card p-6 rounded-2xl flex items-center justify-between group hover:border-[#ff0000]/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center shrink-0">
                  <Youtube className="w-6 h-6 text-red-500 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white group-hover:text-[#38bdf8] transition-colors">
                    YouTube Guides
                  </h4>
                  <span className="text-xs font-mono text-slate-400">@Faresgaming500</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* TikTok Card */}
            <a
              href="https://www.tiktok.com/@faresgaming500"
              target="_blank"
              rel="noreferrer"
              className="kunain-card p-6 rounded-2xl flex items-center justify-between group hover:border-[#00f2fe]/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#00f2fe]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white group-hover:text-[#38bdf8] transition-colors">
                    TikTok Shorts
                  </h4>
                  <span className="text-xs font-mono text-slate-400">@faresgaming500</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* League of Legends Account Card */}
            <div className="kunain-card p-6 rounded-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] font-bold">
                  Summoner Profile
                </span>
                <span className="text-[10px] font-mono text-slate-400">EUW Server</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#07193f] flex items-center justify-center border border-white/10 text-white font-bold font-mono text-xs">
                  GM
                </div>
                <div>
                  <span className="font-extrabold text-white text-sm block">Master Tier · Peak Grandmaster</span>
                  <span className="text-xs font-mono text-slate-400">Aggressive carry jungle & macro pathing</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
