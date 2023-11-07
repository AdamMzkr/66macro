/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                'body': '#100D0B',
                'tex-color-light': '#D9D9D9',
                'tex-color-dark': '#100D0B',
                'accent-color': '#D75C03',
                'accent-color-dark': '#1E0D01',
            },
            fontFamily: {
                'mont': ["'Monstserrat'", 'sans-serif'],
                'urban': ["'Urbanist'", 'sans-serif'],
            }
        },
    },

    plugins: [],
}
