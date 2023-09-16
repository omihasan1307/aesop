/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        topGray: "#C2C2AF",
      },
      backgroundColor: {
        topGray: "#C2C2AF",
        black: "#252525",
      },
    },
  },
  plugins: [],
};
