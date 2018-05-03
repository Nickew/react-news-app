import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './Item';

const NewsList = ({ news }) => (
  <div className="news-section">
    <div className="news-section__container">
      {news.map((entity) =>
        <NewsItem key={entity.id} {...entity} />)}
    </div>
  </div>
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default NewsList;
