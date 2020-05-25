import React from 'react';
import { Switch } from 'react-router-dom';
import { School, VideoLibrary } from '@material-ui/icons';
import Dashboard from '../../components/Dashboard/Dashboard';
import HomeTeacher from './Home/HomeTeacher';
import Register from './Register/Register';
import { PrivateRouter } from '../../Routes';

const Teacher = () => {
  const menu = [
    {
      to: '/teacher/home',
      name: 'Professor',
      icon: <School color="primary" />,
    },
    {
      to: '/courses',
      name: 'Mini Cursos',
      icon: <VideoLibrary color="primary" />,
    },
  ];

  return (
    <div>
      <Dashboard menu={menu}>
        <Switch>
          <PrivateRouter exact path="/teacher">
            <HomeTeacher />
          </PrivateRouter>
          <PrivateRouter path="/teacher/home">
            <HomeTeacher />
          </PrivateRouter>
          <PrivateRouter path="/teacher/register">
            <Register />
          </PrivateRouter>
        </Switch>
      </Dashboard>
    </div>
  );
};

export default Teacher;
