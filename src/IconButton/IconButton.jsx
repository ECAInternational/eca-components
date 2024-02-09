import React from 'react';
import PropTypes from 'prop-types';

export function IconButton(props) {
  const { name, id, variant, selected, size = 'medium', icon, ...others } = props;

  const bg = {
    standard: 'bg-neutral-layer-1 text-neutral-detail-bold',
    filled: 'bg-primary-main text-default-white',
    tonal: 'bg-controls-highlight-palest text-neutral-detail-bold',
    outline: 'border text-neutral-detail-bold border-neutral-detail-bold'
  };

  const bgSelected = {
    standard: 'bg-controls-highlight-palest text-controls-highlight',
    filled: 'bg-primary-paler text-primary-bold',
    tonal: 'bg-controls-highlight-palest text-neutral-detail-bold',
    outline: 'border bg-controls-highlight-palest border-controls-highlight text-controls-highlight'
  };

  const hover = {
    standard: 'hover:bg-controls-highlight-palest',
    filled: 'hover:bg-primary-pale',
    tonal: 'hover:bg-controls-highlight-paler hover:text-neutral-detail-bolder',
    outline: 'hover:shadow-inner-button hover:shadow-controls-highlight-pale'
  };

  const hoverSelected = {
    standard: 'hover:bg-controls-highlight-paler hover:text-controls-highlight',
    filled: 'hover:bg-primary-pale hover:text-primary-bolder',
    tonal: 'hover:bg-controls-highlight-pale hover:text-controls-highlight-bold',
    outline: 'hover:bg-controls-highlight-paler hover:text-controls-highlight-bold hover:border-controls-highlight-bold'
  };

  const focus = {
    standard: 'focus-visible:outline focus-visible:outline-neutral-detail-bold focus-visible:bg-controls-highlight-palest',
    filled: 'focus-visible:outline focus-visible:outline-primary-main',
    tonal: 'focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler focus-visible:text-neutral-detail-bolder',
    outline: 'focus-visible:outline focus-visible:outline-neutral-detail-bold'
  };

  const focusSelected = {
    standard: 'focus-visible:outline focus-visible:outline-controls-highlight focus-visible:bg-controls-highlight-palest',
    filled: 'focus-visible:outline focus-visible:outline-primary-paler',
    tonal: 'focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler',
    outline: 'focus-visible:outline focus-visible:outline-controls-highlight'
  };

  const active = {
    standard: 'active:bg-controls-highlight-paler active:text-neutral-detail-bolder',
    filled: 'active:bg-primary-accent',
    tonal: 'active:bg-controls-highlight-pale active:text-neutral-detail-bolder',
    outline: 'active:shadow-inner-button active:shadow-controls-highlight-pale'
  };

  const activeSelected = {
    standard: 'active:bg-controls-highlight-pale active:text-controls-highlight-bold',
    filled: 'active:bg-primary-accent active:text-default-white',
    tonal: 'active:bg-controls-highlight-paler active:text-controls-highlight-bold',
    outline: 'active:bg-controls-highlight-pale active:text-controls-highlight-bold active:border-highlight-bold'
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
      ${(selected ? bgSelected : bg)[variant]}
      ${(selected ? hoverSelected : hover)[variant]}
      ${(selected ? focusSelected : focus)[variant]}
      ${(selected ? activeSelected : active)[variant]}
      active:scale-92
      ${disabled[variant]}
      disabled:cursor-not-allowed`}
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
