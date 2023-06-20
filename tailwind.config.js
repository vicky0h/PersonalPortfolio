const { RGBADepthPacking } = require('three')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#eff2d8",
        secondary: "#97a675",
        // tertiary: "#d6ead4",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#050816",
        // "white-200": "#eae9e7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

