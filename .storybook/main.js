/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/Intro.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx)'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-data-theme-switcher'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
