import React from 'react';

const NewsItem = ({ title, message }) => (
  <div className="news-item">
    <div className="news-item__container">
      <h2>{ title }</h2>
      <p>{ message }</p>
    </div>
  </div>
);

export default NewsItem;
