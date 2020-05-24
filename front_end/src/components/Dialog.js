import React from 'react';
import { Dialog as MUIDialog } from '@material-ui/core';

const Dialog = (props) => {
  const { children } = props;
  const { open } = props;

  return <MUIDialog open={open}>{children}</MUIDialog>;
};

export default Dialog;
