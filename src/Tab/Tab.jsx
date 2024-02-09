import React from 'react';
import PropTypes from 'prop-types';

export function Tab(props) {
  const { id, name, size = 'medium', label, selected = false, ref, ...others } = props;

  const sizes = {
    medium: 'text-sm font-regular py-2 px-3',
    large: 'text-base font-medium py-2.5 px-3.5'
  };

  return (
    <button
      id={id || name}
      name={name}
      ref={ref}
      className={`group transition
      flex items-center justify-center
      text-neutral-body
      outline-none
      disabled:default-transparent disabled:cursor-not-allowed
      p-1 rounded-lg
      ${selected ? 'bg-controls-highlight-paler disabled:bg-controls-highlight-palest disabled:opacity-60' : 'bg-default-transparent hover:bg-controls-highlight-pale active:bg-controls-highlight-palest disabled:bg-default-transparent disabled:text-controls-content-disabled disabled:opacity-90'}`}
      type='button'
      role='tab'
      aria-selected={selected}
      {...others}
    >
      <div
        className={`py-2 px-3 rounded-md leading-5
      outline outline-2 outline-default-transparent
      group-focus-visible:outline-offset-[-2px]
      ${selected ? 'group-focus-visible:outline-neutral-layer-2' : 'group-focus-visible:outline-neutral-detail-boldest'}
      ${sizes[size]}`}
      >
        {label}
      </div>
    </button>
  );
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool
};
