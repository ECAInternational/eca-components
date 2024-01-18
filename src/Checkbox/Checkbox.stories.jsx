import { within } from '@storybook/testing-library';
import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  parameters: {
    componentSubtitle: 'Basic Checkbox'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    className: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    },
    checked: {
      table: { disable: true }
    },
    onChange: {
      action: true,
      table: { disable: true }
    }
  },
  args: {
    disabled: false
  }
};

export const Default = {
  args: {}
};

export const Unchecked = {
  args: {
    checked: false
  }
};

export const Checked = {
  args: {
    checked: true
  }
};

export const Indeterminate = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.indeterminate = true;
  }
};

export const RightLabel = {
  args: {
    rightLabel: 'Right Label'
  }
};

export const LeftLabel = {
  args: {
    leftLabel: 'Left Label'
  }
};
