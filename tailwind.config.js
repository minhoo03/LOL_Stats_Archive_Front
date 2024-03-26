const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    safeList: [],
    // https://stackoverflow.com/questions/64557697/tailwindcss-not-working-in-create-react-app
    // App.tsx의 경우, vue나 js 확장자가 아니었기에 인식을 못하였음.
    // content: ["./index.html", "./src/**/*.{vue,js}"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
