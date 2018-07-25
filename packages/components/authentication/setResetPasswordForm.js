import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import Header from './header';
import LeftSection from './leftsection';
import { Link } from 'react-router-dom';

const SetResetPasswordForm = props => (
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
            height: '420px',
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
            <span>
              {props.setPasswordUrl ? 'Set Password' : ''}
              {props.resetPasswordUrl ? 'Reset Password' : ''}
            </span>
          </div>

          <div
            style={{
              padding: '2em 2em 0em',
              display: 'flex',
              flexDirection: 'column'
            }}>
            <label>
              Enter Password <span>*</span>
            </label>
            <Input
              type="password"
              id="userEmail"
              name="user_email"
              disabled={props.disabled}
              value={props.password}
              onChange={props.updatePassword}
              onBlur={props.validatePassword}
            />
            <p style={{ color: 'red' }}>{props.passwordErrorMessage}</p>
          </div>

          <div
            style={{
              padding: '2em 2em 0em',
              display: 'flex',
              flexDirection: 'column'
            }}>
            <label>
              Confirm Password <span>*</span>
            </label>
            <Input
              type="password"
              id="userPassword"
              name="user_password"
              disabled={props.disabled}
              value={props.confirmPassword}
              onChange={props.updateConfirmPassword}
              onBlur={props.validateConfirmPassword}
            />
            <p style={{ color: 'red' }}>{props.confirmPasswordErrorMessage}</p>
          </div>

          <div
            style={{
              padding: '2em 2em 0em',
              display: 'flex',
              marginTop: '20px'
            }}>
            <Button
              style={{
                backgroundColor: '#26547c',
                color: '#fff',
                width: '100%',
                borderRadius: '2px',
                fontWeight: 'normal'
              }}
              onClick={props.onPressSubmit}
              disabled={props.disabled}>
              Submit
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
      </div>
    </div>
  </div>
);

export default SetResetPasswordForm;
