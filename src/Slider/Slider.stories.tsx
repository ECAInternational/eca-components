import React, { useState } from 'react';
import { Slider, SliderProps } from './Slider.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';
import { Label } from '../Form/Label.tsx';

export default {
  component: Slider,
  title: 'Components/Slider',
  parameters: {
    componentSubtitle: 'Slider'
  },
  argTypes: {
    id: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the slider'
    },
    min: {
      control: 'number',
      description: 'Minimum value of the slider'
    },
    max: {
      control: 'number',
      description: 'Maximum value of the slider'
    },
    marks: {
      control: 'array',
      description: 'Marks for the slider'
    },
    variant: {
      control: 'select',
      options: ['discrete'],
      description: 'Variant of the slider',
      defaultValue: { summary: 'discrete' }
    },
    value: {
      control: 'number',
      description: 'Value of the slider'
    }
  },
  args: {
    disabled: false,
    min: 0,
    max: 5,
    value: 2,
    marks: [
      { value: 0, label: 'Value 0' },
      { value: 1, label: 'Value 1' },
      { value: 2, label: 'Value 2' },
      { value: 3, label: 'Value 3' },
      { value: 4, label: 'Value 4' },
      { value: 5, label: 'Value 5' }
    ]
  },
  render: (args: SliderProps) => {
    const [value, setValue] = useState<number>(args.value);
    return <Slider {...args} value={value} onChange={setValue} />;
  }
};

export const Default = {
  args: {
    name: 'default-slider'
  }
};

export const Disabled = {
  args: {
    name: 'disabled-slider',
    disabled: true
  }
};

export const Discrete = {
  args: {
    name: 'discrete-slider',
    variant: 'discrete'
  }
};

export const WithLabel = {
  args: {
    name: 'slider-with-label',
    min: 0,
    max: 5,
    value: 2,
    marks: [
      { value: 0, label: 'Value 0' },
      { value: 1, label: 'Value 1' },
      { value: 2, label: 'Value 2' },
      { value: 3, label: 'Value 3' },
      { value: 4, label: 'Value 4' },
      { value: 5, label: 'Value 5' }
    ]
  },
  render: (args: SliderProps) => {
    const [value, setValue] = useState<number>(args.value);
    return (
      <FieldSet>
        <Label htmlFor={args.name}>Label</Label>
        <Slider {...args} value={value} onChange={setValue} />
      </FieldSet>
    );
  }
};

export const WithDescription = {
  args: {
    name: 'slider-with-description',
    min: 0,
    max: 5,
    value: 2,
    marks: [
      { value: 0, label: 'Value 0' },
      { value: 1, label: 'Value 1' },
      { value: 2, label: 'Value 2' },
      { value: 3, label: 'Value 3' },
      { value: 4, label: 'Value 4' },
      { value: 5, label: 'Value 5' }
    ]
  },
  render: (args: SliderProps) => {
    const [value, setValue] = useState<number>(args.value);
    return (
      <FieldSet>
        <Label htmlFor={args.name}>
          Label<span className='ps-1 paragraph-sm-lighter'>Description</span>
        </Label>
        <Slider {...args} value={value} onChange={setValue} />
      </FieldSet>
    );
  }
};
