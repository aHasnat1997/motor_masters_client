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
      animation: {
        imgBlur: 'imgBlur 5s linear infinite',
        textSlid: 'textSlid 5s linear infinite',
        slideTop: 'slideFromTop 5s linear infinite'
      },
      keyframes: {
        imgBlur: {
          '0%, 100%': { filter: 'blur(8px)' },
          '20%': { filter: 'blur(0px)' },
          '80%': { filter: 'blur(0px)' },
        },
        textSlid: {
          '0%': {
            transform: 'translateX(-15rem)',
            opacity: '0'
          },
          '20%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
          '80%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateX(50rem)',
            opacity: '0'
          }
        }
      },
      slideFromTop: {
        '0%': {
          transform: 'translateY(15rem)',
          opacity: '0'
        },
        '50%': {
          transform: 'translateY(7.5rem)',
          opacity: '0.5'
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1'
        }
      }
    },
  },
  plugins: [],
}
