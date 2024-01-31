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
    onChange: {
      action: true,
      table: { disable: true }
    }
  },
  args: {
    checked: false,
    disabled: false,
    alignment: 'left',
    label: 'A Label'
  }
};

export const Default = {
  args: {
    id: 'default',
    name: 'default'
  }
};

export const Unchecked = {
  args: {
    id: 'unchecked',
    name: 'unchecked',
    checked: false
  }
};

export const Checked = {
  args: {
    id: 'checked',
    name: 'checked',
    checked: true
  }
};

export const Indeterminate = {
  args: {
    id: 'indeterminate',
    name: 'indeterminate'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.indeterminate = true;
  }
};

export const RightLabel = {
  args: {
    id: 'rightLabel',
    name: 'rightLabel',
    label: 'Right Label',
    alignment: 'right'
  }
};

export const LeftLabel = {
  args: {
    id: 'leftLabel',
    name: 'leftLabel',
    label: 'Left Label',
    alignment: 'left'
  }
};
