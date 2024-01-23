import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox(props) {
  const { label, alignment = 'left', id, checked, disabled = false, ...others } = props;

  return (
    <div className='flex items-center text-neutral-body has-[:disabled]:text-controls-content-disabled'>
      {label && alignment === 'left' && (
        <label htmlFor={id} className='text-sm font-light pe-2 transition-all'>
          {label}
        </label>
      )}

      <div className='flex items-center'>
        <input
          type='checkbox'
          id={id}
          disabled={disabled}
          checked={checked}
          {...others}
          className='peer cursor-pointer appearance-none w-6 h-6 border border-controls-border rounded transition
          outline outline-2 outline-offset-2 outline-default-transparent outline-offset-default-transparent

          disabled:border-neutral-detail-paler disabled:hover:outline-0 disabled:cursor-not-allowed
          hover:border-controls-border-hover hover:outline-neutral-detail-paler
          focus-visible:border-controls-border focus-visible:outline-controls-border
          active:border-controls-border-hover active:bg-neutral-detail-palest active:outline-4 active:outline-offset-0 active:outline-neutral-detail-palest

          checked:border-0 checked:bg-controls-highlight
          checked:disabled:bg-controls-bg-disabled checked:disabled:border-controls-bg-disabled
          checked:hover:outline-controls-highlight-paler
          checked:focus-visible:outline-controls-highlight
          checked:active:bg-controls-highlight

          indeterminate:border-0 indeterminate:bg-controls-highlight
          indeterminate:disabled:bg-neutral-detail-paler
          indeterminate:hover:outline-controls-highlight-paler
          indeterminate:focus-visible:outline-controls-highlight
          indeterminate:active:bg-controls-highlight'
        />
        <i className='fi fi-br-minus w-6 h-6 absolute flex items-center place-content-center pointer-events-none transition-all text-controls-highlight-palest peer-disabled:text-controls-content-disabled opacity-0 scale-0 peer-indeterminate:scale-100 peer-indeterminate:opacity-100' />
        <i className='fi fi-br-check w-6 h-6 absolute flex items-center place-content-center pointer-events-none transition-all text-controls-highlight-palest peer-disabled:text-controls-content-disabled opacity-0 scale-0 peer-checked:scale-100 peer-checked:opacity-100' />
      </div>
      {label && alignment === 'right' && (
        <label htmlFor={id} className='text-sm font-light ps-2'>
          {label}
        </label>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'right'])
};
