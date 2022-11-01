/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    minWidth: {
      500: "500px",
    },
    extend: {
      colors: {
        ffBlack: "#3b3441",
        ffPurple: "#7532de",
        ffDarkPurple: "#4f0db7",
        ffLightBlue: "#127ace",
      },
    },
  },
  plugins: [],
};
