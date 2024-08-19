const config = {
  stories: ['../src/Intro.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-data-theme-switcher',
    {
      name: 'storybook-design-token',
      options: { designTokenGlob: 'tokens/*' }
    },
    '@chromatic-com/storybook'
  ],

  staticDirs: ['./.public'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: false
  }
};
export default config;
