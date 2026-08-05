import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052CC', // Primary Blue (Dominant)
          light: '#3378DB',
          dark: '#003D99',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0052CC',
          600: '#0047B3',
          700: '#003D99',
          800: '#002E73',
          900: '#001F4D',
        },
        deep: {
          DEFAULT: '#0A192F', // Deep Blue (Accent/Text)
          light: '#122A4A',
          dark: '#060F1E',
        },
        accent: {
          DEFAULT: '#FF8C00', // Vibrant Orange (Action)
          light: '#FFA733',
          dark: '#E07A00',
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF8C00',
          600: '#E07A00',
        },
        clean: {
          DEFAULT: '#F4F7FC', // Clean Light (Background)
          dark: '#E8EDF5',
        },
        // Legacy aliases for existing classes
        sky: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#0052CC',
          800: '#003D99',
          900: '#0A192F',
        },
        navy: {
          DEFAULT: '#0A192F',
          light: '#0052CC',
        },
        amazon: {
          DEFAULT: '#FF8C00',
          light: '#FFA733',
          dark: '#E07A00',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F4F7FC 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF5E00 0%, #FFAA00 100%)',
        'amazon-gradient': 'linear-gradient(135deg, #FF5E00 0%, #FFAA00 100%)',
        'brand-gradient': 'linear-gradient(135deg, #0052CC 0%, #0A192F 100%)',
        'hero-gradient': 'linear-gradient(180deg, #0A192F 0%, #0D2340 60%, #122A4A 100%)',
        'results-gradient': 'linear-gradient(180deg, #0A192F 0%, #0D2340 100%)',
        'cta-section-gradient': 'linear-gradient(135deg, #0052CC 0%, #0A192F 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 82, 204, 0.10)',
        'glass-lg': '0 20px 60px rgba(0, 82, 204, 0.16)',
        'glow-orange': '0 0 40px rgba(255, 140, 0, 0.45)',
        'glow-sky': '0 0 40px rgba(0, 82, 204, 0.30)',
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
