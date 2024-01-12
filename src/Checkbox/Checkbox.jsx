import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox(props) {
  const { leftLabel, rightLabel, id, disabled, ...others } = props;

  return (
    <div>
      {leftLabel && (
        <label htmlFor={id} className={`text-sm font-light se-2 ${disabled ? 'text-controls-content-disabled' : 'text-neutral-body'}`}>
          {leftLabel}
        </label>
      )}

      <div>
        <input
          type='checkbox'
          id={id}
          disabled={disabled}
          {...others}
          className='peer shrink-0 mt-1 relative appearance-none w-6 h-6 border rounded unchecked:border-controls-border
        checked:border-controls-highlight checked:bg-controls-highlight
        hover:ring-2 hover:ring-offset-1
        focus-visible:ring-2 focus-visible:ring-offset-1
        checked:hover:ring-controls-highlight-paler
        unchecked:hover:ring-controls-border-hover
        checked:focus-visible:ring-controls-highlight
        unchecked:focus-visible:border-controls-border
        active:border-2 active:border-controls-highlight-palest'
        />
        <i className='fi fi-br-check w-6 h-6 mt-1 text-controls-highlight-palest absolute hidden peer-checked:block' />
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
  disabled: PropTypes.bool.isRequired,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
};
