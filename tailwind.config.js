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
    extend: {
      height: {
        '550px' : '32rem',
      },
      width: {
        '550px' : '32rem',
      }
    },
  },
  plugins: [],
}

