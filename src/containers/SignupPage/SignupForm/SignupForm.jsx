import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewUser, signInUser } from '../../../actions/signupActions';
import history from '../../../utils/history';
import validateInput from '../../../../server/shared/validations/signup';
import Container from '../../../components/Container';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

import '../../../styles/base.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      authEmail: '',
      authPassword: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.receiveResponse(this.props.user);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { email, error, password } = this.state;
    if (!error) {
      this.props.createNewUser(email, password);
    }

    e.preventDefault();
  }

  onSignIn(e) {
    const { authEmail, authPassword } = this.state;
    this.props.signInUser(authEmail, authPassword);
    e.preventDefault();
  }

  receiveResponse(response) {
    if (response.complete === true) {
      this.props.addFlashMessage({
        type: 'success',
        text: 'You\'re signed up successfully',
      });
    } else {
      this.props.addFlashMessage({
        type: 'fail',
        text: response.error.message,
      });
    }
  }

  render() {
    return (
      <Container flex="row" justify="around">
        <Form onSubmit={this.onSubmit}>
          <Input
            inputID="signup-username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User"
            labelText="Username"
            name="username"
          >
          </Input>
          <Input
            inputID="signup-email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="example@mail.com"
            labelText="Email"
            name="email"
          >
          </Input>
          <Input
            inputID="signup-password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="qwerty"
            labelText="Password"
            name="password"
          >
          </Input>
          <Button type="submit" buttonText="Sign up" className="button--accept-b" />
        </Form>
        <Form onSubmit={this.onSignIn}>
          <Input
            inputID="signin-email"
            value={this.state.authEmail}
            onChange={this.onChange}
            placeholder="youremail@mail.com"
            labelText="Email"
            name="authEmail"
          >
          </Input>
          <Input
            inputID="signin-password"
            value={this.state.authPassword}
            onChange={this.onChange}
            placeholder="your password"
            labelText="Password"
            name="authPassword"
          >
          </Input>
          <Button type="submit" buttonText="Sign In" className="button--accept-b" />
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  createNewUser,
  signInUser,
};

SignupForm.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
