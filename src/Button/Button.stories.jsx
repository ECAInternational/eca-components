import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
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
    disabled: {
      control: 'boolean',
      description: 'Disables the button'
    },
    type: {
      table: { disable: true }
    },
    children: {
      name: 'Label'
    },
    onClick: {
      action: true,
      table: { disable: true }
    },
    onMouseOver: {
      action: true,
      table: { disable: true }
    }
  },
  args: {
    disabled: false
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

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost'
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
