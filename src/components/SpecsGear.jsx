import React from 'react';
import { Monitor, Cpu, Mouse, Sliders, Headphones, Keyboard } from 'lucide-react';

const SETTINGS = [
  { label: 'Mouse DPI', value: '800 DPI' },
  { label: 'LoL Mouse Speed', value: '50' },
  { label: 'Camera Move Speed', value: '55' },
  { label: 'Cast Mode', value: 'Quick Cast (No Indicator)' },
  { label: 'Resolution', value: '2560 x 1440 @ 240Hz' },
  { label: 'Target Champions Only', value: 'Toggle (`~`)' }
];

const HARDWARE = [
  { icon: Monitor, name: 'Monitor', detail: 'Alienware 27" Fast IPS 240Hz' },
  { icon: Mouse, name: 'Gaming Mouse', detail: 'Logitech G Pro X Superlight 2' },
  { icon: Keyboard, name: 'Keyboard', detail: 'Wooting 60HE (Rapid Trigger)' },
  { icon: Headphones, name: 'Audio / Headset', detail: 'HyperX Cloud III Wireless' },
  { icon: Cpu, name: 'Battle Station PC', detail: 'Ryzen 7 7800X3D · RTX 4080 Super · 32GB DDR5' }
];

export default function SpecsGear() {
  return (
    <section id="specs" className="py-24 relative bg-[#040d14] border-t border-[#00ffb3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00ffb3] uppercase mb-3">
            <Sliders className="w-4 h-4 text-[#00ffb3]" />
            <span>CREATOR CONFIGURATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            IN-GAME SETTINGS & BATTLESTATION
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Every keybinding, sensitivity curve, and hardware piece calibrated for maximum mechanical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* In-Game Settings */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ffb3]" />
              League of Legends Config
            </h3>

            <div className="glass-panel rounded-2xl p-6 border border-[#00ffb3]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SETTINGS.map((s) => (
                <div key={s.label} className="p-3.5 rounded-xl bg-[#061822]/80 border border-slate-800">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    {s.label}
                  </span>
                  <span className="text-base font-extrabold text-[#00ffb3] font-mono">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & Peripherals */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38e1ff]" />
              Hardware & Peripherals
            </h3>

            <div className="glass-panel rounded-2xl p-6 border border-[#00ffb3]/20 flex flex-col gap-3">
              {HARDWARE.map((hw) => {
                const IconComponent = hw.icon;
                return (
                  <div
                    key={hw.name}
                    className="p-3.5 rounded-xl bg-[#061822]/80 border border-slate-800 flex items-center gap-4 hover:border-[#00ffb3]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0a2331] text-[#00ffb3] flex items-center justify-center shrink-0 border border-[#00ffb3]/30">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 block">
                        {hw.name}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white">
                        {hw.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
