import { expect, userEvent, waitFor, within, fn } from '@storybook/test';
import { Chip, ChipProps } from './Chip.tsx';

export default {
  component: Chip,
  title: 'Components/Chip',
  parameters: {
    componentSubtitle: 'Basic Chip'
  },
  argTypes: {
    onDelete: {
      action: 'deleted',
      description: 'Providing an `onDelete` function will render a close button to delete the chip.',
      table: {
        defaultValue: { summary: undefined }
      },
      control: 'none'
    },
    variant: {
      table: {
        defaultValue: { summary: 'neutral' }
      }
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
    onDelete: undefined
  }
};

export const Default = {
  args: {
    label: 'Default'
  }
};

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
    label: 'Neutral'
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
    onDelete: () => {}
  }
};

export const DeletableClick = {
  args: {
    label: 'Deletable',
    onDelete: fn()
  },
  play: async ({ args, canvasElement, step }: { args: ChipProps; canvasElement: any; step: any }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onDelete).toHaveBeenCalled());
    });
  }
};

export const Rounded = {
  args: {
    label: 'Rounded',
    className: 'rounded-full'
  }
};
