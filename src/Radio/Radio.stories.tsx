import React from 'react';
import { Radio, RadioProps } from './Radio.tsx';
import { Label } from '../Form/Label.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';

export default {
  component: Radio,
  title: 'Components/Radio',
  parameters: {
    componentSubtitle: 'Basic Radio Button'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    id: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    checked: {
      table: { disable: true }
    },
    label: {
      table: { disable: true }
    },
    onChange: {
      action: true,
      table: { disable: true }
    }
  },
  args: {
    disabled: false
  }
};

export const Default = {
  args: {
    name: 'default'
  },
  render: (args: RadioProps) => (
    <FieldSet className='flex flex-col justify-start'>
      <div className='flex items-center py-2'>
        <Radio {...args} id='one' value='one' defaultChecked />
        <Label htmlFor='one' className='ps-2 transition-all paragraph-sm-lighter'>
          Radio 1
        </Label>
      </div>
      <div className='flex items-center py-2'>
        <Radio {...args} id='two' value='two' />
        <Label htmlFor='two' className='ps-2 transition-all paragraph-sm-lighter'>
          Radio 2
        </Label>
      </div>
    </FieldSet>
  )
};

export const Selected = {
  args: {
    checked: true,
    name: 'selected',
    value: 'selected'
  }
};

export const Unselected = {
  args: {
    checked: false,
    name: 'unselected',
    value: 'unselected'
  }
};

export const Vertical = {
  args: {
    name: 'vertical'
  },
  render: (args: RadioProps) => (
    <FieldSet className='flex flex-col justify-start'>
      <div className='flex items-center py-2'>
        <Radio {...args} id='apples' value='apples' defaultChecked />
        <Label htmlFor='apples' className='ps-2 transition-all paragraph-sm-lighter'>
          Apples
        </Label>
      </div>
      <div className='flex items-center py-2'>
        <Radio {...args} id='bananas' value='bananas' />
        <Label htmlFor='bananas' className='ps-2 transition-all paragraph-sm-lighter'>
          Bananas
        </Label>
      </div>
      <div className='flex items-center py-2'>
        <Radio {...args} id='oranges' value='oranges' />
        <Label htmlFor='oranges' className='ps-2 transition-all paragraph-sm-lighter'>
          Oranges
        </Label>
      </div>
      <div className='flex items-center py-2'>
        <Radio {...args} id='mangos' value='mangos' />
        <Label htmlFor='mangos' className='ps-2 transition-all paragraph-sm-lighter'>
          Mangos
        </Label>
      </div>
      <div className='flex items-center py-2'>
        <Radio {...args} id='strawberries' value='strawberries' />
        <Label htmlFor='strawberries' className='ps-2 transition-all paragraph-sm-lighter'>
          Strawberries
        </Label>
      </div>
    </FieldSet>
  )
};

export const Horizontal = {
  args: {
    name: 'horizontal'
  },
  render: (args: RadioProps) => (
    <FieldSet className='flex flex-row items-center'>
      <span className='flex items-center pe-4'>
        <Radio {...args} id='apples2' value='apples' defaultChecked />
        <Label htmlFor='apples2' className='ps-2 transition-all paragraph-sm-lighter'>
          Apples
        </Label>
      </span>
      <span className='flex items-center pe-4'>
        <Radio {...args} id='bananas2' value='bananas' />
        <Label htmlFor='bananas2' className='ps-2 transition-all paragraph-sm-lighter'>
          Bananas
        </Label>
      </span>
      <span className='flex items-center pe-4'>
        <Radio {...args} id='oranges2' value='oranges' />
        <Label htmlFor='oranges2' className='ps-2 transition-all paragraph-sm-lighter'>
          Oranges
        </Label>
      </span>
      <span className='flex items-center pe-4'>
        <Radio {...args} id='mangos2' value='mangos' />
        <Label htmlFor='mangos2' className='ps-2 transition-all paragraph-sm-lighter'>
          Mangos
        </Label>
      </span>
      <span className='flex items-center pe-4'>
        <Radio {...args} id='strawberries2' value='strawberries' />
        <Label htmlFor='strawberries2' className='ps-2 transition-all paragraph-sm-lighter'>
          Strawberries
        </Label>
      </span>
    </FieldSet>
  )
};
