import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Auth from './services/Auth';
import Teacher from './pages/Teacher/Teacher';
import Participant from './pages/Participant/Participant';
import Register from './pages/Register/Register';

export const PrivateRouter = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (Auth.isAuthenticated() ? children : <Redirect to="/" />)}
  />
);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <PrivateRouter path="/teacher">
        <Teacher />
      </PrivateRouter>
      <PrivateRouter path="/participant">
        <Participant />
      </PrivateRouter>
    </Switch>
  </Router>
);

export default Routes;
