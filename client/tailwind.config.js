/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        kosugi: ["Kosugi Maru", "sans-serif"],
      },
    },
  },
  plugins: [],
};
