import React, { useState } from 'react';
import { Swords, Zap, Wind, Skull, Crown, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

const ABILITIES = [
  {
    key: 'P',
    name: "Sovereign's Domination",
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/passive/Viego_Passive.png',
    type: 'PASSIVE',
    desc: 'Enemy champions that die within 3 seconds of being damaged by Viego become wraiths. Viego can possess them to heal, gain their items, attacks, and non-ultimate abilities, plus a free cast of Heartbreaker.',
    tip: 'Always possess the fed enemy carry or champions with hard crowd control to chain invulnerability and resets!'
  },
  {
    key: 'Q',
    name: 'Blade of the Ruined King',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/ViegoQ.png',
    type: 'PRIMARY DAMAGE',
    desc: 'Passive: Viego attacks deal percent current health bonus damage and apply a double-strike mark. Active: Thrusts his spectral Zweihänder forward, damaging all enemies struck.',
    tip: 'Cancel your basic attack recovery animation immediately with Q to burst targets down instantaneously.'
  },
  {
    key: 'W',
    name: 'Spectral Maw',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/ViegoW.png',
    type: 'STUN & GAP CLOSE',
    desc: 'Viego charges and then dashes forward, hurling a blast of mist that stuns and damages the first enemy hit. Stun duration and mist distance increase with charge time.',
    tip: 'You can hide the W charging animation inside the E mist wall to surprise enemies with zero reaction time!'
  },
  {
    key: 'E',
    name: 'Harrowed Path',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/ViegoE.png',
    type: 'CAMOUFLAGE & SPEED',
    desc: 'Viego commands a wave of Black Mist to spread around target terrain. While inside the mist, Viego gains Camouflage, bonus Attack Speed, and Movement Speed.',
    tip: 'Always hug thick jungle walls when casting E to create massive mist highways for ganks and disengages.'
  },
  {
    key: 'R',
    name: 'Heartbreaker',
    icon: 'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/ViegoR.png',
    type: 'EXECUTE ULTIMATE',
    desc: 'Viego teleports to a target location and strikes the lowest health champion in range, dealing massive missing health damage and knocking back other nearby enemies.',
    tip: 'Save R for the execute or to jump over walls. Every soul possession resets R for continuous teamfight wipes!'
  }
];

export default function ViegoArsenal() {
  const [selectedAbility, setSelectedAbility] = useState(ABILITIES[0]);

  return (
    <section id="arsenal" className="py-24 relative bg-[#040d14] border-t border-[#00ffb3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00ffb3] uppercase mb-3">
            <Crown className="w-4 h-4 text-[#00ffb3]" />
            <span>CHAMPION MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            THE RUINED ARSENAL
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Master every spell, animation cancel, and possession mechanic with Fares's mechanical breakdown.
          </p>
        </div>

        {/* Ability Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {ABILITIES.map((ability) => {
            const active = selectedAbility.key === ability.key;
            return (
              <button
                key={ability.key}
                onClick={() => {
                  sound.playClick();
                  setSelectedAbility(ability);
                }}
                className={`relative flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  active
                    ? 'bg-[#00ffb3] text-[#03090e] shadow-[0_0_25px_rgba(0,255,179,0.5)] transform -translate-y-1'
                    : 'bg-[#071924] text-slate-300 hover:text-white hover:bg-[#0b2738] border border-[#00ffb3]/20'
                }`}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-black/40">
                  <img
                    src={ability.icon}
                    alt={ability.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 px-1.5 py-0.5 rounded-tl font-mono font-black text-[10px] ${
                    active ? 'bg-[#03090e] text-[#00ffb3]' : 'bg-black/90 text-white'
                  }`}>
                    {ability.key}
                  </div>
                </div>

                <div className="text-left pr-2">
                  <span className="block text-[10px] uppercase font-mono tracking-wider opacity-80">
                    {ability.type}
                  </span>
                  <span className="block font-bold text-sm sm:text-base leading-tight">
                    {ability.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Ability Detail Panel */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#00ffb3]/30 max-w-4xl mx-auto shadow-[0_20px_50px_rgba(0,255,179,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffb3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#00ffb3] shadow-[0_0_20px_#00ffb3] shrink-0">
              <img
                src={selectedAbility.icon}
                alt={selectedAbility.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#00ffb3] text-[#03090e]">
                  KEY: [{selectedAbility.key}]
                </span>
                <span className="text-xs font-mono tracking-widest text-[#38e1ff] uppercase">
                  {selectedAbility.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {selectedAbility.name}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedAbility.desc}
              </p>

              {/* Fares Pro Tip Card */}
              <div className="p-4 rounded-xl bg-[#061822] border-l-4 border-[#00ffb3] flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#00ffb3] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-[#00ffb3] uppercase tracking-wider block mb-1">
                    Fares Gaming Secret Tip:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 italic">
                    "{selectedAbility.tip}"
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
