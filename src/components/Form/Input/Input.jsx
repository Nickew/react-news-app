import React from 'react';

const Input = () => (
  <div className="form__row">
    <label htmlFor={this.props.inputID} className="form__label">{this.props.labelText}
      <input id={this.props.inputID} type="input" className="form__input" />
    </label>
  </div>
);

export default Input;
