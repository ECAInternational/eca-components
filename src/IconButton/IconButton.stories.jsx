// import { expect } from '@storybook/jest';
// import React from 'react';
// import { userEvent, waitFor, within } from '@storybook/testing-library';
import { IconButton } from './IconButton';

export default {
  component: IconButton,
  title: 'Components/IconButton',
  parameters: {
    componentSubtitle: 'A standard icon button component'
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Defines the colour scheme of the icon button based on the current theme',
      options: ['standard', 'filled', 'tonal', 'outline']
    },
    size: {
      control: 'select',
      description: 'Defines the size of the icon button, medium is the default size',
      options: ['xsmall', 'small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the icon button'
    },
    className: {
      table: { disable: true }
    },
    onClick: { action: true }
  },
  args: {
    disabled: false,
    size: 'medium',
    variant: 'standard'
  }
};

export const Default = {
  args: {
    name: 'default',
    variant: 'standard',
    children: 'IconButton',
    icon: 'fi-rr-envelope'
  }
};

export const Standard = {
  args: {
    name: 'standard',
    variant: 'standard',
    children: 'IconButton'
  }
};
