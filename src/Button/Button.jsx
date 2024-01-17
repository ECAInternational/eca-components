import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  const { variant, type = 'button', size = 'medium', className = '', children, ...others } = props;

  const bg = {
    primary: 'bg-primary-main border-0 text-default-white',
    outline: 'bg-transparent border border-neutral-detail-boldest text-neutral-detail-boldest',
    ghost: 'bg-transparent border-2 border-transparent text-neutral-detail-boldest'
  };

  const disabled = {
    primary: 'disabled:bg-controls-bg-disabled',
    outline: 'disabled:border-controls-content-disabled',
    ghost: ''
  };

  const hover = {
    primary: 'hover:bg-primary-accent',
    outline: 'hover:bg-neutral-detail-boldest hover:text-neutral-layer-1',
    ghost: 'hover:bg-controls-highlight-palest hover:text-neutral-detail-boldest'
  };

  const active = {
    primary: 'active:bg-primary-accent',
    outline: 'active:bg-neutral-detail-boldest active:text-neutral-layer-1',
    ghost: 'active:bg-controls-highlight-palest active:text-neutral-detail-boldest'
  };

  const focus = {
    primary: 'focus-visible:outline focus-visible:outline-primary-main focus-visible:outline-2 focus-visible:outline-offset-2',
    outline: 'focus-visible:text-neutral-detail-boldest focus-visible:outline focus-visible:outline-neutral-detail-boldest focus-visible:outline-2 focus-visible:outline-offset-2',
    ghost: 'focus-visible:text-neutral-detail-boldest focus-visible:border-neutral-detail-boldest'
  };

  const sizes = {
    small: 'text-sm rounded px-4 py-2',
    medium: 'text-sm rounded px-5 py-3',
    large: 'text-base rounded-md px-6 py-4'
  };

  return (
    <button
      className={`transition flex items-center justify-center font-medium
      active:scale-92 
      disabled:text-controls-content-disabled disabled:cursor-not-allowed
      ${bg[variant]} ${disabled[variant]} 
      ${hover[variant]} ${active[variant]} ${focus[variant]}  
      ${sizes[size]} ${className}`}
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
