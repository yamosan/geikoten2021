const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          10: "#D3D977",
          20: "#BDCF72",
          30: "#A7C46C",
          40: "#91BA67",
          50: "#7CB061",
          60: "#66A65C",
          70: "#509B56",
          80: "#3A9151",
        },
        sky: "#DAF6FF",
        brown: "#353333",
        lightBrown: "#504746",
        gray: "#BFBFBF",
        lightGray: "#F2F2F2",
        white: "#FFFFFF",

        menuBg: "rgba(80, 71, 70, 0.9)",
        // aliases
        bg: "#F2F2F2", // lightGray
        text: "#504746", // lightBrown
      },
      fontSize: {
        xxs: ".625rem", // 10px
      },
      fontFamily: {
        sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
        genuine: ["Genuine", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
