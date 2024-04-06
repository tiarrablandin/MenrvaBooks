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
    input: {
        valid: {
            // Use the spread operator to copy existing valid colors and add "eggplant"
            colors: [
                "black",
                "white",
                "blue-gray",
                "gray",
                "brown",
                "deep-orange",
                "orange",
                "amber",
                "yellow",
                "lime",
                "light-green",
                "green",
                "teal",
                "cyan",
                "light-blue",
                "blue",
                "indigo",
                "deep-purple",
                "purple",
                "pink",
                "red",
                "eggplant",
            ]
        },
        styles: {
            base: {
                input: {
                    // Base input styles
                }
            },
            variants: {
                outlined: {
                    base: {
                        input: {
                            // Styles for the "outlined" variant
                        }
                    }
                }
            },
            // Define custom styles for inputs using the "eggplant" color
            colors: {
                eggplant: {
                    base: {
                        input: {
                            color: "text-white",
                            borderColor: "border-eggplant",
                            '&:focus': {
                                borderColor: "border-eggplant"
                            }
                        }
                    }
                }
            }
        }
    }
};