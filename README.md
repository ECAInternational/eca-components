# ECA Components

A library of reusable components for across ECA applications.

Uses Storybook for component development and documentation.

## Live Documentation

https://ecainternational.github.io/eca-components

## Installation

```npm i -D @ecainternational/eca-components```

### tailwind.config.js Setup

Import and use `brand` and `theme` files in you `tailwind.config.js` file as shown below. 

The [tw-colors](https://github.com/L-Blondy/tw-colors) package can be used to easily specify
different themes for your application. You can specify as many themes as you like as set a 
default light and dark theme.

```js
const { createThemes } = require('tw-colors');
import myBrand from '@ecainternational/eca-design-tokens/tailwind/my-brand.tailwind';
import myLightTheme from '@ecainternational/eca-design-tokens/tailwind/my-dark-theme.tailwind';
import myDarkTheme from '@ecainternational/eca-design-tokens/tailwind/my-light-theme.tailwind';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@ecainternational/eca-components/**/*.js'
  ],
  theme: {
    ...myBrand
  },
  daisyui: {
    themes: []
  },
  plugins: [
    require('daisyui'),
    createThemes(
            {
              'eca-light': ecaLight,
              'eca-dark': ecaDark
            },
            {
              defaultTheme: {
                dark: 'eca-dark',
                light: 'eca-light'
              }
            }
    )
  ]
};
```

### Theme Switching
To switch themes, set the `data-theme` attribute on the `html` element to the name of the theme.

```js
document.documentElement.setAttribute('data-theme', 'my-other-theme-name');
```

## Running Storybook Locally

- Install dependencies ```npm install```
- Run storybook ```npm run storybook``` - this will open up Storybook in your browser

## Other Commands

- ```npm run build``` - Builds the library in the `dist` folder as an NPM package
- ```npm run test``` -  Run tests against all stories. Requires storybook to be running first
- ```npm run build-storybook``` - Builds Storybook to be used in CI tests
- ```npm run build-storybook-docs``` - Builds Storybook documentation