/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      "primary": "#4D5B9E",
      "secondary": "#293264",
      "white": "#FFFFFF",
      "black": "#000000",
      "lemony": "#FFFAD1",
      "baby-blue-medium": "#DEEBF8",
      "baby-blue-dark": "#DBDEF0",
      "baby-blue-light": "#F5F7FB",
      "red-danger": "#F8BCBC",
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
      "karla": ["Karla", "sans-serif"],
      "inter": ["Inter", "sans-serif"],
    },
    fontWeight: {
      "normal": "400",
      "bold": "700",
    },
    extend: {
      height: {
        "550" : "34.375rem",
      },
      width: {
        "550" : "34.375rem",
      }
    },
  },
  plugins: [],
}

