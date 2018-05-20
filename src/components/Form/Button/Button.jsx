import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = (props) => (
  <button
    onClick={props.onClick}
    type={props.type === undefined ? 'button' : props.type}
    className={`form__button ${props.className !== undefined ? props.className : 'button--default'}`}
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
