import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import ecaLogo from './.public/eca-logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'ECA International',
    brandUrl: 'https://www.eca-international.com/',
    brandImage: ecaLogo,
    brandTarget: '_self'
  })
});
