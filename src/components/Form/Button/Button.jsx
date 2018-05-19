import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button
    onClick={props.onClick}
    type={props.type === undefined ? 'button' : props.type}
    className={props.className}
  >
    {props.buttonText === undefined ? 'OK' : props.buttonText}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
