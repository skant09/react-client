import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetResetPasswordForm from '../../components/authentication/setResetPasswordForm';
import withErrorHandler from '../../errorBoundary';

import { setPassword, resetPassword } from '../../api/users';

import { setUserSession } from '../../actions/userSession';
import { setAlert } from '../../actions/alert';

class SetResetPassword extends Component {
  constructor(props) {
    super(props);
    const regexSetPassword = /invitations\/setpassword/;
    const regexResetPassword = /invitations\/resetpassword/;
    // console.log(
    //   props,
    //   regexSetPassword.test(props.location.pathname),
    //   regexResetPassword.test(props.location.pathname),
    //   props.location.search.split('=')[1]
    // );
    this.state = {
      setPasswordUrl: regexSetPassword.test(props.location.pathname),
      resetPasswordUrl: regexResetPassword.test(props.location.pathname),
      token: props.location.search.split('=')[1],
      confirmPassword: '',
      password: '',
      confirmPasswordErrorMessage: '',
      passwordErrorMessage: '',
      disabled: false
    };
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  validatePassword = () => {
    this.setState({
      passwordErrorMessage: this.state.password ? '' : 'Enter password'
    });
  };

  updateConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  validateConfirmPassword = () => {
    this.setState({
      confirmPasswordErrorMessage: this.state.confirmPassword
        ? this.state.confirmPassword === this.state.password
          ? ''
          : 'Password does not match'
        : 'Enter confirm password'
    });
  };

  onDismiss = () => {
    this.setState({ alertVisible: false });
  };

  // Validate form
  validate = () => {
    let valid = true;
    if (!this.state.password) {
      valid = false;
      this.setState({ passwordErrorMessage: 'Enter password' });
    }
    if (!this.state.confirmPassword) {
      valid = false;
      this.setState({ confirmPasswordErrorMessage: 'Enter confirm password' });
    } else if (this.state.confirmPassword !== this.state.password) {
      valid = false;
      this.setState({ confirmPasswordErrorMessage: 'Password does not match' });
    }
    return valid;
  };

  onPressSubmit = async e => {
    e.preventDefault(e);
    const valid = this.validate();
    if (!valid) return;
    this.setState({ disabled: true });
    try {
      if (this.state.setPasswordUrl) {
        const setPasswordResponse = await setPassword(
          this.state.token,
          this.state.confirmPassword,
          this.state.password
        );
        if (setPasswordResponse.success) {
          this.setState({ disabled: false });
          this.props.dispatch(
            setAlert({ type: 'Success', message: setPasswordResponse.message })
          );
          this.props.dispatch(setUserSession(null));
          this.props.history.replace('/');
        }
      } else if (this.state.resetPasswordUrl) {
        const resetPasswordResponse = await resetPassword(
          this.state.token,
          this.state.confirmPassword,
          this.state.password
        );
        if (resetPasswordResponse.success) {
          this.setState({ disabled: false });
          this.props.dispatch(
            setAlert({
              type: 'Success',
              message: resetPasswordResponse.message
            })
          );
          this.props.dispatch(setUserSession(null));
          this.props.history.replace('/');
        }
      }
    } catch (error) {
      this.setState({
        disabled: false
      });
      this.props.dispatch(
        setAlert({
          type: 'Error',
          message: error.message
        })
      );
      console.log(error);
    }
  };

  render() {
    // console.log(this.props);
    // console.log(this.props.location.search.split('=')[1]);
    return (
      <div>
        <SetResetPasswordForm
          setPasswordUrl={this.state.setPasswordUrl}
          resetPasswordUrl={this.state.resetPasswordUrl}
          disabled={this.state.disabled}
          password={this.state.password}
          updatePassword={this.updatePassword}
          validatePassword={this.validatePassword}
          passwordErrorMessage={this.state.passwordErrorMessage}
          confirmPassword={this.state.confirmPassword}
          updateConfirmPassword={this.updateConfirmPassword}
          validateConfirmPassword={this.validateConfirmPassword}
          confirmPasswordErrorMessage={this.state.confirmPasswordErrorMessage}
          onPressSubmit={this.onPressSubmit}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default withErrorHandler(connect()(SetResetPassword));
