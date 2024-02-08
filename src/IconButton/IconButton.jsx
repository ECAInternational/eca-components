import React from 'react';
import PropTypes from 'prop-types';

export function IconButton(props) {
  const { name, id, variant, size = 'medium', icon, ...others } = props;

  const bg = {
    standard: 'bg-neutral-layer-1 text-neutral-detail-bold',
    filled: 'bg-primary-main text-default-white',
    tonal: 'bg-controls-highlight-palest text-neutral-detail-bold',
    outline: 'border text-neutral-detail-bold border-neutral-detail-bold'
  };

  const hover = {
    standard: 'hover:bg-controls-highlight-palest',
    filled: 'hover:bg-primary-pale',
    tonal: 'hover:bg-controls-highlight-paler hover:text-neutral-detail-bolder',
    outline: 'hover:shadow-inner-button hover:shadow-controls-highlight-pale'
  };

  const focus = {
    standard: 'focus-visible:outline focus-visible:outline-neutral-detail-bold focus-visible:bg-controls-highlight-palest',
    filled: 'focus-visible:outline focus-visible:outline-primary-main',
    tonal: 'focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler focus-visible:text-neutral-detail-bolder',
    outline: 'focus-visible:outline focus-visible:outline-neutral-detail-bold'
  };

  const active = {
    standard: 'active:bg-controls-highlight-paler active:text-neutral-detail-bolder',
    filled: 'active:bg-primary-accent',
    tonal: 'active:bg-controls-highlight-pale active:text-neutral-detail-bolder',
    outline: 'active:shadow-inner-button active:shadow-controls-highlight-pale'
  };

  const disabled = {
    standard: 'disabled:bg-neutral-layer-1 disabled:text-neutral-detail-paler',
    filled: 'disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled',
    tonal: 'disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled',
    outline: 'disabled:border-neutral-detail-paler disabled:text-neutral-detail-paler disabled:[box-shadow:none]'
  };

  const sizes = {
    xsmall: 'm-1 text-sm',
    small: 'm-2.5 text-lg',
    medium: 'm-3 text-xl',
    large: 'm-3.5 text-2xl'
  };

  return (
    <button
      id={id || name}
      name={name}
      className={`transition flex items-center justify-center font-medium outline-2 outline-offset-2 outline-default-transparent rounded
      active:scale-92 
      disabled:cursor-not-allowed
      ${bg[variant]} ${disabled[variant]} 
      ${hover[variant]} ${active[variant]} ${focus[variant]}`}
      {...others}
    >
      <i className={`fi ${icon} ${sizes[size]} flex items-center justify-center`} />
    </button>
  );
}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  selected: PropTypes.bool,
  icon: PropTypes.string.isRequired
};
