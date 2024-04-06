import { Bubbler_One } from "next/font/google";

const bubbler = Bubbler_One({weight: "400", subsets: ["latin"]});

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
            className: `text-eggplant ${bubbler.className}`
        }
    }
};