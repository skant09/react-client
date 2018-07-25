import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import Header from './header';
import { Link } from 'react-router-dom';
import LeftSection from './leftsection';

const ForgotPasswordForm = props => (
  <div style={{ width: '100%', height: '100%' }}>
    <Header history={props.history} />
    <div
      style={{
        width: '100%',
        height: 'calc(100% - 55px)',
        backgroundSize: ' 55px 55px',
        backgroundImage:
          'url(https://s3-ap-southeast-1.amazonaws.com/syookassets/TNTassets/BG1.png)',
        marginTop: '2px'
      }}>
      <div
        style={{
          padding: '100px 125px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <LeftSection />
        <div
          className="loginCard"
          style={{
            width: '375px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.16)'
          }}>
          <div
            style={{
              fontSize: '20px',
              display: 'flex',
              padding: '2em 2em 0em',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: 'rgb(38, 84, 124)'
            }}>
            <span>Reset Password</span>
          </div>

          {props.showForm ? (
            <div>
              <div
                style={{
                  padding: '2em 2em 0em',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                <label>
                  Email <span>*</span>
                </label>
                <Input
                  id="userEmail"
                  name="user_email"
                  disabled={props.disabled}
                  value={props.email}
                  onChange={props.updateEmail}
                  placeholder="Enter your email"
                />
              </div>
              <div
                style={{
                  padding: '2em 2em 0em',
                  display: 'flex'
                }}>
                <Button
                  onClick={props.onPressSubmit}
                  disabled={props.disabled}
                  style={{
                    backgroundColor: '#26547c',
                    color: '#fff',
                    width: '100%',
                    borderRadius: '2px',
                    fontWeight: 'normal'
                  }}>
                  Send me Reset link
                </Button>
              </div>
              <div
                style={{
                  padding: '2em 2em 2em',
                  display: 'flex'
                }}>
                <Link
                  to="/login"
                  style={{
                    backgroundColor: '#26547c',
                    color: '#fff',
                    width: '100%',
                    borderRadius: '2px',
                    fontWeight: 'normal',
                    padding: '.78571429em 1.5em .78571429em',
                    textAlign: 'center',
                    textDecoration: 'none',
                    minHeight: '1em',
                    lineHeight: '1em'
                  }}>
                  Go Back To Login
                </Link>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: '375px',
                marginTop: '30px',
                height: '255px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.16)'
              }}>
              <div
                style={{
                  fontSize: '20px',
                  display: 'flex',
                  padding: '2em 2em 0em',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'rgb(38, 84, 124)'
                }}>
                <Icon name="send" size="large" />
              </div>

              <div
                style={{
                  fontSize: '18px',
                  display: 'flex',
                  padding: '2em 2em 0em',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'rgb(38, 84, 124)'
                }}>
                <span>Password reset Link has been sent</span>
              </div>

              <div
                style={{
                  padding: '2em 2em 0em',
                  display: 'flex',
                  marginTop: '20px'
                }}>
                <Link
                  to="/login"
                  style={{
                    backgroundColor: '#26547c',
                    color: '#fff',
                    width: '100%',
                    borderRadius: '2px',
                    fontWeight: 'normal',
                    padding: '.78571429em 1.5em .78571429em',
                    textAlign: 'center',
                    textDecoration: 'none',
                    minHeight: '1em',
                    lineHeight: '1em'
                  }}>
                  Go Back To Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ForgotPasswordForm;
