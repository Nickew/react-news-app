import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Container = (props) => (
  <div
    className={
      `container ${props.flex === 'row' ? 'container--flex-row' : 'container--flex-col'}
      ${(() => {
        switch (props.justify) {
          case 'center': return 'container--flex-jc-center';
          case 'between': return 'container--flex-jc-between';
          case 'around': return 'container--flex-jc-around';
          case 'end': return 'container--flex-jc-end';
          default: return 'container--flex-jc-start';
        }
      })()}`
    }
  >
    { props.children }
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
  flex: PropTypes.string.isRequired,
  justify: PropTypes.string,
};

export default Container;
//props.justify === 'center' ? 'container--flex-jc-center' : (props.justify === 'between' ? 'container--flex-jc-between' : 'container--flex-jc-around')