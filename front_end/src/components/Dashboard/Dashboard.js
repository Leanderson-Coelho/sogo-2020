import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { useStyles } from './Style';
import ItemMenu from '../ItemMenu';

const Dashboard = ({ children, ...props }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { menu } = props;
  const { contents } = props;

  useEffect(() => {
    console.log(contents);
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [matches]);

  return (
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
          {menu.map((i) => (
            <ItemMenu to={i.to} name={i.name} icon={i.icon} />
          ))}
          {/* <ItemMenu to="/teacher" name="Professor" /> */}
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default Dashboard;
