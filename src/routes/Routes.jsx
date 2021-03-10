import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import React from 'react';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
