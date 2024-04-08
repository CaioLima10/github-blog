/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Nunito"],
      sans: ["ui-sans-serif", "system-ui"],
      body: ['"Open Sans"'],
    },
    colors: {
      profile: "#0B1B2B",
      brandblue: "#3294F8",
      textbase: "#E7EDF4",
      textdescribe: "#AFC2D4",
      icon: "#3A536B",
    },
    extend: {},
  },
  plugins: [],
};
