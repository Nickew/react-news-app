import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button onClick={props.onClick} type="button" className={props.className}>{props.buttonText === undefined ? 'OK' : props.buttonText}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
