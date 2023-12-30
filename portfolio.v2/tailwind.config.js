/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                'custom': '1000px', // Adjust the value as needed
                'custom1': '550px', // Adjust the value as needed
            },
            height: {
                'custom': '400px', // Adjust the value as needed
            },
            textColor: {
                'custom-beige1': '#dace90',
                'custom-beige2': '#dace62',
            },
            backgroundColor: {
                'custom-beige1': '#dace90',
                'custom-beige2': '#dace62',
            },
        },
    },
    plugins: [],
}