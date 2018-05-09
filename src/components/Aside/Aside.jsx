import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Aside = (props) => (
  <aside className="sidebar">
    <div className="side-container">
      {props.children}
    </div>
  </aside>
);

Aside.propTypes = {
  children: PropTypes.any,
};

export default Aside;
