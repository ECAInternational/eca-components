import React, { useState } from 'react';
import { Select } from './Select.tsx';
import { SelectButton } from './Select.Button.tsx';
import { SelectOptions } from './Select.Options.tsx';
import { SelectOption } from './Select.Option.tsx';
import { FieldSet, Label } from '../Form/index.ts';
import { SelectOptionGroup } from './Select.OptionGroup.tsx';

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
    multiple: {
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
    disabled: false
  },
  render: ({ name, state, label, disabled }: { name: string; state: 'default' | 'error' | 'warning'; label: string; disabled: boolean }) => {
    const [selectedPerson, setSelectedPerson] = useState<Person>(people[0]);

    return (
      <div className='h-72'>
        <FieldSet disabled={disabled}>
          <Select name={name} value={selectedPerson} onChange={setSelectedPerson}>
            <Label>
              {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
            </Label>
            <SelectButton state={state}>{selectedPerson.name}</SelectButton>
            <SelectOptions>
              {people.map((person) => (
                <SelectOption key={person.id} value={person} disabled={person.unavailable}>
                  {person.name}
                </SelectOption>
              ))}
            </SelectOptions>
          </Select>
        </FieldSet>
      </div>
    );
  }
};

export const Multiple = {
  args: {
    name: 'multiple-select',
    state: 'default',
    label: 'Label'
  },
  render: ({ name, state, label }: { name: string; state: 'default' | 'error' | 'warning'; label: string }) => {
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    return (
      <div className='h-72'>
        <FieldSet>
          <Select name={name} value={selectedPeople} onChange={setSelectedPeople} multiple>
            <Label>
              {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
            </Label>
            <SelectButton state={state}> {selectedPeople.map((p) => p.name).join(', ')}</SelectButton>
            <SelectOptions>
              {people.map((person) => (
                <SelectOption key={person.id} value={person} disabled={person.unavailable}>
                  {person.name}
                </SelectOption>
              ))}
            </SelectOptions>
          </Select>
        </FieldSet>
      </div>
    );
  }
};

export const Groups = {
  args: {
    name: 'group-select',
    state: 'default',
    label: 'Label'
  },
  render: ({ name, state, label }: { name: string; state: 'default' | 'error' | 'warning'; label: string }) => {
    const [selectedValue, setSelectedValue] = useState<string>(colours[0]);

    return (
      <div className='h-72'>
        <FieldSet>
          <Select name={name} value={selectedValue} onChange={setSelectedValue}>
            <Label>
              {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
            </Label>
            <SelectButton state={state}>{selectedValue}</SelectButton>
            <SelectOptions>
              <SelectOptionGroup label='Colours'>
                {colours.map((colour) => (
                  <SelectOption key={colour} value={colour}>
                    {colour}
                  </SelectOption>
                ))}
              </SelectOptionGroup>
              <SelectOptionGroup label='Animals'>
                {animals.map((animal) => (
                  <SelectOption key={animal} value={animal}>
                    {animal}
                  </SelectOption>
                ))}
              </SelectOptionGroup>
            </SelectOptions>
          </Select>
        </FieldSet>
      </div>
    );
  }
};

const defaultRender = ({ name, state, label, description, disabled }: { name: string; state: 'default' | 'error' | 'warning'; label: string; description: string; disabled?: boolean }) => {
  const [selectedPerson, setSelectedPerson] = useState<Person>(people[0]);

  return (
    <div className={`${disabled ? 'h-24' : 'h-72'}`}>
      <FieldSet disabled={disabled}>
        <Select name={name} value={selectedPerson} onChange={setSelectedPerson}>
          <Label>
            {label} <span className='ps-1 paragraph-sm-lighter'>{description}</span>
          </Label>
          <SelectButton state={state}>{selectedPerson.name}</SelectButton>
          <SelectOptions>
            {people.map((person) => (
              <SelectOption key={person.id} value={person} disabled={person.unavailable}>
                {person.name}
              </SelectOption>
            ))}
          </SelectOptions>
        </Select>
      </FieldSet>
    </div>
  );
};

export const Disabled = {
  args: {
    name: 'disabled-select',
    state: 'default',
    label: 'Label',
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
    placeholder: 'Placeholder text'
  },
  render: defaultRender
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
