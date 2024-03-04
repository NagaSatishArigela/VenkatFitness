/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: "Roboto, sans-serif",
      Poppins: 'Poppins'
    },
    extend: {
      colors: {
        primary: "#090030",
        Teal: "#2F6C6D",
        gray: "#4B4B4C"
      },
    },
  },
  plugins: [],
}

