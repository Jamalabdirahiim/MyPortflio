/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08090A',
        surface: '#111315',
        'surface-secondary': '#181B1D',
        border: '#272A2C',
        'text-primary': '#F3F1EA',
        'text-secondary': '#9A9A94',
        accent: '#C8FF3D',
        'accent-secondary': '#A8D92F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
