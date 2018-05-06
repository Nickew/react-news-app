import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Form/Button';

const Item = (props) => (
  <li>
    {props.title}
    <p>{props.message}</p>
    <Button onClick={props.onClick} buttonText={props.buttonText} />
  </li>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

export default Item;
