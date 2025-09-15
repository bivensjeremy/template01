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
          // Base
          background: "#f9fafb",   // Lightest background (gray-50)
          foreground: "#111827",   // Primary text (gray-900)

          // Primary Action (e.g., buttons, links)
          primary: {
            DEFAULT: "#374151",    // Strong neutral (gray-700)
            foreground: "#ffffff", // White text on dark button
          },

          // Secondary Action (e.g., subtle buttons, accents)
          secondary: {
            DEFAULT: "#6b7280",    // Muted neutral (gray-500)
            foreground: "#ffffff", // White text on secondary
          },

          // Tertiary Accent (e.g., highlights, tags, icons)
          accent: {
            DEFAULT: "#d1d5db",    // Light neutral (gray-300)
            foreground: "#111827", // Dark text for contrast
          },
        }
      },
      dark: {
        colors: {
          foreground: "#2a2542",     // Deep slate gray — strong for text and UI contrast
          background: "#8ecaf9",     // Soft sky blue — light, inviting, and spacious
          primary: {
            DEFAULT: "#1765c0",      // Rich royal blue — bold but not overpowering
            foreground: "#ffffff",   // White text for clarity
          },
          secondary: {
            DEFAULT: "#e76f51",      // Warm burnt orange — energetic and grounded
            foreground: "#ffffff",   // White text for contrast
          },
          accent: "#f4a261",         // Golden amber — great for highlights, tags, or icons
        }
      }
    }
  })],
}

module.exports = config;