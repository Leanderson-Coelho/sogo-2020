import React from 'react';
import { Switch } from 'react-router-dom';
import { School, VideoLibrary } from '@material-ui/icons';
import Dashboard from '../../components/Dashboard/Dashboard';
import HomeTeacher from './Home/HomeTeacher';
import HomeCourse from './HomeCourse/HomeCourse';
import Register from './Register/Register';
import RegisterCourse from './RegisterCourse/RegisterCourse';
import { PrivateRouter } from '../../Routes';

const Teacher = () => {
  const menu = [
    {
      to: '/teacher/home',
      name: 'Professor',
      icon: <School color="primary" />,
      id: 1,
    },
    {
      to: '/teacher/courses',
      name: 'Mini Cursos',
      icon: <VideoLibrary color="primary" />,
      id: 2,
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
          <PrivateRouter exact path="/teacher/course/create">
            <RegisterCourse />
          </PrivateRouter>
          <PrivateRouter path="/teacher/courses">
            <HomeCourse />
          </PrivateRouter>
        </Switch>
      </Dashboard>
    </div>
  );
};

export default Teacher;
