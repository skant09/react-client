import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from 'components/authentication/loginForm';
import withErrorHandler from 'components/errorBoundary';

class Login extends Component {
  public render() {
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