import '../src/index.css';
import { themes } from '@storybook/theming';

const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '768px'
    }
  }
};

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
    },
    viewport: {
      viewports,
      defaultViewport: 'desktop'
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
