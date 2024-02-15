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
      description: 'Maximum number of characters allowed. If defined, a character count will be displayed.'
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
    description: '(required)'
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

export const MinRows = {
  args: {
    name: 'min-rows-text-area',
    state: 'default',
    minRows: 3,
    placeholder: 'Minimum 3 rows'
  }
};

export const MaxRows = {
  args: {
    name: 'max-rows-text-area',
    state: 'default',
    maxRows: 3,
    placeholder: 'Maximum 3 rows'
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

export const MaxLengthValid = {
  args: {
    name: 'max-length-valid-text-area',
    state: 'default',
    label: 'Label',
    value: 'Bean beet bitter brinjal broccoli burdock cardoon cauliflower celery ceylon chicory daikon eggplant fennel florence fluted garbanzo garden good green henry jerusalem.',
    maxLength: 200
  }
};

export const MaxLengthInvalid = {
  args: {
    name: 'max-length-invalid-text-area',
    state: 'default',
    label: 'Label',
    value: 'Bean beet bitter brinjal broccoli burdock cardoon cauliflower celery ceylon chicory daikon eggplant fennel florence fluted garbanzo garden good green henry jerusalem.',
    maxLength: 100
  }
};
