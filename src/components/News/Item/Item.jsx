import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../Form/Button';
import './styles.scss';

const Item = (props) => (
  <div id={'nid' + props.id} className="news-entity"> {/* eslint-disable-line */}
    <div className="news-entity__header">
      <h3 className="news-entity__title"><Link to={`/news/${props.id}`}>{props.title}</Link></h3>
      <Button className="news-entity__del-btn" onClick={props.onClick} buttonText={props.buttonText} />
      <p className="news-entity__like-box">
        <Button className="news-entity__like" onClick={props.likeOnClick} buttonText={props.likeButtonText} />
      </p>
    </div>
    <div className="news-entity__message"><p>{props.message}</p></div>
    <div>{props.likes}</div>
  </div>
);

Item.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  likeOnClick: PropTypes.func.isRequired,
  likeButtonText: PropTypes.string,
  likes: PropTypes.any,
};

export default Item;
