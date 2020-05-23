import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login/Login';

const isAuthenticad = true;

export const PrivateRouter = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (isAuthenticad ? children : <Redirect to="/" />)}
  />
);

const Autenticado = () => <h1>Autenticado</h1>;

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <PrivateRouter path="/protected">
        <Autenticado />
      </PrivateRouter>
    </Switch>
  </Router>
);

export default Routes;
