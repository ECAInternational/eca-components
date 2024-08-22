import { TextInput } from './TextInput.tsx';

export default {
  component: TextInput,
  title: 'Components/TextInput',
  parameters: {
    componentSubtitle: 'Basic Text Fields'
  },
  argTypes: {
    state: {
      control: 'select',
      description: 'Defines the state of the input',
      options: ['default', 'warning', 'error']
    },
    variant: {
      control: 'select',
      description: 'Defines the variant of the select component',
      options: ['outline', 'tonal']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    id: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    }
  },
  args: {
    disabled: false,
    state: 'default',
    variant: 'outline',
    type: 'text'
  }
};

export const Default = {
  args: {
    name: 'default-input',
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Label'
  }
};

export const Enabled = {
  args: {
    name: 'enabled-input',
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Enabled'
  }
};

export const Disabled = {
  args: {
    name: 'disabled-input',
    disabled: true,
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Disabled'
  }
};

export const Warning = {
  args: {
    name: 'warning-input',
    state: 'warning',
    placeholder: 'Placeholder text',
    label: 'Warning'
  }
};

export const Error = {
  args: {
    name: 'error-input',
    state: 'error',
    placeholder: 'Placeholder text',
    label: 'Error'
  }
};

export const NoLabel = {
  args: {
    name: 'no-label-input',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Description = {
  args: {
    name: 'description-input',
    state: 'default',
    label: 'Label',
    description: '(required)',
    placeholder: 'Placeholder text'
  }
};

export const Icon = {
  args: {
    name: 'icon-input',
    state: 'default',
    label: 'Icon',
    placeholder: 'Placeholder text',
    icon: 'fi-rr-search'
  }
};

export const Prefix = {
  args: {
    name: 'prefix-input',
    state: 'default',
    label: 'Prefix',
    placeholder: 'Placeholder text',
    prefix: '£'
  }
};

export const Suffix = {
  args: {
    name: 'suffix-input',
    state: 'default',
    label: 'Suffix',
    placeholder: 'Placeholder text',
    suffix: 'GBP'
  }
};

export const Password = {
  args: {
    name: 'password-input',
    state: 'default',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
};
