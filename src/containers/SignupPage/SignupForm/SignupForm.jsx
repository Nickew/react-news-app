import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewUser } from '../../../actions/signupActions';
import history from '../../../utils/history';
import validateInput from '../../../../server/shared/validations/signup';
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
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // TODO: implement getDerivedStateFromProps, instead of UNSAFE_cWRP
  componentWillReceiveProps(nextProps) {
    this.receiveResponse(nextProps.user);
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

  receiveResponse(response) {
    if (response.logged === true) {
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
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  createNewUser,
};

SignupForm.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
