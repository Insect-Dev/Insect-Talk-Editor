import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e7f6f8',
          200: '#cfeef1',
          300: '#b8e5eb',
          400: '#a0dde4',
          500: '#88d4dd',
          600: '#6daab1',
          700: '#527f85',
          800: '#365558',
          900: '#1b2a2c',
        },
        secondary: {
          100: '#d8e4ea',
          200: '#b1c9d5',
          300: '#8aaec0',
          400: '#6393ab',
          500: '#3c7896',
          600: '#306078',
          700: '#24485a',
          800: '#18303c',
          900: '#0c181e',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addVariant }: PluginAPI) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })

      addVariant('hocus', ['&:hover', '&:focus'])
    }),
  ],
}
export default config
