import { createThemes } from 'tw-colors';
import ecaDark from '@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind';
import ecaLight from '@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind';
import theme from './src/theme.ts';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  ...theme,
  plugins: [
    createThemes({
      'eca-light': ecaLight,
      'eca-dark': ecaDark
    })
  ]
};
