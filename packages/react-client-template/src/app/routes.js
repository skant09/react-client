import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/login'

export const routes = (props: object) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
    </Switch>
  );
};