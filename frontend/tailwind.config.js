/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',   // blue
        secondary: '#ff8c00', // orange
        tertiary: '#ffc107',  // amber
      },
    },
  },
  plugins: [],
}


