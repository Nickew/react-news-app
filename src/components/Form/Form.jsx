import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Form = (props) => (
  <div className="form">
    <form className="form__container">
      { props.children }
    </form>
  </div>
);

Form.propTypes = {
  children: PropTypes.any,
};

export default Form;
