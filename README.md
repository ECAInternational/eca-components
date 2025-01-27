# ECA Components

A library of reusable components for across ECA applications.

Uses Storybook for component development and documentation

## Live Documentation

https://ecainternational.github.io/eca-components

## Installation

```npm i -D @ecainternational/eca-components```

### tailwind.config.js Setup
Import the eca-components tailwind plugin and `theme` files in your `tailwind.config.js` file as shown below. 

The [tw-colors](https://github.com/L-Blondy/tw-colors) package can be used to easily specify
different themes for your application. You can specify as many themes as you like as set a 
default light and dark theme.

```js
const { createThemes } = require('tw-colors');
import myLightTheme from '@ecainternational/eca-design-tokens/tailwind/my-dark-theme.tailwind';
import myDarkTheme from '@ecainternational/eca-design-tokens/tailwind/my-light-theme.tailwind';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@ecainternational/eca-components/**/*.js'
  ],
  plugins: [
    require('@ecainternational/eca-components'),
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

### Remix Setup
To use in a remix app you'll need to create a tailwind.css file with the following

```js
    @import '@flaticon/flaticon-uicons/css/all/all.css';
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

and in your root.jsx add the following

```js
import stylesheet from './tailwind.css';

export const links = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{
		rel: 'stylesheet',
		href: stylesheet,
	},
];
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
