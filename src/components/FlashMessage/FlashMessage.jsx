import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Form/Button';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div
        className={`alert ${type === 'success' && 'alert--success' || type === 'danger' && 'alert--danger'}`}
      >
        {text}
        <Button onClick={this.onClick} className="button--danger" buttonText="&times;" />
      </div>
    );
  }
}
FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessage;
