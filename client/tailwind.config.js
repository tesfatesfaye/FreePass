/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
       maxHeight: {
        '0': '0',
        '100': '25rem',
        'full': '100%',
      },
      colors: {
        "p-dark":"rgb(54,54,54)",
        "s-dark":"rgb(44,44,44)",
        "custom-gray":"rgb(120, 120, 120)"
        
      }
    },
  },
  plugins: [],
};
