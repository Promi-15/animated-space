/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
         '0%, 100%': { transform: 'translate(0, 0)' }, // Start at original position
          '25%': { transform: 'translate(-20px, -20px)' }, // Move slightly left and up
          '50%': { transform: 'translate(20px, 20px)' }, // Move right and down
          '75%': { transform: 'translate(-10px, -10px)' },
        },
      },
      animation: {
        shake: 'shake 0.700s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

