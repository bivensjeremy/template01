import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
            background: "#99c7fb",
            primary: {
              DEFAULT: "#005cb6",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: '#d36d3f'
            },
            grey: '#27272A',
            focus: "#BEF264",
          },
      }
    }
  })],
}

module.exports = config;