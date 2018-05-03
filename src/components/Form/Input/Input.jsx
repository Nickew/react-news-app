import React from 'react';

const Input = ({ id, label }) => (
  <div className="form__row">
    <label htmlFor={id} className="form__label">{label}</label>
    <input id={id} type="input" className="form__input" />
  </div>
);

export default Input;
