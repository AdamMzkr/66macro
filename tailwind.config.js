/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                'body': '#100D0B',
                'tLight': '#D9D9D9',
                'tDark': '#100D0B',
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
