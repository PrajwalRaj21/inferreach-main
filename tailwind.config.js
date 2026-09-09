/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0d10',
        'bg-panel': '#10161b',
        'border': '#212a31',
        'border-soft': '#1a2127',
        'text': '#eceff2',
        'text-muted': '#8b96a3',
        'text-dim': '#576068',
        'amber': '#ffb454',
        'amber-dim': '#b8843c',
        'teal': '#4fd1c5',
        'violet': '#b79cfa',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}