/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020614', // Ultra deep Kunain-style midnight
          900: '#040b1e',
          850: '#07122b',
          800: '#0a193b',
          700: '#112550',
          border: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(7, 18, 43, 0.7)',
        },
        brand: {
          blue: '#4f8cff',
          cyan: '#38bdf8',
          viego: '#00e5a3',
          kick: '#53fc18',
          yt: '#ff0000',
        }
      },
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
        display: ['Space Grotesk', 'Onest', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.06em',
        tight: '-0.03em',
      }
    },
  },
  plugins: [],
}
