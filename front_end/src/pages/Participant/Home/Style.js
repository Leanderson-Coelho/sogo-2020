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
  gridCards: {
    padding: theme.spacing(3),
  },
  gridItem: {
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    margin: theme.spacing(2),
  },
  openVacancies: {
    color: '#2e6500',
    fontSize: 13,
    fontWeight: 'bold',
  },
}));
