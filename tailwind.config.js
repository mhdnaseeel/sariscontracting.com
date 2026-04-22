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
          navy: '#0B1F3A',
          gold: '#D4AF37',
        },
        accent: {
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans Arabic', 'sans-serif'],
        heading: ['Montserrat', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.3' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        }
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
        ripple: 'ripple 2s infinite ease-out',
      }
    },
  },
  plugins: [],
}
