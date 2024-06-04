import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]});

export const lightTheme = {
    tab: {
        styles: {
            base: {
                tab: {
                    initial: {
                        color: "text-old-lace"
                    }
                },
                indicator: {
                    bg: "bg-eggplant",

                },
                label: {}
            }
        }
    },
    typography: {
        styles: {
            className: `text-eggplant text-base ${advent.className}`
            // className: `text-eggplant text-base`
        }
    },
    input: {
        styles: {
            className: `${advent.className}`
        }
    }
};