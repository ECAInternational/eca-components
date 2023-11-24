import { Button } from './Button';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    componentSubtitle: 'A standard button component'
  },
  argTypes: {
    type: {
      control: 'select',
      description:
        'Defines the colour scheme of the button based on the current theme',
      options: ['primary', 'secondary']
    },
    onClick: {
      action: true
    },
    onMouseOver: {
      action: true
    }
  }
};

export const Default = {
  args: {
    type: 'primary',
    children: 'Button'
  }
};

export const Primary = {
  args: {
    type: 'primary',
    children: 'Primary'
  }
};

export const Secondary = {
  args: {
    type: 'secondary',
    children: 'Secondary'
  }
};

export const Interactions = {
  args: {
    type: 'primary',
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
