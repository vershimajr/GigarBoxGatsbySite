module.exports = {
    theme: {
        extend: {
            colors: {
                custom: {
                    "black-70": "rgba(0,0,0,0.7)",
                },
                gold: "#ffc000",
                'gold-hover': "#e0a800",
                'gold-active': "#d39e00",
                info: "#17a2b8",
                'info-hover': "#117a8b",
                'info-active': "#117a8b",
                darkgray: "#212529",
                darkgray2: "#343a40",
                bluegray: "#44546A",
                navyblue: "#051927",
                muted: "#4e555a",
                // muted: "#6c757d", //Made darker due to Lighthouse accessibility score
                lightgray: "#f8f9fa",
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
                '139': '36rem',
                '150': '40rem',
            },
            fontFamily: {
                lato: [
                    "Lato",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
            },
        },
    },
    variants: {},
    plugins: [],
}
