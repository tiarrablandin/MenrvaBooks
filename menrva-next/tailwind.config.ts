import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
// const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = {
  darkMode: 'class',

  content: [
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "old-lace": "#FFF3E0ce",
        // "pink-lavender": "#E1BEE7",
        // "eggplant": "#673C4F",
        // "chinese-violet": "#827191",
        // "onyx": "#3d3d3d",
        
        "old-lace": "#fef5e5", //parchment
        "eggplant": "#632D47",
        "pink-lavender": "#ad6684", //rose
        "deep-sea": "#3c5a65",
        
        "chinese-violet": "#7B455C",
        "onyx": "#373741",
      },
      fontFamily: {
        sans: ['var(--font-advent-pro)'],
      },
    },
  },
  plugins: [],
};

const withMaterialTailwind = withMT(config)
export default withMaterialTailwind;