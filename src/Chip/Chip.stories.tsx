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
      defaultValue: { summary: 'neutral' },
      control: 'select',
      options: ['vis-1', 'vis-2', 'vis-3', 'vis-4', 'vis-5', 'vis-6', 'vis-7', 'monochrome', 'neutral']
    },
    size: {
      defaultValue: { summary: 'medium' },
      control: 'select',
      options: ['xsmall', 'small', 'medium']
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

export const Visualisation1 = {
  args: {
    label: 'Visualisation 1',
    variant: 'vis-1'
  }
};

export const Visualisation2 = {
  args: {
    label: 'Visualisation 2',
    variant: 'vis-2'
  }
};

export const Visualisation3 = {
  args: {
    label: 'Visualisation 3',
    variant: 'vis-3'
  }
};

export const Visualisation4 = {
  args: {
    label: 'Visualisation 4',
    variant: 'vis-4'
  }
};

export const Visualisation5 = {
  args: {
    label: 'Visualisation 5',
    variant: 'vis-5'
  }
};

export const Visualisation6 = {
  args: {
    label: 'Visualisation 6',
    variant: 'vis-6'
  }
};

export const Visualisation7 = {
  args: {
    label: 'Visualisation 7',
    variant: 'vis-7'
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

export const DeletableVisualisation1 = {
  args: {
    label: 'Deletable',
    variant: 'vis-1',
    onDelete: () => {}
  }
};

export const DeletableVisualisation2 = {
  args: {
    label: 'Deletable',
    variant: 'vis-2',
    onDelete: () => {}
  }
};

export const DeletableVisualisation3 = {
  args: {
    label: 'Deletable',
    variant: 'vis-3',
    onDelete: () => {}
  }
};

export const DeletableVisualisation4 = {
  args: {
    label: 'Deletable',
    variant: 'vis-4',
    onDelete: () => {}
  }
};

export const DeletableVisualisation5 = {
  args: {
    label: 'Deletable',
    variant: 'vis-5',
    onDelete: () => {}
  }
};

export const DeletableVisualisation6 = {
  args: {
    label: 'Deletable',
    variant: 'vis-6',
    onDelete: () => {}
  }
};

export const DeletableVisualisation7 = {
  args: {
    label: 'Deletable',
    variant: 'vis-7',
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

export const XSmall = {
  args: {
    label: 'XSmall',
    size: 'xsmall'
  }
};

export const XSmallDeletable = {
  args: {
    label: 'XSmall',
    size: 'xsmall',
    onDelete: () => {}
  }
};

export const Small = {
  args: {
    label: 'Small',
    size: 'small'
  }
};

export const SmallDeletable = {
  args: {
    label: 'Small',
    size: 'small',
    onDelete: () => {}
  }
};

export const Medium = {
  args: {
    label: 'Medium',
    size: 'medium'
  }
};

export const MediumDeletable = {
  args: {
    label: 'Medium',
    size: 'medium',
    onDelete: () => {}
  }
};
