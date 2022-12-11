/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Neue Montreal", ...defaultTheme.fontFamily.sans],
    },
    fontMetrics: {
      sans: {
        capHeight: 715,
        ascent: 958,
        descent: -242,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
    fontSize: {
      14: ["0.875rem", "1.25rem"],
      16: ["1rem", "1.5rem"],
      18: ["1.125rem", "1.75rem"],
      20: ["1.25rem", "2rem"],
      24: ["1.5rem", "2.25rem"],
      28: ["1.75rem", "2.5rem"],
      32: ["2rem", "2.5rem"],
      40: ["2.5rem", "3rem"],
      48: ["3rem", "1"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-capsize")],
};
