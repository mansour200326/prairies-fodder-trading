import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#0C1C13',
        green: {
          900: '#102A1C',
          800: '#163A29',
          700: '#1F4D38',
          600: '#2C5E45',
        },
        gold: {
          DEFAULT: '#CBA24E',
          300: '#E0C079',
          100: '#F2E5C3',
        },
        cream: '#FAF3E7',
        ivory: '#FFFCF5',
        wheat: '#C9A86B',
        ink: '#172419',
        muted: '#5E6D61',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1200px',
      },
      boxShadow: {
        soft: '0 26px 70px -30px rgba(12,28,19,.55)',
        pill: '0 8px 22px -14px rgba(12,28,19,.5)',
      },
      borderColor: {
        line: 'rgba(23,36,25,.12)',
        'line-d': 'rgba(224,192,121,.18)',
      },
      backgroundColor: {
        'gold-soft': 'rgba(203,162,78,.15)',
      },
      keyframes: {
        sunPulse: {
          '0%,100%': { opacity: '.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        scrollLine: {
          '0%': {
            transform: 'scaleY(.3)',
            transformOrigin: 'top',
            opacity: '.4',
          },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
          '100%': {
            transform: 'scaleY(.3)',
            transformOrigin: 'bottom',
            opacity: '.4',
          },
        },
        sway: {
          '0%,100%': { transform: 'rotate(-2.2deg)' },
          '50%': { transform: 'rotate(2.2deg)' },
        },
        flow: {
          to: { strokeDashoffset: '-24' },
        },
        pulseRing: {
          '0%': { r: '9', opacity: '.5' },
          '100%': { r: '26', opacity: '0' },
        },
        rise: {
          to: { opacity: '1', transform: 'none' },
        },
        pop: {
          from: { transform: 'scale(.4)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        sunPulse: 'sunPulse 8s ease-in-out infinite',
        scrollLine: 'scrollLine 2s ease-in-out infinite',
        flow: 'flow 3s linear infinite',
        pulseRing: 'pulseRing 2.4s ease-out infinite',
        pop: 'pop .5s cubic-bezier(.2,1.4,.4,1)',
      },
    },
  },
  plugins: [],
};

export default config;
