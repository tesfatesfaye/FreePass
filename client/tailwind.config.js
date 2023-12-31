import  { blackA, mauve, violet } from "@radix-ui/colors"
/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      rotate: {
        270: "270deg",
      },
      maxHeight: {
        0: "0",
        100: "25rem",
        full: "100%",
      },
      colors: {
        "p-dark": "rgb(40,40,40)",
        "s-dark": "rgb(30,30,30)",
        "t-dark": "rgb(60,60,60)",
        "font-dark": "rgb(255, 255, 255)",
        "font-selected-dark": "rgb(255, 255, 225)",
        "custom-gray": "rgb(120, 120, 120)",
        ...blackA,
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [],
};
