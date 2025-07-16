/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  // content: ["./src/components/HomepageFeatures/index.tsx"],
  theme: {
    // fontFamily: {
    // //   nunito: ['Nunito Sans', 'Arial'],
    // //   robot: ['IBMPlexMono-Regular', 'Arial'],
    // //   'robot-bold': ['IBMPlexMono-Bold', 'Arial'],
    // //   'robot-light': ['IBMPlexMono-Light', 'Arial'],
    // },
    extend: {
      colors: {
        'purple-final': '#9185BE',
        'blue-final': '#1074D5',
        'red-final': '#C10648',
        'dhub-background': '#FAF9FE',
        'dhub-black': '#222222',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 1.5s ease-out forwards',
      },
      fontFamily: {
        grotesk: ['"Host Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
