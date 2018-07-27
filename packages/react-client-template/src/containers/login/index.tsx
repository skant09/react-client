import {LoginForm} from 'components';
import * as React from 'react'
import { Component } from 'react';

import {ILoginProps, IUser} from '../../types/user'
import {postAPI} from '../../utils/api'
import withErrorHandler from '../errorBoundary';

export const loginUser = ({email, password}: {email: string, password: string}): Promise<IUser> => postAPI( '/auth', {email, password})

function formatUser(user: IUser, token: string) {
  delete user.iat;
  delete user.exp;
  user.token = token;
  return user;
}

class Login extends Component<ILoginProps> {
  public state = {
    disabled: false,
    email: '',
    password: '',
  };

  public onPressSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState({ disabled: true });
    // console.log(this.state.email, this.state.password);
    try {
      const loginUserResponse = await loginUser({email:this.state.email, password:this.state.password});
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

  public updatePassword = (event: React.SyntheticEvent) => {
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

export default withErrorHandler(Login);