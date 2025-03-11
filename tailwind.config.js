// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Make sure this is included for the app directory if using Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
