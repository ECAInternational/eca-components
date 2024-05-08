import { expect, jest } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { ActionableAlert, ActionableAlertProps } from './ActionableAlert.tsx';

export default {
  component: ActionableAlert,
  title: 'Components/ActionableAlert',
  parameters: {
    componentSubtitle: 'Actionable Alert'
  },
  argTypes: {
    onPrimaryClick: {
      action: 'primary',
      description: "Providing an `onPrimary` function will render a 'ghost' button with an associated action.",
      table: {
        defaultValue: { summary: undefined }
      },
      control: 'none'
    },
    onSecondaryClick: {
      action: 'secondary',
      description: "Providing an `onSecondary` function will render a 'outline' button with an associated action.",
      table: {
        defaultValue: { summary: undefined }
      },
      control: 'none'
    },
    variant: {
      table: {
        defaultValue: { summary: 'blue' }
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
    primaryButtonText: undefined,
    secondaryButtonText: undefined,
    onPrimaryClick: undefined,
    onSecondaryClick: undefined
  }
};

export const Default = {
  args: {
    label: 'I am an info with an action',
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const Blue = {
  args: {
    label: 'I am an info with an action',
    variant: 'blue',
    onPrimaryClick: () => {},
    primaryButtonText: 'Accept'
  }
};

export const Green = {
  args: {
    label: 'I am a success with an action',
    variant: 'green',
    onPrimaryClick: () => {},
    primaryButtonText: 'Accept'
  }
};

export const Yellow = {
  args: {
    label: 'I am a warning with an action',
    variant: 'yellow',
    onPrimaryClick: () => {},
    primaryButtonText: 'Undo'
  }
};

export const Red = {
  args: {
    label: 'I am an error with an action',
    variant: 'red',
    onPrimaryClick: () => {},
    primaryButtonText: 'Undo'
  }
};

export const BinaryBlue = {
  args: {
    label: 'I am an info with an action',
    variant: 'blue',
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const BinaryGreen = {
  args: {
    label: 'I am a success with an action',
    variant: 'green',
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const BinaryYellow = {
  args: {
    label: 'I am a warning with an action',
    variant: 'yellow',
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const BinaryRed = {
  args: {
    label: 'I am an error with an action',
    variant: 'red',
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const PrimaryClick = {
  args: {
    label: 'Primary',
    onPrimaryClick: jest.fn()
  },
  play: async ({ args, canvasElement, step }: { args: ActionableAlertProps; canvasElement: any; step: any }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onPrimaryClick).toHaveBeenCalled());
    });
  }
};

export const SecondaryClick = {
  args: {
    label: 'Secondary',
    onSecondaryClick: jest.fn()
  },
  play: async ({ args, canvasElement, step }: { args: ActionableAlertProps; canvasElement: any; step: any }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onSecondaryClick).toHaveBeenCalled());
    });
  }
};
