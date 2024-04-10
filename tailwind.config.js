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
      baseinput: "#040F1A",
      borderColor: "#1C2F41",
      placeholderColor: "#3A536B",
      basetime: "#7B96B2",
      postColor: "#112131",
    },
    extend: {},
  },
  plugins: [],
};
