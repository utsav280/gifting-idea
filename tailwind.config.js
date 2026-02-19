/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 32px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: []
};
