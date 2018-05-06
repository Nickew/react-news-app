import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Main = (props) => (
  <main className="main-section">
    <div className="container">
      { props.children }
    </div>
  </main>
);

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
