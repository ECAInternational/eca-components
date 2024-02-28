import { Chip } from './Chip';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Chip,
  title: 'Components/Chip',
  parameters: {
    componentSubtitle: 'Basic Chip'
  },
  argTypes: {
    deletable: {
      control: { type: 'boolean' },
      description: 'Chip can be deleted by clicking on the close button.'
    },
    onDelete: { action: true },
    className: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    }
  },
  args: {
    label: 'Label'
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
    deletable: true
  }
};

export const DeletableGreen = {
  args: {
    label: 'Deletable',
    variant: 'green',
    deletable: true
  }
};

export const DeletableBlue = {
  args: {
    label: 'Deletable',
    variant: 'blue',
    deletable: true
  }
};

export const DeletablePurple = {
  args: {
    label: 'Deletable',
    variant: 'purple',
    deletable: true
  }
};

export const DeletablePink = {
  args: {
    label: 'Deletable',
    variant: 'pink',
    deletable: true
  }
};

export const DeletableOrange = {
  args: {
    label: 'Deletable',
    variant: 'orange',
    deletable: true
  }
};

export const DeletableRed = {
  args: {
    label: 'Deletable',
    variant: 'red',
    deletable: true
  }
};

export const DeletableMonochrome = {
  args: {
    label: 'Deletable',
    variant: 'monochrome',
    deletable: true
  }
};

export const DeletableNeutral = {
  args: {
    label: 'Deletable',
    variant: 'neutral',
    deletable: true
  }
};

export const DeletableClick = {
  args: {
    label: 'Deletable',
    deletable: true
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onDelete).toHaveBeenCalled());
    });
  }
};
