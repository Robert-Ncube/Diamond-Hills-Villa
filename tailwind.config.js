/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#2ecc71",
        danger: "#e74c3c",
        gold: "#FFD700",
        slategrab: "linear-gradient(0deg, #1e293b 8%, #ffffff 56%)",
      },
      spacing: {},
      fontFamily: {
        headfont: "'NewAmsterdam', sans-serif",
      },
    },
  },
  plugins: [],
};
