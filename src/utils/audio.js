// Web Audio API Sound Synthesizer for Fares Gaming
// Pure browser-native audio - zero external audio asset files required!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  setMuted(val) {
    this.muted = val;
  }

  isMuted() {
    return this.muted;
  }

  // Play Ruined King Zweihänder Slash - The cool original slash sound from the beginning
  playBladeSlash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. White Noise burst with fast bandpass filter sweep (blade cut sound)
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.45);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3800, t);
      filter.frequency.exponentialRampToValueAtTime(320, t + 0.35);
      filter.Q.setValueAtTime(4, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, t);
      noiseGain.gain.linearRampToValueAtTime(0.45, t + 0.04);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      whiteNoise.start(t);
      whiteNoise.stop(t + 0.45);

      // 2. Heavy Sub Bass Impact (Ruined King Heartbreaker Thud)
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, t + 0.05);
      osc.frequency.exponentialRampToValueAtTime(38, t + 0.55);

      oscGain.gain.setValueAtTime(0.01, t);
      oscGain.gain.linearRampToValueAtTime(0.4, t + 0.08);
      oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);

      osc.start(t + 0.05);
      osc.stop(t + 0.65);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  // Play Harrowing Mist Ambience / Whoosh
  playMistWhoosh() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.8);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, t);
      filter.frequency.linearRampToValueAtTime(750, t + 0.35);
      filter.frequency.exponentialRampToValueAtTime(120, t + 0.78);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.82);
    } catch (e) {}
  }
}

export const sound = new SoundEngine();
export default sound;
