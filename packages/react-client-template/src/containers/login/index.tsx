import {LoginForm} from 'components';
import * as React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import * as Redux from 'redux';

import withErrorHandler from '../errorBoundary';

// import { loginUser } from '../../api/auth';

// import { setAlert } from '../../actions/alert';
// import { setUserSession } from '../../actions/userSession';

// import { formatUser } from '../../lib/utils';

// import { lsTokenKey } from '../../constants';

import { baseURL } from '../../config/env';
export const authURL = `${baseURL}/auth`;
export const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch(`${authURL}/login`, {
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
      });
      if(response.ok) {
        return await response.json()
      } else {
        throw response
      }
    } catch (error) {
      throw new Error(error)
    }
};

function formatUser(user: IUser, token: string) {
  delete user.iat;
  delete user.exp;
  user.token = token;
  return user;
}

export interface ILoginProps {
  location: {pathname: string}
  dispatch : Redux.Dispatch
  history: string[]
}

export interface IUser {
  iat: string
  exp: string
  token: string
  from: string
}
class Login extends Component<ILoginProps> {
  public state = {
    disabled: false,
    email: '',
    password: '',
  };

  public onPressSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({ disabled: true });
    // console.log(this.state.email, this.state.password);
    try {
      const loginUserResponse = await loginUser(this.state.email, this.state.password);
      if (loginUserResponse) {
        this.setState({
          disabled: false
        });
        const user = formatUser(loginUserResponse.user, loginUserResponse.token.split(' ')[1]);

        // get the referrer pathname
        const from = this.props.location.pathname || '/';
        user.from = from;

        this.props.dispatch({payload:user, type: 'sdfsdf'});
        localStorage.setItem('lsTokenKey', user.token);
        this.props.history.push('/');
      }
    } catch (error) {
      this.setState({
        disabled: false
      });
      // this.props.dispatch(
      //   setAlert({
      //     type: 'Error',
      //     message: error.message
      //   })
      // );
    }
  };

  public updateEmail = (event: React.SyntheticEvent) => {
    this.setState({ email: (event.target as HTMLInputElement).value });
  };

  public updatePassword = (event: React.FormEvent) => {
    this.setState({ password: (event.target as HTMLInputElement).value });
  };

  public onDismiss = () => {
    this.setState({ alertVisible: false });
  };

  public render() {
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