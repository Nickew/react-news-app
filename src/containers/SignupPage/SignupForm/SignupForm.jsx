import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { email, error, password } = this.state;
    if (!error) {
      this.props.createNewUser(email, password);
    }

    console.log(this.props.user);
    e.preventDefault();
  }
  // BUG: store.user returns empty object on first request
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {/* <p>{ userResponse.logged === false ? userResponse.message : 'ACCESS GRANTED!' }</p> */}
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

SignupForm.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(SignupForm);
