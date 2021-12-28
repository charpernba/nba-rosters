module.exports = {
  content: ["./**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      lg: "960px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

// | `< 640px`    | 1       |
// | `>= 640px`   | 2       |
// | `>= 960px3`  | 3       |
