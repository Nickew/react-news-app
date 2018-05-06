import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button onClick={props.onClick} type="button" className="form__button">{props.buttonText === undefined ? 'OK' : props.buttonText}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

export default Button;
