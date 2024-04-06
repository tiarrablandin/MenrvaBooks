import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({weight: "500", subsets: ["latin"]});

export const darkTheme = {
    tab: {
        styles: {
            base: {
                tab: {
                    initial: {
                        color: "text-old-lace"
                    }
                },
                indicator: {
                    bg: "bg-chinese-violet",
                },
            }
        }
    },
    typography: {
        defaultProps: {
            className: `text-old-lace ${advent.className}`
        }
    }
};