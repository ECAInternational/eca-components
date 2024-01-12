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
