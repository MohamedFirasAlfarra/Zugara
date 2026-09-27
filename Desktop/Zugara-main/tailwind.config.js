/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8fa',
          100: '#dbeef2',
          200: '#b9dee5',
          300: '#88c4d1',
          400: '#4da3b7',
          500: '#228b9f',
          600: '#1a6e7e',
          700: '#134e5b',
          800: '#0e3b43',
          900: '#0a2d34',
          950: '#07171a',
        },
        accent: {
          50: '#fff8f1',
          100: '#feecd8',
          200: '#fcd5b0',
          300: '#fab77e',
          400: '#f69147',
          500: '#e77a28',
          600: '#d15f1b',
          700: '#ab4518',
          800: '#88381b',
          900: '#6f3019',
        },
        cream: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e9dfd3',
          300: '#dccebf',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse-slow': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shine-sweep': {
          '0%': { transform: 'translateX(-100%) skewX(-20deg)' },
          '100%': { transform: 'translateX(350%) skewX(-20deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 28s linear infinite',
        'spin-reverse-slow': 'spin-reverse-slow 36s linear infinite',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
