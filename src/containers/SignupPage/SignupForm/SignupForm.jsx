import React from 'react';
import PropTypes from 'prop-types';
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
      login: '',
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome.',
          });
          history.push('/');
        },
        ({ response }) => this.setState({ errors: response.data })
      );
    } else {
      this.props.addFlashMessage({
        type: 'fail',
        text: 'ERROR',
      });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          inputID="signup-login"
          value={this.state.login}
          onChange={this.onChange}
          placeholder="Username..."
          labelText="Username"
          name="login"
        >
          { errors.login && <span className="text--error">{errors.login}</span> }
        </Input>

        <Input
          inputID="signup-email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="example@mail.com"
          labelText="Email"
          name="email"
        >
          { errors.email && <span className="text--error">{errors.email}</span> }
        </Input>
        <Input
          inputID="signup-password"
          value={this.state.password}
          onChange={this.onChange}
          placeholder="Password..."
          labelText="Password"
          name="password"
        >
          { errors.password && <span className="text--error">{errors.password}</span> }
        </Input>
        <Button type="submit" buttonText="Sign up" className="button--accept-b" />
      </Form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default SignupForm;
