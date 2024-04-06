import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({weight: "500", subsets: ["latin"]});

export const lightTheme = {
    tab: {
        styles: {
            base: {
                tab: {
                    initial: {
                        color: "text-white"
                    }
                },
                indicator: {
                    bg: "bg-eggplant",
                },
            }
        }
    },
    typography: {
        defaultProps: {
            className: `text-eggplant ${advent.className}`
        }
    }
};