/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '16px': '16px', // Custom font size with a name and pixel value
        '20px': '20px',
        '48px': '48px',
        '64px': '64px', // Another custom font size
        // Add more custom font sizes as needed
      },
      colors: {
        primary: ''
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}

