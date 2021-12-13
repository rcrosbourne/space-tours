const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0B0D17",
      secondary: "#D0D6F9",
      tertiary: "#616476",
      quaternary: "#383B4B",
      white: "#FFFFFF",
      black: "#000000",
      backdrop: "hsla(0, 0%, 100%, 0.04)",
    },
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow", "sans-serif"],
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
    },
    backdropBlur: {
      "3xl": "81.5485px",
    },
  },

  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
