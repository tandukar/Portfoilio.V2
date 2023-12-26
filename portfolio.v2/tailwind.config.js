/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                'custom': '120px', // Adjust the value as needed
            },
            height: {
                'custom': '400px', // Adjust the value as needed
            },
        },
    },
    plugins: [],
}