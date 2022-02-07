import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from '../app/login/Login';
import { Products } from '../app/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      {/* <Route path={AppRoute.home} exact component={Products} /> */}
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Products} />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={process.env.PUBLIC_URL + '/'} />
    </Switch>
  );
};
