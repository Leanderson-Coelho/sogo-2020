import React from 'react';
import { Dialog as MUIDialog, Grid, makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  modal: {
    width: 200,
    height: 200,
  },
}));

const Dialog = (props) => {
  const { children } = props;
  const { open } = props;
  const { style } = props;
  const classe = useStyle();

  return (
    <MUIDialog open={open}>
      <Grid
        container
        alignItems="center"
        direction="column"
        className={style || classe.modal}
      >
        {children}
      </Grid>
    </MUIDialog>
  );
};

export default Dialog;
