import React, { Component } from 'react';

import ForgotPasswordForm from '../../components/authentication/forgotPasswordForm';
import withErrorHandler from '../../errorBoundary';

import { forgotPassword } from '../../api/users';

import { setAlert } from '../../actions/alert';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      email: '',
      disabled: false
    };
  }

  onPressSubmit = async e => {
    e.preventDefault(e);
    this.setState({ disabled: true });
    // console.log(this.state.email);
    try {
      const forgotPasswordResponse = await forgotPassword(this.state.email);
      if (forgotPasswordResponse) {
        this.setState({ showForm: false });
        // this.setState({ disabled: false });
        // this.setState({
        //   disabled: false,
        //   alertVisible: true,
        //   alertText: forgotPasswordResponse.message,
        //   alertType: 'success'
        // });
        // setTimeout(() => this.props.history.replace('/login'), 4000);
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

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  onDismiss = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <ForgotPasswordForm
          disabled={this.state.disabled}
          email={this.state.email}
          updateEmail={this.updateEmail}
          onPressSubmit={this.onPressSubmit}
          showForm={this.state.showForm}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default withErrorHandler(ForgotPassword);
