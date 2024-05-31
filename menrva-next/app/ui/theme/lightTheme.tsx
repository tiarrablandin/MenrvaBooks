import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]});

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
            className: `text-eggplant text-base ${advent.className}`
            // className: `text-eggplant text-base`
        }
    }
};