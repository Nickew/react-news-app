import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = (props) => (
  <div className="form__row">
    <label htmlFor={props.name}>{props.labelText}</label>
    <select id={props.name} name={props.name} className="select form__select">
      {props.options.map((item) => <option key={item.id} className="select__option" value={item.name}>{item.name}</option>)}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  labelText: PropTypes.string,
};

export default Select;
