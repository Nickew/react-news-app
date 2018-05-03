import React from 'react';

const Button = ({ onClick, message }) => (
  <button onClick={onClick} type="button" className="form__button">{ message }</button>
);

export default Button;
