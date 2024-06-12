import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { ...colors.zinc, DEFAULT: colors.zinc[200] },
        secondary: { ...colors.neutral, DEFAULT: colors.neutral[300] },
        tertiary: { ...colors.stone, DEFAULT: colors.stone[300] },
        darkPrimary: { ...colors.slate, DEFAULT: colors.slate[800] },
        darkSecondary: { ...colors.gray, DEFAULT: colors.gray[800] },
        darkTertiary: { ...colors.neutral, DEFAULT: colors.neutral[800] },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        xs: "0.5rem",
        sm: "0.8rem",
        base: "1rem",
        lg: "1.3rem",
        xl: "1.5rem",
        "2xl": "1.8rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      screens: {
        sm: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
