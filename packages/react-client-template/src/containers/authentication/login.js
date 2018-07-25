import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/authentication/loginForm';
import withErrorHandler from '../../errorBoundary';

import { loginUser } from '../../api/auth';

import { setUserSession } from '../../actions/userSession';
import { setAlert } from '../../actions/alert';

import { formatUser } from '../../lib/utils';

import { lsTokenKey } from '../../constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: false
    };
  }

  onPressSubmit = async e => {
    e.preventDefault(e);
    this.setState({ disabled: true });
    // console.log(this.state.email, this.state.password);
    try {
      const loginUserResponse = await loginUser(
        this.state.email,
        this.state.password
      );
      if (loginUserResponse) {
        this.setState({
          disabled: false
        });
        const user = formatUser(
          loginUserResponse.user,
          loginUserResponse.token.split(' ')[1]
        );

        // get the referrer pathname
        const from = this.props.location.pathname || '/';
        user.from = from;

        this.props.dispatch(setUserSession(user));
        localStorage.setItem(lsTokenKey, user.token);
        this.props.history.push('/');
      }
    } catch (error) {
      console.log(error);
      this.setState({
        disabled: false
      });
      this.props.dispatch(
        setAlert({
          type: 'Error',
          message: error.message
        })
      );
    }
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  onDismiss = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    // console.log(this.props);
    return (
      <div style={{ minHeight: '100%' }}>
        <LoginForm
          disabled={this.state.disabled}
          email={this.state.email}
          updateEmail={this.updateEmail}
          password={this.state.password}
          updatePassword={this.updatePassword}
          onPressSubmit={this.onPressSubmit}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default withErrorHandler(connect()(Login));
