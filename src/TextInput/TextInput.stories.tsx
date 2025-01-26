import React from 'react';
import { TextInput, TextInputProps } from './TextInput.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';
import { Label } from '../Form/Label.tsx';

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
    type: 'text',
    autoComplete: 'off'
  }
};

export const Default = {
  args: {
    name: 'default-input',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Enabled = {
  args: {
    name: 'enabled-input',
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Disabled = {
  args: {
    name: 'disabled-input',
    disabled: true,
    state: 'default',
    placeholder: 'Placeholder text'
  }
};

export const Warning = {
  args: {
    name: 'warning-input',
    state: 'warning',
    placeholder: 'Placeholder text'
  }
};

export const Error = {
  args: {
    name: 'error-input',
    state: 'error',
    placeholder: 'Placeholder text'
  }
};

export const WithLabel = {
  args: {
    name: 'no-label-input',
    state: 'default',
    placeholder: 'Placeholder text'
  },
  render: (args: TextInputProps) => (
    <FieldSet>
      <Label htmlFor={args.name}>Label</Label>
      <TextInput {...args} />
    </FieldSet>
  )
};

export const WithDescription = {
  args: {
    name: 'description-input',
    state: 'default',
    placeholder: 'Placeholder text'
  },
  render: (args: TextInputProps) => (
    <FieldSet>
      <Label htmlFor={args.name}>
        Label<span className='ps-1 paragraph-sm-lighter'>Description</span>
      </Label>
      <TextInput {...args} />
    </FieldSet>
  )
};

export const Icon = {
  args: {
    name: 'icon-input',
    state: 'default',
    placeholder: 'Placeholder text',
    icon: 'fi-rr-search'
  }
};

export const Prefix = {
  args: {
    name: 'prefix-input',
    state: 'default',
    placeholder: 'Placeholder text',
    prefix: '£'
  }
};

export const Suffix = {
  args: {
    name: 'suffix-input',
    state: 'default',
    placeholder: 'Placeholder text',
    suffix: 'GBP'
  }
};

export const Password = {
  args: {
    name: 'password-input',
    state: 'default',
    placeholder: 'Enter your password',
    type: 'password'
  }
};
