/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            source: ["Source Sans Pro", "sans-serif"],
            lato: ["Lato", "sans-serif"],
        },
        container: {
            center: true,
        },
        screens: {
            xl: { max: "1399px" },

            lg: { max: "1199px" },

            md: { max: "991px" },

            sm: { max: "767px" },

            xs: { max: "576px" },
        },
        extend: {
            width: {
                nine: "90%",
            },
            colors: {
                light: "#eee",
                dark: "#444",
                "dark-50": "#00000050",
                "light-50": "#ffffff50",
                main: "#1e252d",
                secondary: "#f86d32",
                third: "#facf0f",
            },
        },
    },
    plugins: [],
};
