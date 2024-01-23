import { Switch } from './Switch';

export default {
  component: Switch,
  title: 'Components/Switch',
  parameters: {
    componentSubtitle: 'Basic Switch'
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
    disabled: false,
    alignment: 'left',
    label: 'A Label'
  }
};

export const Default = {
  args: {}
};

export const On = {
  args: {
    checked: true
  }
};

export const Off = {
  args: {
    checked: false
  }
};

export const Right = {
  args: {
    alignment: 'right'
  }
};

export const Left = {
  args: {
    alignment: 'left'
  }
};

export const Top = {
  args: {
    alignment: 'top'
  }
};
