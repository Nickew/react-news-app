import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const NavMenu = (props) => (
  <nav className="nav-menu">
    <ul className="nav-menu__list">
      { props.children }
    </ul>
  </nav>
);

NavMenu.propTypes = {
  children: PropTypes.any,
};

export default NavMenu;
