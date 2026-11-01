# 👑 Fares Gaming · The Ruined King Portfolio

A high-performance League of Legends creator portfolio inspired by **kunain.org**, customized from the ground up for **Fares Gaming** and his signature champion, **Viego (The Ruined King)**.

---

## ⚡ Key Highlights & Features

1. **The Ruined Blade Slash Intro Sequence (Inspired by kunain.org)**:
   - Built with high-performance **HTML5 2D Canvas procedural rendering**.
   - Cinematic sequence:
     - Atmospheric Shadow Isles radial gradient with procedural film noise overlay.
     - Swirling Black Mist / Harrowing fog simulation.
     - Spectral blade slash trailing glowing sparks across the screen.
     - Blinding impact cut revealing **FARES GAMING — THE RUINED KING**.
     - Seamless dissolve into the interactive Hero section.
     - Web Audio API synthesizer generating real-time sword slash sound effects.
     - **Replay Intro** button in the header so viewers can re-watch the cut at any time.

2. **2.5D Layered Parallax Hero Stage**:
   - Giant watermark typography behind the champion (`FARES`) with metallic bevel and mist clipping.
   - Interactive 3D mouse parallax tracking cursor coordinates with 60–120 FPS buttery depth.
   - Real-time interactive Black Mist canvas that swirls and reacts as you move your mouse.
   - Glowing ruined triangular heart crest and pulsing emerald crown.

3. **Skin Switcher & Custom Art Uploader**:
   - Instant toggle between:
     - *The Ruined King (Base)*
     - *Soul Fighter Viego*
     - *King Viego (Pre-Ruination)*
     - *EDG World Champion Viego*
   - **Upload Custom Photos**: A built-in drag & drop modal allowing Fares to upload ANY local photo, logo, or transparent cutout directly from his computer, which immediately updates the hero section live!

4. **Creator Sections**:
   - **Content Vault**: Montages, Guides, and Ranked Highlights with embedded video modal.
   - **The Ruined Arsenal**: Complete mechanical breakdown of Viego's Passive, Q, W, E, and R with combo tips from Fares.
   - **High-Elo Builds & Runes**: Season 14/15 meta items and precision rune matrix.
   - **Battlestation & Config**: Mouse DPI, in-game sensitivities, rapid-trigger keyboard, and PC specs.
   - **Community Hub**: YouTube, Twitch, Discord, and TikTok channels.

---

## 🚀 How to Run Locally

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🖼️ Adding Fares's Pictures

You have two easy ways to use Fares's custom images:

1. **In the Live Browser (Instant & No Coding)**:
   - Click the **"Custom Photos"** button in the top navigation bar or the **"Change Photo"** badge on Viego's card.
   - Drag & drop your image file or paste an image URL. It will update instantly and save to your browser's storage!

2. **In Code**:
   - Place your images in `public/` (e.g., `public/fares-hero.png`).
   - Reference `/fares-hero.png` in `src/components/HeroSection.jsx`.
