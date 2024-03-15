import { createThemes } from 'tw-colors';
import theme from './src/theme.ts';

const ecaDark = require('@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind');
const ecaLight = require('@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind');

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
