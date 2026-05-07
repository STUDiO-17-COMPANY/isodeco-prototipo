import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FCF4EE',
          100: '#F8E5D6',
          200: '#F0C7A8',
          300: '#E5A57C',
          400: '#DA8A60',
          500: '#D17A51',
          600: '#B8643F',
          700: '#964F32',
          800: '#723D27',
          900: '#4F2A1B',
          950: '#2E180F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
