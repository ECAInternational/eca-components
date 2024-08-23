import React from 'react';
import { TextArea, TextAreaProps } from './TextArea.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';
import { Label } from '../Form/Label.tsx';

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
      description: 'Optional. Maximum number of characters allowed. If defined, a character count will be displayed.'
    },
    minRows: {
      control: 'number',
      description: 'Optional. The minimum number of rows to display. Default is 1.'
    },
    maxRows: {
      control: 'number',
      description: 'Optional the maximum number of rows the text area will grow to before scrolling.'
    },
    id: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    onChange: {
      table: { disable: true }
    }
  },
  args: {
    maxLength: 200,
    disabled: false,
    state: 'default'
  }
};

export const Default = {
  args: {
    name: 'default-text-area',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Enabled = {
  args: {
    name: 'enabled-text-area',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Disabled = {
  args: {
    name: 'disabled-text-area',
    disabled: true,
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const NoMaxLength = {
  args: {
    name: 'no-max-length-text-area',
    maxLength: undefined,
    state: 'default',
    placeholder: 'No Max Length'
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
    placeholder: 'Placeholder text'
  }
};

export const WithLabel = {
  args: {
    name: 'no-label-text-area',
    state: 'default',
    placeholder: 'Placeholder text'
  },
  render: (args: TextAreaProps) => (
    <FieldSet>
      <Label htmlFor={args.name}>Label</Label>
      <TextArea {...args} />
    </FieldSet>
  )
};

export const WithDescription = {
  args: {
    name: 'description-text-area',
    state: 'default',
    placeholder: 'Placeholder text'
  },
  render: (args: TextAreaProps) => (
    <FieldSet>
      <Label htmlFor={args.name}>
        Label<span className='ps-1 paragraph-sm-lighter'>Description</span>
      </Label>
      <TextArea {...args} />
    </FieldSet>
  )
};

export const MaxLengthValid = {
  args: {
    name: 'max-length-valid-text-area',
    state: 'default',
    value: 'Bean beet bitter brinjal broccoli burdock cardoon cauliflower celery ceylon chicory daikon eggplant fennel florence fluted garbanzo garden good green henry jerusalem.',
    maxLength: 200
  }
};

export const MaxLengthInvalid = {
  args: {
    name: 'max-length-invalid-text-area',
    state: 'default',
    value: 'Bean beet bitter brinjal broccoli burdock cardoon cauliflower celery ceylon chicory daikon eggplant fennel florence fluted garbanzo garden good green henry jerusalem.',
    maxLength: 100
  }
};
