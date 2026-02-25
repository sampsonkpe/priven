/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cinzel", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        gold: "#b8965a",
        cream: "#f8f6f2",
        coffee: "#3a2a20",
      },
    },
  },
  plugins: [],
};