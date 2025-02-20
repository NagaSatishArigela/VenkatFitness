/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: "Roboto, sans-serif",
      Poppins: 'Poppins, sans-serif'
    },
    extend: {
      colors: {
        primary: "#090030",
        Teal: "#04879C",
        gray: "#4B4B4C"
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      }
    },
  },
  plugins: [],
}

