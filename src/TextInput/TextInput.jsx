import React from 'react';
import PropTypes from 'prop-types';

export function TextInput(props) {
  const { state = 'default', type = 'text', label, description, icon, prefix, suffix, id, disabled, ...others } = props;

  const border = {
    default: 'border-controls-border',
    warning: 'border-states-warning-accent',
    error: 'border-states-error-accent'
  };

  const hover = {
    default: 'hover:outline-neutral-detail-paler',
    warning: 'hover:border-states-warning-accent hover:outline-states-warning',
    error: 'hover:border-states-error-accent hover:outline-states-error'
  };

  const focus = {
    default: 'focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight',
    warning: 'focus-within:outline-states-warning-accent hover:focus-within:outline-states-warning-accent',
    error: 'focus-within:outline-states-error-accent hover:focus-within:outline-states-error-accent'
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className={`text-sm block py-1 ${disabled ? 'text-controls-content-disabled' : 'text-neutral-detail-bolder'}`}>
          {label}
          {description && <span className='font-light ps-1'>{description}</span>}
        </label>
      )}

      <span
        className={`p-3 text-sm text-controls-placeholder-text font-regular border rounded relative flex
        hover:outline hover:outline-2 hover:outline-offset-2
        focus-within:outline focus-within:outline-2 focus-within:outline-offset-2
        has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:border-controls-border-disabled has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
      >
        {prefix && <span className='pe-1 flex items-center'>{prefix}</span>}
        {icon && <i className={`fi ${icon} flex items-center pe-2.5`} />}

        <input
          id={id}
          type={type}
          disabled={disabled}
          {...others}
          className={`font-light w-full rounded focus-visible:outline-0 bg-transparent text-neutral-body
               placeholder-controls-placeholder-text placeholder-opacity-40 focus:placeholder-transparent 
               disabled:placeholder-controls-content-disabled disabled:bg-neutral-layer-1`}
        />
        {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center pe-2.5 text-states-warning-accent' />}
        {state === 'error' && <i className='fi fi-rr-exclamation flex items-center pe-2.5 text-states-error-accent' />}
        {suffix && <span className='ps-3 flex items-center'>{suffix}</span>}
      </span>
    </>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  state: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string,
  description: PropTypes.string
};
