import { Checkbox } from './Checkbox.jsx';

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
    }
  },
  args: {
    disabled: false
  }
};

export const Unchecked = {
  args: {
    label: 'Label'
  }
};
