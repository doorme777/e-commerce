/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'lg': '870px',  // Tu punto de corte personalizado
    },
  },
  plugins: [],
};
