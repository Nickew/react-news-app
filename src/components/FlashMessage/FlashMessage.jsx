import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;
    return (
      <div
        className={`alert ${type === 'success' && 'alert--success' || type === 'fail' && 'alert--fail'}`} // eslint-disable-line no-mixed-operators
      >
        {text}
        <button onClick={this.onClick} className="alert__btn alert__btn--simple">&times;</button>
      </div>
    );
  }
}
FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessage;
