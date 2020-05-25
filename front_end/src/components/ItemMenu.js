import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ItemMenu = (props) => {
  const { to } = props;
  const { name } = props;
  const { icon } = props;

  const style = {
    textDecoration: 'none',
    color: '#757575',
  };

  return (
    <Link to={to} style={style}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  );
};

export default ItemMenu;
