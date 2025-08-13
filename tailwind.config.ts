import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#22d3ee',
          500: '#6366f1',
        },
        surface: {
          DEFAULT: '#05060b',
          elevated: '#0b0e1a',
        },
      },
    },
  },
  plugins: [],
}

export default config
