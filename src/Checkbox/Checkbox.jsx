import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox(props) {
  const { label, id, disabled, ...others } = props;

  const border = {
    default: 'border-controls-border',
    warning: 'border-states-warning-accent',
    error: 'border-states-error-accent'
  };

  const hover = {
    default: 'hover:border-controls-border-hover',
    warning: 'hover:border-states-warning-accent',
    error: 'hover:border-states-error-accent'
  };

  const focus = {
    default: 'focus-within:border-controls-highlight focus-within:outline focus-within:outline-controls-highlight focus-within:outline-2 focus-within:outline-offset-2',
    warning: 'focus-within:outline focus-within:outline-states-warning-accent focus-within:outline-2 focus-within:outline-offset-2',
    error: 'focus-within:outline focus-within:outline-states-error-accent focus-within:outline-2 focus-within:outline-offset-2'
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className={`block py-1 ${disabled ? 'text-controls-content-disabled' : 'text-neutral-detail-bolder'}`}>
          {label}
        </label>
      )}

      <span
        className={`text-sm text-controls-placeholder-text p-3 font-regular border rounded relative flex
        has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:border-controls-border-disabled has-[:disabled]:text-controls-content-disabled 
        ${hover[state]} ${border[state]} ${focus[state]}`}
      >
        <input id={id} disabled={disabled} {...others} />
      </span>
    </>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string
};
