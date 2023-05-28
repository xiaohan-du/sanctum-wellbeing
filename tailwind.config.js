/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minWidth: {
        7: '7rem',
        9: '9rem',
        11: '11rem'
      },
      spacing: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '152': '38rem'
      },
      maxWidth: {
        'price-title': '6rem',
      }
    },
    screens: {
      '2xl': { 'max': '1380px' },
      // => @media (max-width: 1380px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.15em',
    }
  },
  plugins: [],
}

