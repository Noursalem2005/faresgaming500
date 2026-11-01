import React, { useState } from 'react';
import { Swords, Shield, Zap, Sparkles, Target, Award } from 'lucide-react';

const CHAMPIONS = [
  {
    id: 'viego',
    name: 'Viego',
    title: 'The Ruined King',
    role: 'Primary / Signature Pick',
    desc: 'Unmatched 1v9 teamfight resets. Fares masters the possession mechanics to steal enemy champion kits and turn lost fights into clean wipes.',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg',
    stats: { tier: 'SIGNATURE S+', style: 'High Tempo 1v9', elo: 'Grandmaster / Master' },
    isMain: true
  },
  {
    id: 'leesin',
    name: 'Lee Sin',
    title: 'The Blind Monk',
    role: 'Early Game Playmaker',
    desc: 'Aggressive jungle invades, fast clearing, and surgical InSec dragon/baron kicks to shut down enemy carries.',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
    stats: { tier: 'A+ TIER', style: 'Invade & Gank', elo: 'High Elo' },
    isMain: false
  },
  {
    id: 'shaco',
    name: 'Shaco',
    title: 'The Demon Jester',
    role: 'Infiltration & Mindgames',
    desc: 'Psychological warfare in high elo. Deep stealth boxes, split pushing, and backline assassination.',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg',
    stats: { tier: 'A TIER', style: 'Assassin Carry', elo: 'High Elo' },
    isMain: false
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    title: 'The Eternal Nightmare',
    role: 'Global Threat & Isolation',
    desc: 'Paranoia ultimate targeting isolated AD carries and creating lethal side-lane collapses.',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg',
    stats: { tier: 'A TIER', style: 'Global Dive', elo: 'Master Tier' },
    isMain: false
  },
  {
    id: 'ambessa',
    name: 'Ambessa / Flex',
    title: 'Matriarch of War',
    role: 'Top / Flex Adaptability',
    desc: 'Versatile champion mastery across solo lanes. Adapting counter-picks (Varus Top vs Jax, Briar, Kog\'Maw) to secure LP.',
    splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_0.jpg',
    stats: { tier: 'FLEX', style: 'Counter-Pick', elo: 'High Elo' },
    isMain: false
  }
];

export default function ChampionPool() {
  const [selectedChamp, setSelectedChamp] = useState(CHAMPIONS[0]);

  return (
    <section id="champions" className="py-24 relative bg-[#03091c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#4f8cff] uppercase block mb-2">
            VERSATILE HIGH-ELO POOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            CHAMPION ARSENAL
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            While <strong className="text-[#00e5a3]">Viego</strong> is Fares's signature identity, his Master tier pool commands aggressive playmakers, assassin infiltrators, and flexible counter-picks.
          </p>
        </div>

        {/* Champion Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {CHAMPIONS.map((c) => {
            const active = selectedChamp.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedChamp(c)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  active
                    ? 'bg-[#4f8cff] text-white shadow-md transform -translate-y-0.5'
                    : 'bg-[#071738] text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                {c.isMain && <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a3]" />}
                <span>{c.name}</span>
                {c.isMain && <span className="text-[10px] text-[#00e5a3] font-mono">★</span>}
              </button>
            );
          })}
        </div>

        {/* Selected Champion Card Display */}
        <div className="kunain-card rounded-3xl overflow-hidden max-w-4xl mx-auto border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Splash Art Preview */}
            <div className="md:col-span-6 relative aspect-[16/11] md:aspect-auto md:h-full overflow-hidden bg-black">
              <img
                src={selectedChamp.splash}
                alt={selectedChamp.name}
                className="w-full h-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#07122b]/90 md:to-[#07122b]" />
            </div>

            {/* Description & Stats */}
            <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#4f8cff]/20 text-[#38bdf8] border border-[#4f8cff]/30">
                    {selectedChamp.stats.tier}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedChamp.role}
                  </span>
                </div>

                <h3 className="text-3xl font-black uppercase text-white font-display mb-1">
                  {selectedChamp.name}
                </h3>
                <span className="text-xs font-mono text-slate-400 block mb-4 italic">
                  {selectedChamp.title}
                </span>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedChamp.desc}
                </p>
              </div>

              {/* Stat Strip */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-2.5 rounded-lg bg-[#040b1e]">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Playstyle</span>
                  <span className="text-xs font-bold text-white">{selectedChamp.stats.style}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#040b1e]">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Bracket</span>
                  <span className="text-xs font-bold text-[#38bdf8]">{selectedChamp.stats.elo}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
