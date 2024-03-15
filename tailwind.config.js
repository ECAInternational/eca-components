const { createThemes } = require('tw-colors');

const ecaDark = require('@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind');
const ecaLight = require('@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind');
const theme = require('./src/theme.ts');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  ...theme,
  plugins: [
    createThemes({
      'eca-light': ecaLight,
      'eca-dark': ecaDark
    })
  ]
};
