import React from 'react';
import PropTypes from 'prop-types';

export function TextInput(props) {
  const { name, id, label, state = 'default', type = 'text', description, icon, prefix, suffix, ...others } = props;

  const border = {
    default: 'border-controls-border',
    warning: 'border-states-warning',
    error: 'border-states-error'
  };

  const hover = {
    default: 'hover:outline-neutral-detail-paler',
    warning: 'hover:border-states-warning hover:outline-states-warning-paler',
    error: 'hover:border-states-error hover:outline-states-error-paler'
  };

  const focus = {
    default: 'focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight',
    warning: 'focus-within:outline-states-warning hover:focus-within:outline-states-warning',
    error: 'focus-within:outline-states-error hover:focus-within:outline-states-error'
  };

  return (
    <div className='text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled'>
      {label && (
        <label htmlFor={id} className='text-sm block py-1 transition-all'>
          {label}
          {description && <span className='font-light ps-1'>{description}</span>}
        </label>
      )}

      <span
        className={`p-3 text-sm text-controls-placeholder-text font-regular border rounded relative flex transition
        outline outline-2 outline-offset-2 outline-default-transparent
        has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:border-neutral-detail-paler has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
      >
        {prefix && <span className='pe-1 flex items-center'>{prefix}</span>}
        {icon && <i className={`fi ${icon} text-neutral-detail-bold flex items-center pe-2.5`} />}

        <input
          id={id || name}
          name={name}
          type={type}
          {...others}
          className={`font-light w-full rounded focus-visible:outline-0 bg-default-transparent text-neutral-body
               placeholder-controls-placeholder-text placeholder-opacity-60 focus:placeholder-default-transparent 
               disabled:placeholder-controls-content-disabled disabled:bg-neutral-layer-1 disabled:placeholder-opacity-60 disabled:text-opacity-60 disabled:cursor-not-allowed`}
        />
        {suffix && <span className='flex pe-2.5 items-center'>{suffix}</span>}
        {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
        {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
      </span>
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  description: PropTypes.string
};
