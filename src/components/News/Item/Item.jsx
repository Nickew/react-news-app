import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ message }) => (
  <div className="news-item">
    <div className="news-item__container">
      <p>{ message }</p>
    </div>
  </div>
);

NewsItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NewsItem;
