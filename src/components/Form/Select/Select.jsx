import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = (props) => (
  <div className="form__row">
    <label htmlFor={props.name}>{props.labelText}</label>
    <select onChange={props.onChange} value={props.value} id={props.name} name={props.name} className="select form__select">
      {props.children}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  labelText: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Select;
