const { createThemes } = require('tw-colors');
const ecaBrand = require('@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind');
const ecaDark = require('@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind');
const ecaLight = require('@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
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
    }
  },
  daisyui: {
    themes: []
  },
  plugins: [
    require('daisyui'),
    createThemes({
      'eca-light': ecaLight,
      'eca-dark': ecaDark
    })
  ]
};
