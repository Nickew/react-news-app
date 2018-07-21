import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Container = (props) => (
  <div
    className={
      `container ${props.flex === 'row' ? 'container--flex-row' : 'container--flex-col'}
      ${(() => { /* eslint-disable */
        switch (props.justify) {
          case 'center': return 'container--flex-jc-center';
          case 'between': return 'container--flex-jc-between';
          case 'around': return 'container--flex-jc-around';
          case 'end': return 'container--flex-jc-end';
          default: return 'container--flex-jc-start';
        }
      })()}
      ${(() => {
        switch (props.align) {
          case 'center': return 'container--flex-ai-center';
          case 'start': return 'container--flex-ai-start';
          case 'end': return 'container--flex-ai-end';
          case 'baseline': return 'container--flex-ai-baseline';
          default: return 'container--flex-ai-stretch'
        }
      })()}` /* eslint-enable */
    }
  >
    { props.children }
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
  flex: PropTypes.string.isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default Container;
