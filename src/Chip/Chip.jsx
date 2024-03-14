import React from 'react';
import PropTypes from 'prop-types';

export function Chip(props) {
  const { label, variant = 'neutral', onDelete, ...others } = props;

  const chip = {
    yellow: 'border-visualisation-2-accent text-visualisation-2-boldest bg-visualisation-2-palest',
    green: 'border-visualisation-3-accent text-visualisation-3-boldest bg-visualisation-3-palest',
    blue: 'border-visualisation-4-accent text-visualisation-4-boldest bg-visualisation-4-palest',
    purple: 'border-visualisation-5-accent text-visualisation-5-boldest bg-visualisation-5-palest',
    pink: 'border-visualisation-6-accent text-visualisation-6-boldest bg-visualisation-6-palest',
    orange: 'border-visualisation-1-accent text-visualisation-1-boldest bg-visualisation-1-palest',
    red: 'border-visualisation-7-accent text-visualisation-7-boldest bg-visualisation-7-palest',
    monochrome: 'border-neutral-detail-boldest text-neutral-layer-1 bg-neutral-detail-bold',
    neutral: 'border-neutral-detail-pale text-neutral-detail-bolder bg-neutral-layer-2'
  };

  const close = {
    yellow: 'text-visualisation-2-paler bg-visualisation-2-bolder',
    green: 'text-visualisation-3-paler bg-visualisation-3-bolder',
    blue: 'text-visualisation-4-paler bg-visualisation-4-bolder',
    purple: 'text-visualisation-5-paler bg-visualisation-5-bolder',
    pink: 'text-visualisation-6-paler bg-visualisation-6-bolder',
    orange: 'text-visualisation-1-paler bg-visualisation-1-bolder',
    red: 'text-visualisation-7-paler bg-visualisation-7-bolder',
    monochrome: 'text-neutral-detail-palest bg-neutral-body',
    neutral: 'text-neutral-detail-boldest bg-neutral-detail-paler'
  };

  return (
    <span className={`py-1.5 px-2.5 inline-flex gap-2 items-center border rounded font-regular text-sm leading-[1.125rem] font-[350] ${chip[variant]}`} {...others}>
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          aria-label={`Delete ${label}`}
          className={`rounded-sm flex items-center justify-center ${close[variant]} 
          opacity-50 hover:opacity-70 active:opacity-60
          focus-visible:outline focus-visible:outline-neutral-detail-boldest`}
        >
          <i className='fi fi-rr-cross-small w-3.5 h-3.5' />
        </button>
      )}
    </span>
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['yellow', 'green', 'blue', 'purple', 'pink', 'orange', 'red', 'monochrome', 'neutral']),
  onDelete: PropTypes.func
};
