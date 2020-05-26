import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { VideoLibrary } from '@material-ui/icons';
import Dashboard from '../../components/Dashboard/Dashboard';
import { PrivateRouter } from '../../Routes';
import { theme } from '../../styles/participantTheme';
import Home from './Home/Home';

const Participant = () => {
  const menu = [
    {
      to: '/participant/home',
      name: 'Mini Cursos',
      icon: <VideoLibrary color="primary" />,
      id: 1,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Dashboard menu={menu}>
        <Switch>
          <PrivateRouter path="/participant">
            <Home />
          </PrivateRouter>
          <PrivateRouter path="/participant/home">
            <Home />
          </PrivateRouter>
        </Switch>
      </Dashboard>
    </ThemeProvider>
  );
};

export default Participant;
