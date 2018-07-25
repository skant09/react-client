import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Header from './header';
import LeftSection from './leftsection';

const LoginForm = props => (
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
            <span>Log in to your Syook account</span>
          </div>

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
              display: 'flex',
              flexDirection: 'column'
            }}>
            <label>
              Password <span>*</span>
            </label>
            <Input
              type="password"
              id="userPassword"
              name="user_password"
              disabled={props.disabled}
              value={props.password}
              onChange={props.updatePassword}
              placeholder="Enter password"
            />
          </div>

          <div
            style={{
              padding: '2em 2em 0em',
              display: 'flex',
              marginTop: '20px'
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
              Log In
            </Button>
          </div>

          <div
            style={{
              marginTop: '0px',
              display: 'flex',
              padding: '2em 2em 0em',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Link
              to="/forgot-password"
              style={{ color: '#e8525e', cursor: 'pointer' }}
              className="">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;
