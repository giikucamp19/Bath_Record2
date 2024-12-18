/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Home.jsx", // Tailwindが適用されるファイルを指定
    "./src/components/Notice.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

