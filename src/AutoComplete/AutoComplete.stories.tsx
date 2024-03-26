import React, { useState } from 'react';
import { AutoComplete } from './AutoComplete.tsx';
import { AutoCompleteLabel } from './AutoComplete.Label.tsx';
import { AutoCompleteInput } from './AutoComplete.Input.tsx';
import { AutoCompleteOptions } from './AutoComplete.Options.tsx';
import { AutoCompleteOption } from './AutoComplete.Option.tsx';
import { FieldSet } from './FieldSet.tsx';

const people = ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan'];

export default {
  component: AutoComplete,
  title: 'Components/AutoComplete',
  height: '400px',
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
      description: 'Disables the autocomplete field'
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
    name: 'default-button',
    state: 'default',
    label: 'Label',
    disabled: false
  },
  render: ({ name, state, label, disabled }: { name: string; state: 'default' | 'error' | 'warning'; label: string; disabled: boolean }) => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [query, setQuery] = useState('');

    const filteredPeople = query === '' ? people : people.filter((person) => person.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className='h-72'>
        <FieldSet>
          <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson} disabled={disabled}>
            <AutoCompleteLabel>
              {label} <span className='font-light ps-1'>Description</span>
            </AutoCompleteLabel>
            <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} />
            <AutoCompleteOptions onClose={() => setQuery('')}>
              {filteredPeople.map((person) => (
                <AutoCompleteOption key={person} value={person}>
                  {person}
                </AutoCompleteOption>
              ))}
            </AutoCompleteOptions>
          </AutoComplete>
        </FieldSet>
      </div>
    );
  }
};

export const Multiple = {
  args: {
    name: 'default-button',
    state: 'default',
    label: 'Label'
  },
  render: ({ name, state, label }: { name: string; state: 'default' | 'error' | 'warning'; label: string }) => {
    const [selectedPerson, setSelectedPerson] = useState([people[0], people[1]]);
    const [query, setQuery] = useState('');

    const filteredPeople = query === '' ? people : people.filter((person) => person.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className='h-72'>
        <FieldSet>
          <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson} multiple>
            <AutoCompleteLabel>
              {label} <span className='font-light ps-1'>Description</span>
            </AutoCompleteLabel>
            <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} displayValue={(p: string[]) => p.join(', ')} />
            <AutoCompleteOptions onClose={() => setQuery('')}>
              {filteredPeople.map((person) => (
                <AutoCompleteOption key={person} value={person}>
                  {person}
                </AutoCompleteOption>
              ))}
            </AutoCompleteOptions>
          </AutoComplete>
        </FieldSet>
      </div>
    );
  }
};

const defaultRender = ({ name, state, label, description, disabled }: { name: string; state: 'default' | 'error' | 'warning'; label: string; description: string; disabled?: boolean }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople = query === '' ? people : people.filter((person) => person.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`${disabled ? 'h-24' : 'h-72'}`}>
      <FieldSet>
        <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson} disabled={disabled}>
          <AutoCompleteLabel>
            {label} <span className='font-light ps-1'>{description}</span>
          </AutoCompleteLabel>
          <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} />
          <AutoCompleteOptions onClose={() => setQuery('')}>
            {filteredPeople.map((person) => (
              <AutoCompleteOption key={person} value={person}>
                {person}
              </AutoCompleteOption>
            ))}
          </AutoCompleteOptions>
        </AutoComplete>
      </FieldSet>
    </div>
  );
};

export const Disabled = {
  args: {
    name: 'default-button',
    state: 'default',
    label: 'Label',
    disabled: true
  },
  render: defaultRender
};

export const Warning = {
  args: {
    name: 'warning-button',
    state: 'warning',
    placeholder: 'Placeholder text',
    label: 'Warning',
    containerHeight: '72'
  },
  render: defaultRender
};

export const Error = {
  args: {
    name: 'error-button',
    state: 'error',
    placeholder: 'Placeholder text',
    label: 'Error'
  },
  render: defaultRender
};

export const NoLabel = {
  args: {
    name: 'no-label-button',
    state: 'default',
    placeholder: 'Placeholder text'
  },
  render: defaultRender
};

export const Description = {
  args: {
    name: 'description-button',
    state: 'default',
    label: 'Label',
    description: '(required)',
    placeholder: 'Placeholder text'
  },
  render: defaultRender
};
