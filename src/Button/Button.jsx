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
    primary: 'bg-primary-main border-0 text-default-white text-sm font-medium',
    outline:
      'bg-transparent border border-neutral-detail-boldest text-neutral-detail-boldest text-sm font-medium',
    ghost:
      'bg-transparent border-0 text-neutral-detail-boldest text-sm font-medium'
  };

  const disabled = {
    primary:
      'disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled',
    outline:
      'disabled:border-controls-content-disabled disabled:text-controls-content-disabled',
    ghost: 'disabled:text-controls-content-disabled'
  };

  const hover = {
    primary: 'hover:bg-primary-accent',
    outline: 'hover:bg-neutral-detail-boldest hover:text-neutral-layer-1',
    ghost:
      'hover:bg-controls-highlight-palest hover:text-neutral-detail-boldest'
  };

  const focus = {
    primary:
      'focus:bg-primary-main focus:outline focus:outline-primary-main focus:outline-2 focus:outline-offset-2',
    outline:
      'focus:bg-transparent focus:text-neutral-detail-boldest focus:outline focus:outline-neutral-detail-boldest focus:outline-2 focus:outline-offset-2',
    ghost:
      'focus:bg-transparent focus:text-neutral-detail-boldest focus:border focus:border-neutral-detail-boldest'
  };

  const sizes = {
    small: 'text-sm rounded px-4 py-2',
    medium: 'text-sm rounded px-5 py-3',
    large: 'text-base leading-none rounded-md px-6 py-4'
  };

  return (
    <button
      className={`transition btn
      ${bg[variant]} ${disabled[variant]} 
      ${hover[variant]} ${focus[variant]}  
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
