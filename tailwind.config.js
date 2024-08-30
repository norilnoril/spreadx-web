/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: "#2C89FF",
        customDarkBlue: "#2C5E9D",
        customBorder: "#00000040",
      },
      backgroundImage: (theme) => ({
        "gradient-linear": "linear-gradient(to right, #2C89FF, #1660BE)",
      }),
      fontFamily: {
        "istok-web": ["Istok Web", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
