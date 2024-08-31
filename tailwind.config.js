/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textColor1: "#4D4D4D",
        textColor2: "#949494",
        textColor3: "#2D425D",
        textColor4: "#5A769B",
        customBlue: "#2C89FF",
        customDarkBlue: "#2C5E9D",
        customGray: "#939393",
        customBorder1: "#00000040",
        customBorder2: "#FFFFFF80",
        customBorder3: "#74777E",
        customBorder4: "#F1F5FA",
      },
      backgroundImage: (theme) => ({
        "gradient-linear": "linear-gradient(to right, #1660BE, #2C89FF)",
        "gradient-linear2": "linear-gradient(to right, #013576, #2C5E9D)",
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
