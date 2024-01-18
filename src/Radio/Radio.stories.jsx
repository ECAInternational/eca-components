import React from 'react';
import { Radio } from './Radio';

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
    disabled: false,
    value: 'test'
  }
};

export const Default = {
  args: {
    name: 'default',
    id: 'default'
  },
  render: (args) => (
    <div className='flex flex-col justify-start'>
      <div className='py-2'>
        <Radio {...args} label='Radio 1' value='one' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Radio 2' value='two' />
      </div>
    </div>
  )
};

export const Selected = {
  args: {
    checked: true,
    id: 'selected',
    name: 'selected'
  }
};

export const Unselected = {
  args: {
    checked: false,
    id: 'unselected',
    name: 'unselected'
  }
};

export const Label = {
  args: {
    label: 'A Label',
    id: 'label',
    name: 'label'
  }
};

export const Vertical = {
  args: {
    name: 'vertical'
  },
  render: (args) => (
    <div className='flex flex-col justify-start'>
      <div className='py-2'>
        <Radio {...args} label='Apples' value='apples' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Bananas' value='bananas' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Oranges' value='oranges' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Mangos' value='mangos' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Strawberries' value='strawberries' />
      </div>
    </div>
  )
};

export const Horizontal = {
  args: {
    name: 'horizontal'
  },
  render: (args) => (
    <div className='flex flex-row items-center'>
      <span className='pe-4'>
        <Radio {...args} label='Apples' value='apples' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Bananas' value='bananas' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Oranges' value='oranges' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Mangos' value='mangos' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Strawberries' value='strawberries' />
      </span>
    </div>
  )
};
