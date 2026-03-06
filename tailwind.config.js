/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#eb477e',
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa3cb',
          400: '#ff6ba8',
          500: '#fb3d87',
          600: '#eb1b66',
          700: '#cd0d4b',
          800: '#a90f3f',
          900: '#8c1137',
        },
        'background-light': '#fdfafb',
        'background-dark': '#211116',
        'cream': '#fdf8f4',
        'soft-pink': '#fce7ef',
        pastel: {
          pink: '#FFD6E8',
          purple: '#E8D6FF',
          blue: '#D6E8FF',
          mint: '#D6FFE8',
          peach: '#FFE8D6',
        }
      },
      fontFamily: {
        display: ['Lexend', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
