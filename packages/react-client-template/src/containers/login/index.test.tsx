import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';

const middlewares: Middleware[] = []
const mockStore: Store = configureStore(middlewares)

import { Action, Middleware, Store } from 'redux';
import Login from './index';

const loginProps = {
  dispatch: mockStore.dispatch,
  history: ['/'],
  location: {
    pathname: ''
  },
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login {...loginProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
