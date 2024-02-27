import React from 'react';
import PropTypes from 'prop-types';

export function Chip(props) {
  const { label, variant = 'neutral', deletable, ...others } = props;
  const variants = {
    yellow: 'border-visualisation-2-accent text-visualisation-2-boldest bg-visualisation-2-palest',
    green: 'border-visualisation-3-accent text-visualisation-3-boldest bg-visualisation-3-palest',
    blue: 'border-visualisation-4-accent text-visualisation-4-boldest bg-visualisation-4-palest',
    purple: 'border-visualisation-5-accent text-visualisation-5-boldest bg-visualisation-5-palest',
    pink: 'border-visualisation-6-accent text-visualisation-6-boldest bg-visualisation-6-palest',
    orange: 'border-visualisation-1-accent text-visualisation-1-boldest bg-visualisation-1-palest',
    red: 'border-visualisation-7-accent text-visualisation-7-boldest bg-visualisation-7-palest',
    black: 'border-neutral-detail-boldest text-neutral-layer-1 bg-neutral-detail-bold',
    neutral: 'border-neutral-detail-pale text-neutral-detail-bolder bg-neutral-layer-2'
  };
  return (
    <span className={`py-1.5 px-2.5 border rounded font-regular text-sm leading-[1.125rem] font-[350] ${variants[variant]}`} {...others}>
      {label}
    </span>
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['yellow', 'green', 'blue', 'purple', 'pink', 'orange', 'red', 'black', 'neutral']),
  deletable: PropTypes.bool
};
