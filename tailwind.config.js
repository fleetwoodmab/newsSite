/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './src/styles/**/*.{html,js}'],
  safelist: [
    'text-teal',
    'text-red',
    'teal',
    'red'
    // Add accents
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        "dark-blue-green": '#052e37',
        "light-blue-green": '#37585f',
        "lime-green":'#bfce40',
        'white':'#ffffff',
        "blue-grey": '#e6eaeb',
        "dark-grey": '#adbabe',
        'light-grey':'#5a5a5a',
        'accent-grey':'#9babaf',
        'red':'#E7343F',
        'teal':'#3692BC',
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        gray: {
          500: '#052e37',
        },
        
      },
      maxWidth: {
        'none-important': 'none !important',
      },
    },
  },
  plugins: [flowbitePlugin],
}

