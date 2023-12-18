import React from 'react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  excludeStories: ['Interactions'],
  parameters: {
    componentSubtitle: 'A standard button component'
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'Defines the colour scheme of the button based on the current theme',
      options: ['primary', 'outline', 'ghost']
    },
    size: {
      control: 'select',
      description: 'Defines the size of the button, medium is the default size',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button'
    },
    type: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    children: {
      name: 'Label'
    }
  },
  args: {
    disabled: false,
    size: 'medium',
    variant: 'primary'
  }
};

export const Default = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline'
  }
};

export const IconAtStart = {
  args: {
    variant: 'primary',
    children: (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
        Button
      </>
    )
  }
};

export const IconAtEnd = {
  args: {
    variant: 'primary',
    children: (
      <>
        Button
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      </>
    )
  }
};

export const IconOnly = {
  args: {
    variant: 'primary',
    children: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>
    )
  }
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
};

export const Small = {
  args: {
    variant: 'primary',
    children: 'Small',
    size: 'small'
  }
};

export const Medium = {
  args: {
    variant: 'primary',
    children: 'Medium',
    size: 'medium'
  }
};

export const Large = {
  args: {
    variant: 'primary',
    children: 'Large',
    size: 'large'
  }
};

export const Block = {
  args: {
    variant: 'primary',
    children: 'Block',
    className: 'btn-block'
  }
};

export const Interactions = {
  args: {
    variant: 'primary',
    children: 'Interactions'
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    });

    await step('Hover', async () => {
      await userEvent.hover(canvas.getByRole('button'));
      await waitFor(() => expect(args.onMouseOver).toHaveBeenCalled());
    });
  }
};
