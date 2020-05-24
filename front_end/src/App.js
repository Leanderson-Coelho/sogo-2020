import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './Routes';
import { theme } from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
