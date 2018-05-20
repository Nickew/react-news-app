import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.PureComponent {
  render() {
    return (
      <SignupForm
        userSignupRequest={this.props.userSignupRequest}
        addFlashMessage={this.props.addFlashMessage}
      />
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  userSignupRequest,
  addFlashMessage,
};

export default connect(null, mapDispatchToProps)(SignupPage);
