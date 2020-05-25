import React, { useState } from 'react';
import {
  Drawer,
  List,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { useStyles } from './Style';
import ItemMenu from '../ItemMenu';
import ContentDashboard from '../ContentDashboard';

const Dashboard = () => {
  const classes = useStyles();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, isMenuOpen && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setIsMenuOpen(true)}
              className={clsx(
                classes.menuButton,
                isMenuOpen && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !isMenuOpen && classes.drawerPaperClose
            ),
          }}
          variant="permanent"
          open={isMenuOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => setIsMenuOpen(false)}>
              <ChevronLeft />
            </IconButton>
          </div>
          <List>
            <ItemMenu to="/" name="Raiz" />
          </List>
        </Drawer>
        <Switch>
          <ContentDashboard path="/">
            <h2>Content Dashboard</h2>
          </ContentDashboard>
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
