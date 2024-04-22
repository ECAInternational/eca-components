import React from 'react';
import { Radio, RadioProps } from './Radio.tsx';

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

export const Label = {
  args: {
    label: 'A Label',
    name: 'label',
    value: 'label'
  }
};

export const Vertical = {
  args: {
    name: 'vertical'
  },
  render: (args: RadioProps) => (
    <div className='flex flex-col justify-start'>
      <div className='py-2'>
        <Radio {...args} label='Apples' name='apples' value='apples' defaultChecked />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Bananas' name='bananas' value='bananas' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Oranges' name='oranges' value='oranges' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Mangos' name='mangos' value='mangos' />
      </div>
      <div className='py-2'>
        <Radio {...args} label='Strawberries' name='strawberries' value='strawberries' />
      </div>
    </div>
  )
};

export const Horizontal = {
  args: {
    name: 'horizontal'
  },
  render: (args: RadioProps) => (
    <div className='flex flex-row items-center'>
      <span className='pe-4'>
        <Radio {...args} label='Apples' name='apples2' value='apples' defaultChecked />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Bananas' name='bananas2' value='bananas' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Oranges' name='oranges2' value='oranges' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Mangos' name='mangos2' value='mangos' />
      </span>
      <span className='pe-4'>
        <Radio {...args} label='Strawberries' name='strawberries2' value='strawberries' />
      </span>
    </div>
  )
};
