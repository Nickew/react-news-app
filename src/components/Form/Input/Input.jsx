import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = (props) => (
  <div className="form__row">
    <label htmlFor={props.inputID} className="form__label">{props.labelText}
      <input value={props.value} onChange={props.onChange} id={props.inputID} type="input" className="form__input" placeholder={props.placeholder} />
    </label>
  </div>
);

Input.propTypes = {
  inputID: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
