import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const NewsList = (props) => (
  <div className="news-section">
    <div className="news-section__container">
      {props.children}
    </div>
  </div>
);

NewsList.propTypes = {
  children: PropTypes.any,
};

export default NewsList;
