/** @type {import('tailwindcss').Config} */
const preset = require('./tailwind-preset.js');

module.exports = {
  presets: [preset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './node_modules/shadcn/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
