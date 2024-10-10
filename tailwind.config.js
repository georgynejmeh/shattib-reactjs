/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-amber-100",
    "bg-amber-600",
    "bg-sky-100",
    "bg-sky-600",
    "hover:bg-amber-700",
    "hover:bg-sky-700",
  ],
};
