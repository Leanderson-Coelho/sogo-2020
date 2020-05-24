import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Toast = (props) => {
  const { message } = props;
  const { open } = props;
  const { onClose } = props;
  const { severity } = props;
  const { duration } = props;

  return (
    <Snackbar open={open} autoHideDuration={duration || 2000} onClose={onClose}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default Toast;
