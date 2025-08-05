/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'berlin-background': '#FAF9FE',
        'berlin-black': '#222222',
        'berlin-pink': '#f5b4cb',
        'berlin-light-blue': '#aac9e7',
        'berlin-blue': '#4f90cd',
        'berlin-light-green': '#9bcfaf',
        'berlin-green': '#00aa84',
        'berlin-yellow': '#ffe70e',
        'berlin-orange': '#f39300',
        'berlin-purple': '#9185be',
        'berlin-gray': '#e6e6e6',
        'illustration-black': '#141414',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        rise: 'rise 1.5s ease-out forwards',
        marquee: 'marquee 24s linear infinite',
      },
      fontFamily: {
        grotesk: ['"Host Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
