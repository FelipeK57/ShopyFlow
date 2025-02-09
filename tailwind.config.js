/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
      colors: {
        text: "#211412",
        background: "#e9edf7",
        primary: "#623c32",
        secondary: "#94c690",
        accent: "#55aa80",
      },
    },
  },
  plugins: [heroui()],
};
