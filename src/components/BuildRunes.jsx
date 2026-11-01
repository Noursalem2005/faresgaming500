import React from 'react';
import { ShieldCheck, Crosshair, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

const CORE_ITEMS = [
  {
    name: 'Kraken Slayer',
    role: 'Primary DPS Core',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/6672.png',
    stat: '+50 AD · +40% AS · +7% MS',
    passive: 'Bring It Down: Every third attack deals escalating physical damage.'
  },
  {
    name: 'Trinity Force',
    role: 'Burst & Duelling',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/3078.png',
    stat: '+36 AD · +33% AS · +300 HP · +15 AH',
    passive: 'Spellblade: 200% Base AD bonus damage after casting Q/W/E/R.'
  },
  {
    name: 'Blade of the Ruined King',
    role: 'Signature Item',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/3153.png',
    stat: '+50 AD · +25% AS · +10% Lifesteal',
    passive: 'Mists Edge: Basic attacks deal 10% target current health damage.'
  },
  {
    name: 'Sundered Sky',
    role: 'Teamfight Survivability',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/3071.png',
    stat: '+45 AD · +450 HP · +15 AH',
    passive: 'Lightshield Strike: Critical strike + massive health restoration on champion hit.'
  }
];

const RUNES = [
  { tree: 'PRECISION', name: 'Conqueror', note: 'Essential for stacking AD and extended fight healing.' },
  { tree: 'PRECISION', name: 'Triumph', note: 'Heal 10% max health on kill. Synergizes with passive possession.' },
  { tree: 'PRECISION', name: 'Legend: Alacrity', note: 'Provides crucial bonus Attack Speed for fast auto-cancels.' },
  { tree: 'PRECISION', name: 'Coup de Grace', note: 'Deals 8% more damage to champions below 40% health.' },
  { tree: 'INSPIRATION', name: 'Magical Footwear', note: 'Free boots with +10 extra Movement Speed at 12 minutes.' },
  { tree: 'INSPIRATION', name: 'Cosmic Insight', note: 'Reduces Smite and Flash cooldowns for jungle objectives.' }
];

export default function BuildRunes() {
  return (
    <section id="builds" className="py-24 relative bg-[#03090e] border-t border-[#00ffb3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00ffb3] uppercase mb-3">
            <Crosshair className="w-4 h-4 text-[#00ffb3]" />
            <span>SEASON 14/15 META</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            HIGH-ELO BUILD & RUNES
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            The exact equipment and rune optimization Fares uses to climb Grandmaster on EUW.
          </p>
        </div>

        {/* 2 Columns: Items + Runes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Core Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2 font-display">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ffb3]" />
              Core Item Build Order
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_ITEMS.map((item, idx) => (
                <div
                  key={item.name}
                  className="glass-panel glass-panel-hover p-4 rounded-2xl flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#00ffb3]/30 shrink-0">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute top-0 left-0 bg-[#00ffb3] text-[#03090e] text-[10px] font-mono font-black px-1 rounded-br">
                        #{idx + 1}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#00ffb3] block tracking-wider">
                        {item.role}
                      </span>
                      <h4 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                        {item.name}
                      </h4>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-xs text-slate-300 font-mono mb-1">{item.stat}</p>
                    <p className="text-[11px] text-slate-400 leading-snug">{item.passive}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Runes Setup */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2 font-display">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38e1ff]" />
              Dominance & Precision Runes
            </h3>

            <div className="glass-panel rounded-2xl p-5 border border-[#00ffb3]/20 flex flex-col gap-3">
              {RUNES.map((r) => (
                <div
                  key={r.name}
                  className="p-3 rounded-xl bg-[#061822]/80 border border-slate-800/80 flex items-start gap-3 hover:border-[#00ffb3]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00ffb3] shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{r.name}</span>
                      <span className="text-[9px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {r.tree}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
