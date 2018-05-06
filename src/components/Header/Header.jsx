import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = (props) => (
  <header className="app-header">
    <div className="container">
      { props.children }
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
