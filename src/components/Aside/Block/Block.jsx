import React from 'react';
import PropTypes from 'prop-types';

const Block = (props) => (
  <div className="side-block">
    <div className="side-block__header">
      <h3 className="side-block__title">{props.title}</h3>
    </div>
    <div className="side-block__content">
      {props.children}
    </div>
  </div>
);

Block.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Block;
