import React from 'react';
import { Youtube, Twitch, Disc, MessageSquare, Twitter, Flame, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';

const CHANNELS = [
  {
    name: 'YouTube',
    handle: '@FaresGaming',
    members: '150K+ Subscribers',
    color: '#ff0000',
    icon: Youtube,
    link: 'https://youtube.com',
    desc: 'High-elo montages, coaching breakdowns, and 1v9 highlights.'
  },
  {
    name: 'Twitch',
    handle: 'fares_gaming_tv',
    members: '85K+ Followers',
    color: '#9146ff',
    icon: Twitch,
    link: 'https://twitch.tv',
    desc: 'Daily Grandmaster solo queue ranked streams and viewer games.'
  },
  {
    name: 'Discord Sanctuary',
    handle: 'The Ruined Kingdom',
    members: '18,500+ Members',
    color: '#5865F2',
    icon: Disc,
    link: 'https://discord.com',
    desc: 'Free jungle coaching, community tournaments, and live alerts.'
  },
  {
    name: 'TikTok',
    handle: '@faresgaming.lol',
    members: '240K+ Followers',
    color: '#00f2fe',
    icon: MessageSquare,
    link: 'https://tiktok.com',
    desc: 'Viral mechanical clips, fast combos, and LoL patch memes.'
  }
];

export default function CommunitySocials() {
  return (
    <section id="community" className="py-24 relative bg-[#03090e] border-t border-[#00ffb3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00ffb3] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#00ffb3]" />
            <span>JOIN THE SANCTUARY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            CONNECT WITH FARES
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Be part of the fastest growing League of Legends and Viego community on the Rift.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.name}
                href={ch.link}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${ch.color}22`, border: `1px solid ${ch.color}44` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: ch.color }} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-white group-hover:text-[#00ffb3] transition-colors mb-1">
                    {ch.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block mb-2">{ch.handle}</span>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{ch.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#00ffb3]">{ch.members}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-white transition-colors">
                    Join &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
