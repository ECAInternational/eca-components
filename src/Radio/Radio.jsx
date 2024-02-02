import React from 'react';
import PropTypes from 'prop-types';

export function Radio(props) {
  const { name, id, label, value, checked, ...others } = props;

  return (
    <div className='flex items-center text-neutral-body has-[:disabled]:text-controls-content-disabled'>
      <input
        type='radio'
        id={id || name}
        name={name}
        value={value}
        checked={checked}
        {...others}
        className='peer appearance-none cursor-pointer w-6 h-6 border border-controls-border rounded-full place-content-center grid transition
          outline outline-2 outline-offset-2 outline-default-transparent outline-offset-default-transparent

          disabled:border-neutral-detail-paler disabled:hover:outline-0 disabled:cursor-not-allowed
          hover:border-controls-border-hover hover:outline-neutral-detail-paler
          focus-visible:border-controls-border focus-visible:outline-controls-border
          active:border-controls-border-hover active:[&:not(:disabled)]:bg-neutral-detail-palest active:outline-4 active:outline-offset-0 active:outline-neutral-detail-palest

          before:content[""] before:w-3.5 before:h-3.5 before:bg-controls-highlight before:rounded-full before:transition before:scale-0

          checked:border-controls-highlight
          checked:before:scale-100
          checked:disabled:border-controls-bg-disabled before:checked:disabled:bg-controls-bg-disabled
          checked:hover:outline-controls-highlight-paler checked:hover:border-controls-highlight
          checked:focus-visible:outline-controls-highlight checked:focus-visible:border-controls-highlight
          checked:active:outline-neutral-detail-palest'
      />
      {label && (
        <label htmlFor={id} className='text-sm font-light ps-2 transition-all'>
          {label}
        </label>
      )}
    </div>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool
};
