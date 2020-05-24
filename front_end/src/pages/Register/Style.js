import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(0),
  },
  container: {
    marginTop: theme.spacing(10),
  },
  form: {
    padding: theme.spacing(1),
    width: '50%',
  },
  paper: {
    padding: theme.spacing(6),
  },
  title: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(10),
  },
  titleText: {
    fontSize: 50,
    color: theme.palette.primary.main,
    fontFamily: 'Righteous',
    fontWeight: 'bold',
  },
  itemInput: {
    padding: theme.spacing(1),
  },
  itemButton: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1),
  },
}));
