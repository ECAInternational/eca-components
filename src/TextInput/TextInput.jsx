import React from 'react';
import PropTypes from 'prop-types';

export function TextInput(props) {
  const {
    state = 'default',
    type = 'text',
    className = '',
    label,
    icon,
    prefix,
    suffix,
    id,
    disabled,
    ...others
  } = props;

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
    default:
      'focus:border-controls-highlight focus:outline focus:outline-controls-highlight focus:outline-2 focus:outline-offset-2',
    warning:
      'focus:outline focus:outline-states-warning-accent focus:outline-2 focus:outline-offset-2',
    error:
      'focus:outline focus:outline-states-error-accent focus:outline-2 focus:outline-offset-2'
  };

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={`block ${
            disabled
              ? 'text-controls-content-disabled'
              : 'text-neutral-detail-bolder'
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`relative ${(icon || prefix) && 'mb-4 flex items-stretch'}`}
      >
        {icon && (
          <i
            className={`fi ${icon} absolute inset-y-0 start-0 flex items-center ps-3.5 ${
              disabled && 'text-controls-content-disabled'
            }`}
          />
        )}

        <input
          id={id}
          type={type}
          disabled={disabled}
          {...others}
          className={`peer order-2 border rounded p-3 text-sm font-light placeholder-neutral-detail-bolder 
               disabled:bg-neutral-layer-1 disabled:border-controls-border-disabled disabled:placeholder-controls-content-disabled 
               focus:placeholder-transparent
               ${icon && 'ps-10'} ${hover[state]} ${border[state]} ${
                 focus[state]
               } ${className}`}
        />

        {prefix && (
          <span
            className={`flex order-2 items-center border-y border-s rounded-l ${
              disabled && 'text-controls-content-disabled'
            }`}
          >
            {prefix}
          </span>
        )}

        {suffix && (
          <span
            className={`flex items-center text-center ${
              disabled && 'text-controls-content-disabled'
            }`}
          >
            {suffix}
          </span>
        )}
      </div>
    </>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string,
  className: PropTypes.string
};
