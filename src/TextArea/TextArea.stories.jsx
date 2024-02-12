import { TextArea } from './TextArea';

export default {
  component: TextArea,
  title: 'Components/TextArea',
  parameters: {
    componentSubtitle: 'Basic Text Area Fields'
  },
  argTypes: {
    state: {
      control: 'select',
      description: 'Defines the state of the button',
      options: ['default', 'error']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed'
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
    name: 'default-text-area',
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Label',
    maxLength: 100
  }
};

export const Enabled = {
  args: {
    name: 'enabled-text-area',
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Enabled'
  }
};

export const Disabled = {
  args: {
    name: 'disabled-text-area',
    disabled: true,
    state: 'default',
    placeholder: 'Placeholder text',
    label: 'Disabled'
  }
};

export const Error = {
  args: {
    name: 'error-text-area',
    state: 'error',
    placeholder: 'Placeholder text',
    label: 'Error'
  }
};

export const NoLabel = {
  args: {
    name: 'no-label-text-area',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Description = {
  args: {
    name: 'description-text-area',
    state: 'default',
    label: 'Label',
    description: '(required)',
    placeholder: 'Placeholder text'
  }
};
