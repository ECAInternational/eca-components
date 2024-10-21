import React, { useState } from 'react';
import { AutoComplete } from './AutoComplete.tsx';
import { FieldSet, Label } from '../Form/index.ts';
import { AutoCompleteInput } from './AutoComplete.Input.tsx';
import { AutoCompleteOptions } from './AutoComplete.Options.tsx';
import { AutoCompleteOption } from './AutoComplete.Option.tsx';
import { HighlightMatched } from './HighlightMatched.tsx';
import { DefaultOptionViewer } from './DefaultOptionViewer.tsx';

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
    form: {
      table: { disable: true }
    },
    as: {
      table: { disable: true }
    },
    refName: {
      table: { disable: true }
    },
    nullable: {
      table: { disable: true }
    },
    onChange: {
      table: { disable: true }
    },
    by: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    },
    __demoMode: {
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
    const [selectedPerson, setSelectedPerson] = useState('');
    const [query, setQuery] = useState('');

    const filteredPeople = query === '' ? people : people.filter((person) => person.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className='h-72'>
        <FieldSet disabled={disabled}>
          <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson}>
            <Label>
              {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
            </Label>
            <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} />
            <AutoCompleteOptions onClose={() => setQuery('')}>
              {filteredPeople.length === 0 && (
                <AutoCompleteOption value='' disabled>
                  No Options
                </AutoCompleteOption>
              )}
              {filteredPeople.map((person) => (
                <AutoCompleteOption key={person} value={person}>
                  <DefaultOptionViewer>
                    <HighlightMatched content={person} query={query} />
                  </DefaultOptionViewer>
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
    const [selectedPerson, setSelectedPerson] = useState([]);
    const [query, setQuery] = useState('');

    const filteredPeople = query === '' ? people : people.filter((person) => person.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className='h-72'>
        <FieldSet>
          <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson} multiple>
            <Label>
              {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
            </Label>
            <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} />
            <AutoCompleteOptions onClose={() => setQuery('')}>
              {filteredPeople.length === 0 && (
                <AutoCompleteOption value='' disabled>
                  No Options
                </AutoCompleteOption>
              )}
              {filteredPeople.map((person) => (
                <AutoCompleteOption key={person} value={person}>
                  <DefaultOptionViewer>
                    <HighlightMatched content={person} query={query} />
                  </DefaultOptionViewer>
                </AutoCompleteOption>
              ))}
            </AutoCompleteOptions>
          </AutoComplete>
        </FieldSet>
      </div>
    );
  }
};

export const MultipleObject = {
  args: {
    name: 'default-button',
    state: 'default',
    label: 'Label'
  },
  render: ({ name, state, label }: { name: string; state: 'default' | 'error' | 'warning'; label: string }) => {
    interface Employee {
      name: string;
      role: string;
      id: number;
    }
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [query, setQuery] = useState('');
    const allEmployees: Employee[] = [
      { name: 'Durward Reynolds', role: 'CEO', id: 1 },
      { name: 'Kenton Towne', role: 'CFO', id: 2 },
      { name: 'Therese Wunsch', role: 'Tech Lead', id: 3 },
      { name: 'Benedict Kessler', role: 'Product Owner', id: 4 },
      { name: 'Katelyn Rohan', role: 'Developer', id: 5 }
    ];

    const displayName = (employee: Employee) => {
      if (employee && employee.name) {
        return `${employee.name} - ${employee.role}`;
      }
      return '';
    };

    const filteredEmployees = query === '' ? allEmployees : allEmployees.filter((employee) => employee.name.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className='h-72'>
        <FieldSet>
          <AutoComplete name={name} value={employees} by={(employeeA, employeeB) => (employeeA as Employee).id === (employeeB as Employee).id} itemKey={(employee) => `${(employee as Employee).id}`} onChange={setEmployees} multiple>
            <Label>
              {label} <span className='ps-1 paragraph-sm-lighter'>Description</span>
            </Label>
            <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} displayValue={displayName} />
            <AutoCompleteOptions onClose={() => setQuery('')}>
              {filteredEmployees.length === 0 && (
                <AutoCompleteOption value='' disabled>
                  No Options
                </AutoCompleteOption>
              )}
              {filteredEmployees.map((employee) => (
                <AutoCompleteOption key={employee.id} value={employee}>
                  <DefaultOptionViewer>
                    <HighlightMatched content={displayName(employee)} query={query} />
                  </DefaultOptionViewer>
                </AutoCompleteOption>
              ))}
            </AutoCompleteOptions>
          </AutoComplete>
        </FieldSet>
      </div>
    );
  }
};

const defaultRender = ({ name, state, label, description, disabled, defaultValue }: { name: string; state: 'default' | 'error' | 'warning'; label: string; description: string; disabled?: boolean; defaultValue?: string }) => {
  const [selectedPerson, setSelectedPerson] = useState(defaultValue || '');
  const [query, setQuery] = useState('');

  const filteredPeople = query === '' ? people : people.filter((person) => person.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`${disabled ? 'h-24' : 'h-72'}`}>
      <FieldSet disabled={disabled}>
        <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson}>
          <Label>
            {label} <span className='ps-1 paragraph-sm-lighter'>{description}</span>
          </Label>
          <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} />
          <AutoCompleteOptions onClose={() => setQuery('')}>
            {filteredPeople.length === 0 && (
              <AutoCompleteOption value='' disabled>
                No Options
              </AutoCompleteOption>
            )}
            {filteredPeople.map((person) => (
              <AutoCompleteOption key={person} value={person}>
                <DefaultOptionViewer>
                  <HighlightMatched content={person} query={query} />
                </DefaultOptionViewer>
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

export const DefaultValue = {
  args: {
    name: 'default-value-button',
    state: 'default',
    label: 'Label',
    defaultValue: 'Durward Reynolds'
  },
  render: defaultRender
};
