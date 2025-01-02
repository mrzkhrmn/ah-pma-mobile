/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        inter: ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-light": ["Inter-Light", "sans-serif"],
        "inter-medium": ["Inter-Medium", "sans-serif"],
        "inter-semibold": ["Inter-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
