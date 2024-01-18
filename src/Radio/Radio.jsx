import React from 'react';
import PropTypes from 'prop-types';

export function Radio(props) {
  const { label, id, value, checked, name, ...others } = props;

  return (
    <div className='flex items-center text-neutral-body has-[:disabled]:text-controls-content-disabled'>
      <input
        type='radio'
        id={id}
        value={value}
        name={name}
        checked={checked}
        {...others}
        className='peer appearance-none w-6 h-6 border border-controls-border rounded-full place-content-center grid

          disabled:border-neutral-detail-paler disabled:hover:outline-0 disabled:cursor-not-allowed
          hover:border-controls-border-hover hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-neutral-detail-paler hover:outline-offset-transparent
          focus-visible:border-controls-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-controls-border
          active:border-controls-border-hover active:[&:not(:disabled)]:bg-neutral-detail-palest active:outline active:outline-4 active:outline-offset-0 active:outline-neutral-detail-palest

          before:content[""] before:w-3.5 before:h-3.5 before:bg-controls-highlight before:rounded-full before:transition before:scale-0

          checked:border-controls-highlight
          checked:before:scale-100
          checked:disabled:border-controls-bg-disabled before:checked:disabled:bg-controls-bg-disabled
          checked:hover:outline-controls-highlight-paler checked:hover:border-controls-highlight
          checked:focus-visible:outline-controls-highlight checked:focus-visible:border-controls-highlight
          checked:active:outline-neutral-detail-palest'
      />
      {label && (
        <label htmlFor={id} className='text-sm font-light ps-2'>
          {label}
        </label>
      )}
    </div>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string
};
