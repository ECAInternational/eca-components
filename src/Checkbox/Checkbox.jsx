import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox(props) {
  const { leftLabel, rightLabel, id, checked, disabled = false, ...others } = props;

  return (
    <div className='flex items-center text-neutral-body has-[:disabled]:text-controls-content-disabled'>
      {leftLabel && (
        <label htmlFor={id} className='text-sm font-light pe-2'>
          {leftLabel}
        </label>
      )}

      <div className='flex items-center'>
        <input
          type='checkbox'
          id={id}
          disabled={disabled}
          checked={checked}
          {...others}
          className='peer cursor-pointer appearance-none w-6 h-6 border border-controls-border rounded transition-all

          disabled:border-neutral-detail-paler disabled:hover:ring-0 disabled:cursor-not-allowed
          hover:border-controls-border-hover hover:ring-2 hover:ring-offset-2 hover:ring-neutral-detail-paler
          focus-visible:border-controls-border focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-controls-border
          active:border-controls-border active:bg-neutral-detail-palest active:ring active:ring-offset-1 active:ring-offset-neutral-detail-palest active:ring-neutral-detail-palest

          checked:border-0 checked:bg-controls-highlight
          checked:disabled:bg-neutral-detail-paler
          checked:hover:ring-controls-highlight-paler
          checked:focus-visible:ring-controls-highlight
          checked:active:bg-controls-highlight

          indeterminate:border-0 indeterminate:bg-controls-highlight
          indeterminate:disabled:bg-neutral-detail-paler
          indeterminate:hover:ring-controls-highlight-paler
          indeterminate:focus-visible:ring-controls-highlight
          indeterminate:active:bg-controls-highlight'
        />
        <i className='fi fi-br-minus w-6 h-6 text-controls-highlight-palest peer-disabled:text-controls-content-disabled absolute flex items-center place-content-center transition-opacity opacity-0 pointer-events-none peer-indeterminate:opacity-100' />
        <i className='fi fi-br-check w-6 h-6 text-controls-highlight-palest peer-disabled:text-controls-content-disabled absolute flex items-center place-content-center transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100' />
      </div>
      {rightLabel && (
        <label htmlFor={id} className='text-sm font-light ps-2'>
          {rightLabel}
        </label>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
};
