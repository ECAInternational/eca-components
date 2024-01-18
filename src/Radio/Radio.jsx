import React from 'react';
import PropTypes from 'prop-types';

export function Radio(props) {
  const { label, id, value, name, ...others } = props;

  return (
    <>
      <input
        type='radio'
        id={id}
        value={value}
        name={name}
        {...others}
        className='peer appearance-none w-6 h-6 border border-controls-border rounded-full transition-opacity

          hover:border-controls-border-hover hover:ring-2 hover:ring-offset-2 hover:ring-neutral-detail-paler
          focus-visible:border-controls-border focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-controls-border
          disabled:border-neutral-detail-paler disabled:hover:ring-0 disabled:cursor-not-allowed

          active:border-controls-border-hover active:bg-neutral-detail-palest active:ring active:ring-offset-1 active:ring-offset-neutral-detail-palest active:ring-neutral-detail-palest'
      />
      {label && (
        <label htmlFor={id} className='text-sm font-light pe-2'>
          {label}
        </label>
      )}
    </>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};
