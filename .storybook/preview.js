/** @type { import('@storybook/react').Preview } */

import '../src/index.css';

const preview = {
  parameters: {
    designToken: {
      disable: true
    },
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export const globalTypes = {
  dataTheme: {
    defaultValue: 'eca-light'
  },
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'ECA Light', dataTheme: 'eca-light', color: '#00755e' },
        { name: 'ECA Dark', dataTheme: 'eca-dark', color: '#ffb7d5' }
      ]
    }
  }
};

export default preview;
