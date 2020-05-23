import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './Routes';

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
