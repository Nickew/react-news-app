import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = (props) => (
  <div className="form__row">
    <label htmlFor={props.inputID} className="form__label">{props.labelText}
      <input
        value={props.value}
        onChange={props.onChange}
        id={props.inputID}
        name={props.name}
        type={props.inputType ? props.inputType : "input"} // eslint-disable-line
        className="form__input"
        placeholder={props.placeholder}
      />
    </label>
  </div>
);

Input.propTypes = {
  inputID: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Input;
