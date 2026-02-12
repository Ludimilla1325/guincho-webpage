/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E85D04',
          'orange-light': '#F48C06',
          'orange-dark': '#C44D03',
          'orange-bg': '#FFEDE0',
          grey: '#0f0f0f',
          'grey-mid': '#404040',
          'grey-light': '#64748b',
          'grey-bg': '#f8fafc',
          'grey-bg-alt': '#f1f5f9',
        },
        whatsapp: '#25D366',
        'whatsapp-hover': '#20BD5A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(1.875rem, 5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'lead': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': 'clamp(5rem, 11vw, 7rem)',
        'section-top': 'clamp(6.5rem, 14vw, 9.5rem)',
        'section-lg': 'clamp(6rem, 14vw, 8.5rem)',
        'section-sm': 'clamp(3rem, 6vw, 4rem)',
        'section-gap': 'clamp(2rem, 4vw, 3rem)',
        'block': 'clamp(1.5rem, 3vw, 2rem)',
        '18': '4.5rem',
      },
      minHeight: {
        'touch': '48px',
      },
      maxWidth: {
        'content': '72rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 4px 10px -4px rgb(0 0 0 / 0.04)',
        'button': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'button-hover': '0 4px 12px -2px rgb(232 93 4 / 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
