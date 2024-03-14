const plugin = require('tailwindcss/plugin');
const { createThemes } = require('tw-colors');
const ecaBrand = require('@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind');
const ecaDark = require('@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind');
const ecaLight = require('@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind');

const theme = {
  ...ecaBrand,
  extend: {
    transitionDuration: {
      DEFAULT: '200ms'
    },
    transitionTimingFunction: {
      DEFAULT: 'ease-in-out'
    },
    scale: {
      92: '0.92'
    }
  },
  boxShadow: {
    'inner-button': 'inset 0 0 0 0.2rem rgba(0, 0, 0, 1)'
  }
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme,
  plugins: [
    createThemes({
      'eca-light': ecaLight,
      'eca-dark': ecaDark
    }),
    plugin(({ addBase }) => {
      addBase(theme);
      createThemes({
        'eca-light': ecaLight,
        'eca-dark': ecaDark
      });
    })
  ]
};
