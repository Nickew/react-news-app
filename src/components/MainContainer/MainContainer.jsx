import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MainContainer = (props) => (
  <div className="main-container">
    {props.children}
  </div>
);

MainContainer.propTypes = {
  children: PropTypes.any,
};

export default MainContainer;
