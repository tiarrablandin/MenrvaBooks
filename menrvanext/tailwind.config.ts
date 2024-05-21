import type { Config } from "tailwindcss";

import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  darkMode: 'class', //Enable class based dark mode

  content: [
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "eggplant": "#673C4F",
        "pink-lavender": "#E1BEE7",
        "old-lace": "#FFF3E0",
        "chinese-violet": "#827191",
        "onyx": "#3d3d3d",
      },
    },
  },
  plugins: [],
};
const withMaterialTailwind = withMT(config)
export default withMaterialTailwind;
