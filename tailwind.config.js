/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        night: {
          50: '#e8edf5',
          100: '#c5d0e3',
          200: '#9aabc8',
          300: '#6e87ae',
          400: '#4e6e9c',
          500: '#2e558b',
          600: '#264d82',
          700: '#1b4277',
          800: '#10366b',
          900: '#020c1e',
          950: '#010810',
        },
        cyan: {
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        emerald: {
          400: '#34d399',
        },
        violet: {
          400: '#a78bfa',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'count': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% center' },
          to: { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
