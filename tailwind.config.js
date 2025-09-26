const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matte: {
          black: '#0D0D0F',
        },
        ghost: {
          white: '#EAEAEA',
        },
        neon: {
          turquoise: '#0FFFC0',
        },
        violet: {
          blue: '#6C63FF',
        },
        soft: {
          amber: '#FFB347',
        },
        status: {
          published: '#00FF7F',
          editing: '#0099FF',
          draft: '#A0A0A0',
        }
      },
      fontFamily: {
        header: ['Space Grotesk', ...fontFamily.sans],
        body: ['Inter', 'Sora', ...fontFamily.sans],
      },
      boxShadow: {
        neon: '0 0 16px 2px #0FFFC0, 0 0 32px 4px #6C63FF',
        violet: '0 0 8px 2px #6C63FF',
        turquoise: '0 0 8px 2px #0FFFC0',
        amber: '0 0 8px 2px #FFB347',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #6C63FF 0%, #0FFFC0 100%)',
      },
      blur: {
        glass: '16px',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s infinite',
        'flip-book': 'flipBook 1s cubic-bezier(.77,0,.18,1) infinite',
        'typing': 'typing 2s steps(20, end), blink-caret .75s step-end infinite'
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 8px 2px #0FFFC0' },
          '50%': { boxShadow: '0 0 24px 4px #0FFFC0' },
        },
        flipBook: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(20deg)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          '50%': { borderColor: 'transparent' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
