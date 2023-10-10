/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff3811",
        "primary-hover": "#ff6546",
        "secondary": "#006173",
        "secondary-hover": "#00829a",
      },
    },
  },
  plugins: [],
}
