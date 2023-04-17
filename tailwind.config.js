/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        facebook: {
          50: '#F5F7FA',
          100: '#E1E8F0',
          200: '#CBD5E1',
          300: '#9BAEC4',
          400: '#7087A6',
          500: '#3B5998',
          600: '#2D4368',
          700: '#1A2A48',
          800: '#0D1B2A',
          900: '#091524',
        },
        twitter: {
          50: '#F5F8FA',
          100: '#E1EBEE',
          200: '#C3D6DC',
          300: '#94B9CE',
          400: '#4D9FBA',
          500: '#1DA1F2',
          600: '#1A7A8B',
          700: '#176570',
          800: '#14495A',
          900: '#103E4C',
        },
        github: {
          50: '#F6FBFF',
          100: '#E3F2FF',
          200: '#BEE2FF',
          300: '#8CC2FF',
          400: '#529BFF',
          500: '#0366D6',
          600: '#0047AB',
          700: '#02303A',
          800: '#002D72',
          900: '#001429',
        },
      }
    },
  },
  plugins: [require("daisyui")],
}