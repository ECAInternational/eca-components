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

export const Warning = {
  args: {
    label: 'I am a warning message',
    variant: 'warning'
  }
};

export const Success = {
  args: {
    label: 'I am a success message',
    variant: 'success'
  }
};

export const Info = {
  args: {
    label: 'I am an info message',
    variant: 'info'
  }
};

export const Error = {
  args: {
    label: 'I am an error message',
    variant: 'error'
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

export const DeletableWarning = {
  args: {
    label: 'I am a warning message',
    variant: 'warning',
    onDelete: () => {}
  }
};

export const DeletableSuccess = {
  args: {
    label: 'I am a success message',
    variant: 'success',
    onDelete: () => {}
  }
};

export const DeletableInfo = {
  args: {
    label: 'I am an info message',
    variant: 'info',
    onDelete: () => {}
  }
};

export const DeletableError = {
  args: {
    label: 'I am an error message',
    variant: 'error',
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
