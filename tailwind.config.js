/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#5231FA",
        secondary: "#008751",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
