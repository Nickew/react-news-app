import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.PureComponent {
  render() {
    return (
      <div className="signup-section">
        <SignupForm
          addFlashMessage={this.props.addFlashMessage}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addFlashMessage,
};

export default connect(null, mapDispatchToProps)(SignupPage);
