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
    disabled: false
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
        <Radio {...args} label='Radio 1' id='one' value='one' defaultChecked />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Radio 2' id='two' value='two' />
      </div>
    </div>
  )
};

export const Selected = {
  args: {
    checked: true,
    id: 'selected',
    name: 'selected',
    value: 'selected'
  }
};

export const Unselected = {
  args: {
    checked: false,
    id: 'unselected',
    name: 'unselected',
    value: 'unselected'
  }
};

export const Label = {
  args: {
    label: 'A Label',
    id: 'label',
    name: 'label',
    value: 'label'
  }
};

export const Vertical = {
  args: {
    name: 'vertical'
  },
  render: (args) => (
    <div className='flex flex-col justify-start'>
      <div className='py-2'>
        <Radio {...args} label='Apples' id='apples' name='apples' value='apples' defaultChecked />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Bananas' id='bananas' name='bananas' value='bananas' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Oranges' id='oranges' name='oranges' value='oranges' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Mangos' id='mangos' name='mangos' value='mangos' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Strawberries' id='strawberries' name='strawberries' value='strawberries' />
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
        <Radio {...args} label='Apples' id='apples2' name='apples2' value='apples' defaultChecked />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Bananas' id='bananas2' name='bananas2' value='bananas' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Oranges' id='oranges2' name='oranges2' value='oranges' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Mangos' id='mangos2' name='mangos2' value='mangos' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Strawberries' id='strawberries2' name='strawberries2' value='strawberries' />
      </span>
    </div>
  )
};
