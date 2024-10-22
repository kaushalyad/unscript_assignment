/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(261.18deg, #7839EE 0%, #0158F7 100%)",
      },
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
