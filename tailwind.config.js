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
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '184': '46rem',
        '192': '48rem',
        '208': '56rem',
        '216': '58rem',
        '224': '64rem',
        '232': '68rem',
        '240': '72rem',
        '248': '76rem',
        '256': '80rem',
        '264': '84rem',
        '272': '88rem',
        '280': '92rem',
        '288': '96rem',
        '296': '100rem',
        '304': '104rem',
        '312': '108rem',
        '328': '112rem',
        '336': '116rem',
        '344': '120rem',
        '352': '124rem',
        '360': '128rem',
        '368': '132rem',
        '376': '136rem',
        '384': '140rem',
        '392': '144rem',
        '400': '148rem',
        '408': '152rem',
        '416': '156rem',
        '424': '160rem',
        '432': '164rem',
        '440': '168rem',
        '448': '172rem',
        '456': '176rem',
        '464': '180rem',
        '472': '184rem',
        '480': '188rem',
        '488': '192rem',
        '496': '196rem',
        '504': '200rem',
        '512': '204rem',
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

