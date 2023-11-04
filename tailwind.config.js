/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                'body': '#1E0D01',
                'tex-color-light': '#D9D9D9',
                'tex-color-dark': '#100D0B',
                'accent-color': '#D75C03',
                'accent-color-dark': '#1E0D01',
            },
            fontFamily: {
                'monserrat': ["'Monstserrat'", 'sans-serif']
            }
        },
    },

    plugins: [],
}