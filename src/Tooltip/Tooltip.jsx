import React from 'react';
import PropTypes from 'prop-types';

export function Tooltip(props) {
  const { title, state = 'info', size = 'small', position = 'bottom', ...others } = props;

  return <div {...others}>{title}</div>;
}

Tooltip.propTypes = {
  title: PropTypes.string,
  state: PropTypes.string,
  size: PropTypes.string,
  size: PropTypes.string
};
