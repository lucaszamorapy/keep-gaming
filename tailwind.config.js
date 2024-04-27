export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1220px",
        "2xl": "1220px",
      },
      colors: {
        gamingBlack300: "#161616",
        gamingBlack200: "#202020",
        gamingBlack100: "#373737",
      },
    },
  },
  plugins: [],
};
