import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox(props) {
  const { leftLabel, rightLabel, id, checked, disabled, ...others } = props;

  return (
    <div className='flex items-center'>
      {leftLabel && (
        <label htmlFor={id} className={`text-sm font-light pe-2 ${disabled ? 'text-controls-content-disabled' : 'text-neutral-body'}`}>
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
          className='peer cursor-pointer appearance-none w-6 h-6 border rounded transition-all
          unchecked:border-controls-border
        checked:border-controls-highlight checked:bg-controls-highlight
        hover:ring-2 hover:ring-offset-1
        focus-visible:ring-2 focus-visible:ring-offset-1
        checked:hover:ring-controls-highlight-paler
        unchecked:hover:ring-controls-border-hover
        checked:focus-visible:ring-controls-highlight
        unchecked:focus-visible:border-controls-border
        active:border-2 active:border-controls-highlight-palest'
        />
        <i
          className='fi fi-br-check w-6 h-6 text-controls-highlight-palest
        absolute top-3 left-3.5 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100'
        />
      </div>
      {rightLabel && (
        <label htmlFor={id} className={`text-sm font-light ps-2  ${disabled ? 'text-controls-content-disabled' : 'text-neutral-body'}`}>
          {rightLabel}
        </label>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
};
