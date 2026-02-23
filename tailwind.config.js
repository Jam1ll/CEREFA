/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        primaryDark: "#0284c7",
        secondary: "#0284c3",
        secondaryHover: "#0ea5e7",
        text: "#4b5563",
        textDark: "#1f2937",
        background: "#f8fafc",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
