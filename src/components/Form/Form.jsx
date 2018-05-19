import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Form = (props) => (
  <div className="form">
    <form className="form__container" onSubmit={props.onSubmit}>
      { props.children }
    </form>
  </div>
);

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
};

export default Form;
