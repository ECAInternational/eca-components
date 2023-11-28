const ecaBrand = require('@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind');
const ecaDark = require('@ecainternational/eca-design-tokens/tailwind/eca-dark.tailwind');
const ecaLight = require('@ecainternational/eca-design-tokens/tailwind/eca-light.tailwind');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    ...ecaBrand
  },
  daisyui: {
    themes: [
      {
        'eca-dark': ecaDark,
        'eca-light': ecaLight
      }
    ]
  },
  plugins: [require('daisyui')]
};
