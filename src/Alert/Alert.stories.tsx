import { expect, jest } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { Alert, AlertProps } from './Alert.tsx';

export default {
  component: Alert,
  title: 'Components/Alert',
  parameters: {
    componentSubtitle: 'Basic Alert'
  },
  argTypes: {
    onDelete: {
      action: 'deleted',
      description: 'Providing an `onDelete` function will render a close button to delete the alert.',
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
    label: 'I am a message'
  }
};

export const Yellow = {
  args: {
    label: 'I am a warning message',
    variant: 'yellow'
  }
};

export const Green = {
  args: {
    label: 'I am a success message',
    variant: 'green'
  }
};

export const Blue = {
  args: {
    label: 'I am an info message',
    variant: 'blue'
  }
};

export const Red = {
  args: {
    label: 'I am an error message',
    variant: 'red'
  }
};

export const Monochrome = {
  args: {
    label: 'I am a message',
    variant: 'monochrome'
  }
};

export const Neutral = {
  args: {
    label: 'I am a message'
  }
};

export const DeletableYellow = {
  args: {
    label: 'I am a warning message',
    variant: 'yellow',
    onDelete: () => {}
  }
};

export const DeletableGreen = {
  args: {
    label: 'I am a success message',
    variant: 'green',
    onDelete: () => {}
  }
};

export const DeletableBlue = {
  args: {
    label: 'I am an info message',
    variant: 'blue',
    onDelete: () => {}
  }
};

export const DeletableRed = {
  args: {
    label: 'I am an error message',
    variant: 'red',
    onDelete: () => {}
  }
};

export const DeletableMonochrome = {
  args: {
    label: 'I am a message',
    variant: 'monochrome',
    onDelete: () => {}
  }
};

export const DeletableNeutral = {
  args: {
    label: 'I am a message',
    onDelete: () => {}
  }
};

export const DeletableClick = {
  args: {
    label: 'Deletable',
    onDelete: jest.fn()
  },
  play: async ({ args, canvasElement, step }: { args: AlertProps; canvasElement: any; step: any }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onDelete).toHaveBeenCalled());
    });
  }
};
