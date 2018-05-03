import React from 'react';

const Form = ({ children }) => (
  <form className="form">
    <div className="form__container">
      { children }
    </div>
  </form>
);

export default Form;
