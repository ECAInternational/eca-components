import { createThemes } from 'tw-colors';
import ecaDark from '@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind';
import ecaLight from '@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind';
import { tailwindPlugin } from './src/tailwindPlugin.ts';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [
    tailwindPlugin,
    createThemes({
      'eca-light': ecaLight,
      'eca-dark': ecaDark
    })
  ]
};
