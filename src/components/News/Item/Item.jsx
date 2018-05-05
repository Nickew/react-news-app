import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <li>
        {this.props.title}
        <p>{this.props.message}</p>
        <button onClick={this.props.onClick}>Delete</button>
      </li>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
