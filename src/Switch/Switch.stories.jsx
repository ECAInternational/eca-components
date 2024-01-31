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

export const On = {
  args: {
    id: 'on',
    name: 'on',
    checked: true
  }
};

export const Off = {
  args: {
    id: 'off',
    name: 'off',
    checked: false
  }
};

export const Right = {
  args: {
    id: 'right',
    name: 'right',
    alignment: 'right'
  }
};

export const Left = {
  args: {
    id: 'left',
    name: 'left',
    alignment: 'left'
  }
};

export const Top = {
  args: {
    id: 'top',
    name: 'top',
    alignment: 'top'
  }
};
