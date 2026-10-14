/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          burgundy: '#650D1B',
          maroon: '#3D0914',
          deep: '#2A0810',
          gold: '#C8A45D',
          'gold-light': '#E0C490',
          'gold-dark': '#A6843F',
          ivory: '#FFF8EB',
          cream: '#F5EBDD',
          'cream-dark': '#E8D9C4',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-scale': 'fadeInScale 1.2s ease-out forwards',
        'float-up': 'floatUp linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'seal-pulse': 'sealPulse 2.5s ease-in-out infinite',
        'flap-open': 'flapOpen 0.8s ease-in forwards',
        'card-slide': 'cardSlide 1s 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(100vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-10vh) translateX(50px) rotate(360deg)', opacity: '0' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,164,93,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200,164,93,0.6)' },
        },
        sealPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 20px rgba(200,164,93,0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 6px 30px rgba(200,164,93,0.7)' },
        },
        flapOpen: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-180deg)' },
        },
        cardSlide: {
          '0%': { transform: 'translateY(60px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
