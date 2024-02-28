import { Chip } from './Chip';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

export default {
  component: Chip,
  title: 'Components/Chip',
  parameters: {
    componentSubtitle: 'Basic Chip'
  },
  argTypes: {
    onDelete: {
      action: 'deleted',
      description: 'Providing an `onDelete` function will render a close button to delete the chip.'
    },
    className: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    }
  },
  args: {
    label: 'Label',
    onDelete: null
  }
};

export const Default = {};

export const Yellow = {
  args: {
    label: 'Yellow',
    variant: 'yellow'
  }
};

export const Green = {
  args: {
    label: 'Green',
    variant: 'green'
  }
};

export const Blue = {
  args: {
    label: 'Blue',
    variant: 'blue'
  }
};

export const Purple = {
  args: {
    label: 'Purple',
    variant: 'purple'
  }
};

export const Pink = {
  args: {
    label: 'Pink',
    variant: 'pink'
  }
};

export const Orange = {
  args: {
    label: 'Orange',
    variant: 'orange'
  }
};

export const Red = {
  args: {
    label: 'Red',
    variant: 'red'
  }
};

export const Monochrome = {
  args: {
    label: 'Monochrome',
    variant: 'monochrome'
  }
};

export const Neutral = {
  args: {
    label: 'Neutral',
    variant: 'neutral'
  }
};

export const DeletableYellow = {
  args: {
    label: 'Deletable',
    variant: 'yellow',
    onDelete: () => {}
  }
};

export const DeletableGreen = {
  args: {
    label: 'Deletable',
    variant: 'green',
    onDelete: () => {}
  }
};

export const DeletableBlue = {
  args: {
    label: 'Deletable',
    variant: 'blue',
    onDelete: () => {}
  }
};

export const DeletablePurple = {
  args: {
    label: 'Deletable',
    variant: 'purple',
    onDelete: () => {}
  }
};

export const DeletablePink = {
  args: {
    label: 'Deletable',
    variant: 'pink',
    onDelete: () => {}
  }
};

export const DeletableOrange = {
  args: {
    label: 'Deletable',
    variant: 'orange',
    onDelete: () => {}
  }
};

export const DeletableRed = {
  args: {
    label: 'Deletable',
    variant: 'red',
    onDelete: () => {}
  }
};

export const DeletableMonochrome = {
  args: {
    label: 'Deletable',
    variant: 'monochrome',
    onDelete: () => {}
  }
};

export const DeletableNeutral = {
  args: {
    label: 'Deletable',
    variant: 'neutral',
    onDelete: () => {}
  }
};

export const DeletableClick = {
  args: {
    label: 'Deletable',
    onDelete: jest.fn()
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onDelete).toHaveBeenCalled());
    });
  }
};
