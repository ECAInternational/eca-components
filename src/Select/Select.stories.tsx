import React from 'react';
import { Select } from './Select.tsx';
import { FieldSet, Label } from '../Form/index.ts';

type Person = { id: number; name: string; unavailable: boolean };

const people: Person[] = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
  { id: 6, name: 'Nicole Powell', unavailable: false },
  { id: 7, name: 'Blaire Collier', unavailable: false }
];

const animals: string[] = ['Cat', 'Dog', 'Bear', 'Lion'];
const colours: string[] = ['Red', 'Green', 'Blue', 'Yellow'];

export default {
  component: Select,
  title: 'Components/Select',
  height: '400px',
  parameters: {
    componentSubtitle: 'Basic Select Component'
  },
  argTypes: {
    state: {
      control: 'select',
      description: 'Defines the state of the select component',
      options: ['default', 'warning', 'error']
    },
    variant: {
      control: 'select',
      description: 'Defines the variant of the select component',
      options: ['outline', 'tonal']
    },
    size: {
      control: 'select',
      description: 'Defines the size of the select component',
      options: ['small', 'medium']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select component'
    },
    defaultValue: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
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
    ref: {
      table: { disable: true }
    },
    form: {
      table: { disable: true }
    },
    as: {
      table: { disable: true }
    },
    refName: {
      table: { disable: true }
    },
    by: {
      table: { disable: true }
    },
    onChange: {
      table: { disable: true }
    },
    horizontal: {
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
    name: 'default-select',
    state: 'default',
    label: 'Label',
    variant: 'outline',
    size: 'medium',
    disabled: false
  },
  render: ({ name, state, label, disabled, variant, size }: { name: string; state: 'default' | 'error' | 'warning'; label: string; disabled: boolean; variant?: 'outline' | 'tonal'; size?: 'small' | 'medium' }) => (
    <FieldSet disabled={disabled}>
      <Label>
        {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
      </Label>
      <Select id={name} size={size} state={state} variant={variant}>
        {people.map((person) => (
          <option key={person.id} value={person.name} disabled={person.unavailable}>
            {person.name}
          </option>
        ))}
      </Select>
    </FieldSet>
  )
};

export const Groups = {
  args: {
    name: 'group-select',
    state: 'default',
    label: 'Label'
  },
  render: ({ name, state, label }: { name: string; state: 'default' | 'error' | 'warning'; label: string }) => (
    <FieldSet>
      <Label>
        {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
      </Label>
      <Select id={name} state={state}>
        <optgroup label='Colours'>
          {colours.map((colour) => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </optgroup>
        <optgroup label='Animals'>
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </optgroup>
      </Select>
    </FieldSet>
  )
};

const defaultRender = ({ name, state, label, description, disabled, variant }: { name: string; state: 'default' | 'error' | 'warning'; label: string; description: string; disabled?: boolean; variant?: 'outline' | 'tonal' }) => (
  <FieldSet disabled={disabled} className='w-40'>
    <Label>
      {label} <span className='ps-1 paragraph-sm-lighter'>{description}</span>
    </Label>
    <Select id={name} state={state} variant={variant}>
      {people.map((person) => (
        <option key={person.id} value={person.name} disabled={person.unavailable}>
          {person.name}
        </option>
      ))}
    </Select>
  </FieldSet>
);

export const Tonal = {
  args: {
    name: 'tonal-select',
    state: 'default',
    label: 'Label',
    variant: 'tonal'
  },
  render: defaultRender
};
export const Disabled = {
  args: {
    name: 'disabled-select',
    state: 'default',
    label: 'Label',
    variant: 'outline',
    disabled: true
  },
  render: defaultRender
};

export const DisabledTonal = {
  args: {
    name: 'disabled-select',
    state: 'default',
    label: 'Label',
    variant: 'tonal',
    disabled: true
  },
  render: defaultRender
};

export const Warning = {
  args: {
    name: 'warning-select',
    state: 'warning',
    placeholder: 'Placeholder text',
    label: 'Warning',
    containerHeight: '72'
  },
  render: defaultRender
};

export const Error = {
  args: {
    name: 'error-select',
    state: 'error',
    placeholder: 'Placeholder text',
    label: 'Error'
  },
  render: defaultRender
};

export const NoLabel = {
  args: {
    name: 'no-label-select',
    state: 'default',
    placeholder: 'Placeholder text',
    size: 'medium'
  },
  render: ({ name, state, disabled, variant, size }: { name: string; state: 'default' | 'error' | 'warning'; disabled: boolean; variant?: 'outline' | 'tonal'; size?: 'small' | 'medium' }) => (
    <FieldSet disabled={disabled}>
      <Select id={name} size={size} state={state} variant={variant}>
        {people.map((person) => (
          <option key={person.id} value={person.name} disabled={person.unavailable}>
            {person.name}
          </option>
        ))}
      </Select>
    </FieldSet>
  )
};

export const Description = {
  args: {
    name: 'description-select',
    state: 'default',
    label: 'Label',
    description: '(required)',
    placeholder: 'Placeholder text'
  },
  render: defaultRender
};
