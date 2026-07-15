import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#F5FAFF',
          100: '#EAF4FF',
          200: '#D6ECFF',
          300: '#AEDBFF',
          400: '#7DD3FC',
          500: '#5EC8F0',
          600: '#3AA6F0',
          700: '#0284C7',
          800: '#046198',
          900: '#0F2942',
        },
        navy: {
          DEFAULT: '#0F2942',
          light: '#1E293B',
        },
        amazon: {
          DEFAULT: '#FF9900',
          light: '#FFB347',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(180deg, #F5FAFF 0%, #EAF4FF 100%)',
        'cta-gradient': 'linear-gradient(135deg, #3AA6F0 0%, #0284C7 100%)',
        'amazon-gradient': 'linear-gradient(135deg, #FF9900 0%, #FFB347 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(56,166,240,0.15)',
        'glass-lg': '0 20px 60px rgba(56,166,240,0.20)',
        'glow-orange': '0 0 40px rgba(255,153,0,0.35)',
        'glow-sky': '0 0 40px rgba(58,166,240,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(5%, -8%) scale(1.08)' },
          '66%': { transform: 'translate(-6%, 6%) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        'aurora-slow': 'aurora 26s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
