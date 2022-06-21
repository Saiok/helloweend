/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#06c2ae",
          200: "#02889b",
        },
        secondary: "#ff693a",
      },
      keyframes: {
        "move-tot": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        "move-tot": "move-tot 300ms ease",
      },
    },
  },
  plugins: [],
};
