import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { createNewUser } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.PureComponent {
  render() {
    return (
      <div className="signup-section">
        <SignupForm
          createNewUser={this.props.createNewUser}
          addFlashMessage={this.props.addFlashMessage}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createNewUser,
  addFlashMessage,
};

export default connect(null, mapDispatchToProps)(SignupPage);
