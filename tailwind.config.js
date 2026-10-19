/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#FF9933',
          glow: '#FFA74D',
          dark: '#E07B12',
        },
        ember: {
          DEFAULT: '#E2552B',
          glow: '#FF6B3D',
        },
        'rose-mist': '#E8B4B8',
        gold: {
          light: '#F7E27A',
          DEFAULT: '#D4AF37',
          deep: '#8F6B14',
          glow: 'rgba(212, 175, 55, 0.45)',
        },
        maroon: {
          DEFAULT: '#4A0D0D',
          dark: '#2E0606',
          light: '#6E1414',
        },
        blood: {
          DEFAULT: '#8B1A1A',
          dark: '#5C0F0F',
          light: '#A82525',
        },
        choco: {
          DEFAULT: '#1A0F0A',
          dark: '#120905',
          light: '#281710',
        },
        indigo: {
          court: '#1C1233',
          deep: '#100921',
          royal: '#2B1A4A',
        },
        charcoal: {
          DEFAULT: '#0D0A08',
          light: '#1A1613',
          card: '#14110E',
        },
        ivory: {
          DEFAULT: '#F5ECD7',
          dark: '#D8CEA7',
          muted: '#C4BBA5',
        },
        steel: {
          DEFAULT: '#8E8A86',
          dark: '#4B4845',
          light: '#B9B5B0',
        }
      },
      fontFamily: {
        cinzelDec: ['"Cinzel Decorative"', 'Cinzel', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        yatra: ['"Yatra One"', '"Tiro Devanagari Marathi"', '"Noto Sans Devanagari"', 'serif'],
        tiro: ['"Tiro Devanagari Marathi"', '"Noto Sans Devanagari"', '"Yatra One"', 'serif'],
        devanagari: ['"Tiro Devanagari Marathi"', '"Noto Sans Devanagari"', '"Yatra One"', 'serif'],
        mukta: ['Mukta', '"Noto Sans Devanagari"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.45)',
        'saffron-glow': '0 0 30px rgba(255, 153, 51, 0.5)',
        'blood-glow': '0 0 25px rgba(139, 26, 26, 0.6)',
        'inner-dark': 'inset 0 0 15px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

