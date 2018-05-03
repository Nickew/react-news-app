import React from 'react';


const NewsContainer = ({ children }) => (
  <div className="news-section">
    <div className="news-section__container">
      { children }
    </div>
  </div>
);

export default NewsContainer;
