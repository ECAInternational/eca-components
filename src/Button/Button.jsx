import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  const {
    variant,
    type = 'button',
    size = 'medium',
    className = '',
    children,
    ...others
  } = props;

  const bg = {
    primary: 'bg-primary-main border-0 text-default-white',
    outline:
      'bg-transparent border border-neutral-detail-bolder text-neutral-detail-bolder',
    ghost: 'bg-transparent border-0 text-neutral-detail-boldest'
  };

  const disabled = {
    primary: 'disabled:bg-controls-bg-disabled disabled:text-neutral-detail',
    outline:
      'disabled:controls-border-disabled disabled:text-controls-content-disabled',
    ghost: 'disabled:text-controls-content-disabled'
  };

  const states = {
    primary: 'hover:bg-primary-bold focus:bg-primary-bold',
    outline: 'hover:bg-neutral-body',
    ghost: 'hover:bg-controls-highlight-palest'
  };

  const sizes = {
    small: 'text-sm rounded px-4 py-2',
    medium: 'text-base rounded px-5 py-3',
    large: 'text-lg rounded-md px-6 py-4'
  };

  return (
    <button
      className={`transition btn
      ${bg[variant]} ${disabled[variant]} 
      ${states[variant]} ${sizes[size]} ${className}`}
      type={type}
      {...others}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
