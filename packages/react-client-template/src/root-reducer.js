import { combineReducers } from 'redux';
import { login } from './containers/login/reducer';

const reducer = (state = {}, action) => {
  switch (action) {
    default:
      return state;
  }
};
export default combineReducers({ reducer, login });
