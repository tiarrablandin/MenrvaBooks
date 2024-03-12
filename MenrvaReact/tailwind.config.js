const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
