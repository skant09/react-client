import { postAPI } from '../../utils/api';
import { createReducer } from '../../utils/reduxUtils';

const INITIAL_STATE = {
  disabled: false,
  email: '',
  password: '',
};
// action
const actionTypes = {
  SUBMIT_FORM: 'syook/login/SUBMIT_FORM',
  UPDATE_EMAIL: 'syook/login/UPDATE_EMAIL',
  UPDATE_PASSWORD: 'syook/login/UPDATE_PASSWORD',
};

// action creators
// export function submitForm(payload) {
//   return {
//     type: actionTypes.SUBMIT_FORM,
//     payload: payload,
//   };
// }

export function updateEmail(email) {
  return {
    type: actionTypes.SUBMIT_FORM,
    payload: email,
  };
}
export function updatePassword(password) {
  return {
    type: actionTypes.UPDATE_PASSWORD,
    payload: password,
  };
}
// export function submitForm(email, password) {
//   return {
//     type: actionTypes.SUBMIT_FORM,
//   };
// }

const loginUser = ({ email, password }) =>
  postAPI('/auth', { email, password });

function formatUser(user, token) {
  delete user.iat;
  delete user.exp;
  user.token = token;
  return user;
}

export function submitForm(email, password) {
  return async dispatch => {
    if (!email || !password) {
      const loginForm = document.forms['loginForm'];
      email = loginForm.email.value;
      password = loginForm.password.value;
    }
    try {
      const loginUserResponse = await loginUser({
        email,
        password,
      });
      if (loginUserResponse) {
        const user = formatUser(
          loginUserResponse.user,
          loginUserResponse.token.split(' ')[1]
        );
        const from = this.props.location.pathname || '/';
        user.from = from;
        dispatch({ type: 'sdfsdf' });
        localStorage.setItem('lsTokenKey', user.token);
        this.props.history.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export const login = createReducer(INITIAL_STATE, {
  [actionTypes.UPDATE_EMAIL](state, action) {
    return [...state, { email: action.payload }];
  },
  [actionTypes.UPDATE_PASSWORD](state, action) {
    return [...state, { password: action.payload }];
  },
  [actionTypes.SUBMIT_FORM](state, action) {
    return [...state];
  },
});
