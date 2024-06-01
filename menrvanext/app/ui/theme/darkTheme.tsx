import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]});

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
                    bg: "bg-eggplant",
                },
            }
        }
    },
    typography: {
        defaultProps: {
            className: `text-old-lace text-base`
        }
    }
};