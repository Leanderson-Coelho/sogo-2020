import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  form: {
    padding: theme.spacing(2),
  },
  gridItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridItemButton: {
    marginTop: theme.spacing(2),
  },
}));
