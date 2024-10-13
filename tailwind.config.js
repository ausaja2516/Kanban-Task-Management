/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clrPurple: "#625fc7",
      },
      fontFamily: {
        Jakrta: "Plus Jakarta Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
