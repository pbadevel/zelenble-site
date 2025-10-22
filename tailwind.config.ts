/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Используем только class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-[var(--background)]',
    'bg-[var(--navbar-bg)]',
    'text-[var(--navbar-text)]',
    'text-[var(--navbar-text-active)]',
    'text-[var(--navbar-text-hover)]',
    'bg-[var(--navbar-indicator)]',
    'bg-[var(--navbar-indicator-hover)]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}