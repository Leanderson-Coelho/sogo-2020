import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  AppBar,
  Toolbar,
  CssBaseline,
  useMediaQuery,
  Grid,
  Avatar,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/Auth';
import { useStyles } from './Style';
import ItemMenu from '../ItemMenu';
import Logo from '../../assets/Easy_Course_logo_branca.png';

const Dashboard = ({ children, ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery('(min-width:600px)');
  const [openModal, setOpenModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { menu } = props;
  const user = AuthService.userSession();

  useEffect(() => {
    if (!matches) {
      setIsMenuOpen(false);
    }
  }, [matches]);

  function handleLogout() {
    setOpenModal(false);
    AuthService.logout();
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle id="alert-dialog-title">
          Deseja realmente fazer Logout?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Sair
          </Button>
        </DialogActions>
      </Dialog>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, isMenuOpen && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {matches && (
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
          )}
          <img width="250" height="50" src={Logo} alt="" />
          <Grid container justify="flex-end">
            <Grid item>
              {matches && user.name}
              <Button onClick={() => setOpenModal(true)}>
                <Avatar className={classes.avatar} />
              </Button>
            </Grid>
          </Grid>
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
            <ItemMenu to={i.to} name={i.name} icon={i.icon} key={i.id} />
          ))}
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default Dashboard;
