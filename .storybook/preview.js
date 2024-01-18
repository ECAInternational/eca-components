import '../src/index.css';
import { themes } from '@storybook/theming';

const preview = {
  parameters: {
    designToken: {
      disable: true
    },
    actions: { argTypesRegex: '^on.*' },
    docs: {
      theme: themes.light,
      story: {
        autoplay: true
      }
    },
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
        { name: 'ECA Light', dataTheme: 'eca-light', color: '#ffffff' },
        { name: 'ECA Dark', dataTheme: 'eca-dark', color: '#000000' }
      ]
    }
  }
};

export default preview;
