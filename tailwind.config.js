/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
// delete keys to remove warning on tailwind (https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220)
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['var(--font-archivo)'],
    },
    colors: {
      main: colors.slate,
      alt: colors.amber,
      ...colors,
    },
  },
  plugins: [],
};
