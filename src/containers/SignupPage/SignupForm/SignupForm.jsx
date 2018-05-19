import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      login: '',
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data })
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          inputID="signup-login"
          value={this.state.login}
          onChange={this.onChange}
          placeholder="Username..."
          labelText="Username"
          name="login"
        />
        <Input
          inputID="signup-email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="example@mail.com"
          labelText="Email"
          name="email"
        />
        <Input
          inputID="signup-password"
          value={this.state.password}
          onChange={this.onChange}
          placeholder="Password..."
          labelText="Password"
          name="password"
        />
        <Button type="submit" buttonText="Sign up" />
      </Form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export default SignupForm;
