import { themes } from '@storybook/theming';

const config = {
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  stories: ['../src/Intro.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-data-theme-switcher',
    {
      name: 'storybook-design-token',
      options: { designTokenGlob: 'tokens/*' }
    },
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],
  staticDirs: ['./.public'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {}
};
export default config;
