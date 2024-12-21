/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10%)" },
        },
        moveY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(10%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
        load: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0" },
        },


        mountainFloat: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-80px)',
          }
        }


      },
      animation: {
        scroll: "scroll 20s linear infinite",
        moveX: "moveX 2s infinite alternate ease-in-out",
        moveY: "moveY 2s infinite alternate ease-in-out",
        load: "load 1s linear",
        mountainFloat: 'mountainFloat 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
