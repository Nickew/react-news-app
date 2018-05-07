import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Form/Button';

import './styles.scss';

const Item = (props) => (
  <div id={'nid' + props.id} className="news-entity"> {/* eslint-disable-line */}
    <div className="news-entity__header"><h3 className="news-entity__title">{props.title}</h3><Button className="news-entity__del-btn" onClick={props.onClick} buttonText={props.buttonText} /></div>
    <div className="news-entity__message"><p>{props.message}</p></div>
  </div>
);

Item.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

export default Item;
