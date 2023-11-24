/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      colors: {
        pbd:"rgb(54,54,54)",
        pbcd:"rgb(44,44,44)",
        
      }
    },
  },
  plugins: [],
};
