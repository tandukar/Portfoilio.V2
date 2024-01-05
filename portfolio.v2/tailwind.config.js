/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                'custom': '1000px',
                'custom1': '530px',
                'custom2': '460px',
            },
            height: {
                'custom': '400px',
                'custom1': '700px',
            },
            textColor: {
                'custom-beige1': '#dace90',
                'custom-beige2': '#dace62',
            },
            backgroundColor: {
                'custom-beige1': '#dace90',
                'custom-beige2': '#dace62',
                'custom-navy': '#0a192f',
            },
        },
    },
    plugins: [],
}