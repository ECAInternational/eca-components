import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    variant,
    type = 'button',
    onClick = () => {},
    children,
    ...others
  } = props;

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
  };

  return (
    <button
      className={`btn ${variants[variant]}`}
      type={type}
      onClick={onClick}
      {...others}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
