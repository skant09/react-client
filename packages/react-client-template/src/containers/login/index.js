import { LoginForm } from 'components';
import React from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../errorBoundary';
import { updateEmail, updatePassword, submitForm } from './reducer';

const Login = props => {
  const { email, password, updateEmail, updatePassword, submitForm } = props;
  return (
    <div style={{ minHeight: '100%' }}>
      <LoginForm
        disabled={props.disabled}
        email={email}
        updateEmail={updateEmail}
        password={password}
        updatePassword={updatePassword}
        submitForm={e => submitForm(e, email, password)}
        history={props.history}
      />
    </div>
  );
};
const mapStateToProps = stateProps => {
  return { ...stateProps.login };
};
const mapDispatchToProps = dispatch => {
  return {
    updateEmail: e => dispatch(updateEmail(e.target.value)),
    updatePassword: e => dispatch(updatePassword(e.target.value)),
    submitForm: (event, email, password) => {
      event.preventDefault();
      dispatch(submitForm(email, password));
    },
  };
};
export default withErrorHandler(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
