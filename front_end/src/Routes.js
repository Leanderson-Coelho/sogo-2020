import React, { useEffect, useState } from 'react';

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

export const PrivateRouter = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (Auth.isAuthenticated() ? children : <Redirect to="/" />)}
    />
  );
};

export const GuardLogin = ({ children, ...rest }) => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const userTypeLocalstorage = Auth.userSession();
    if (userTypeLocalstorage) {
      setUserType(userTypeLocalstorage.type);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={() =>
        !Auth.isAuthenticated() ? children : <Redirect to={`/${userType}`} />
      }
    />
  );
};

const Routes = () => (
  <Router>
    <Switch>
      <GuardLogin exact path="/">
        <Login />
      </GuardLogin>
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
