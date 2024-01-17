import { TextInput } from './TextInput';

export default {
  component: TextInput,
  title: 'Components/TextInput',
  parameters: {
    componentSubtitle: 'Basic Text Fields'
  },
  argTypes: {
    state: {
      control: 'select',
      description: 'Defines the state of the button',
      options: ['default', 'warning', 'error']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    id: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    }
  },
  args: {
    disabled: false,
    state: 'default'
  }
};

export const Default = {
  args: {
    id: 'default-button',
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Label'
  }
};

export const Enabled = {
  args: {
    id: 'enabled-button',
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Enabled'
  }
};

export const Disabled = {
  args: {
    id: 'disabled-button',
    disabled: true,
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Disabled'
  }
};

export const Warning = {
  args: {
    id: 'warning-button',
    state: 'warning',
    placeholder: 'Placeholder text',
    label: 'Warning'
  }
};

export const Error = {
  args: {
    id: 'error-button',
    state: 'error',
    placeholder: 'Placeholder text',
    label: 'Error'
  }
};

export const NoLabel = {
  args: {
    id: 'no-label-button',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Description = {
  args: {
    id: 'description-button',
    state: 'default',
    label: 'Label',
    description: '(required)',
    placeholder: 'Placeholder text'
  }
};

export const Icon = {
  args: {
    id: 'icon-button',
    state: 'default',
    label: 'Icon',
    placeholder: 'Placeholder text',
    icon: 'fi-rr-search'
  }
};

export const Prefix = {
  args: {
    id: 'prefix-button',
    state: 'default',
    label: 'Prefix',
    placeholder: 'Placeholder text',
    prefix: '£'
  }
};

export const Suffix = {
  args: {
    id: 'suffix-button',
    state: 'default',
    label: 'Suffix',
    placeholder: 'Placeholder text',
    suffix: 'GBP'
  }
};
