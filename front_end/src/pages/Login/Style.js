import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(0),
  },
  container: {
    marginTop: theme.spacing(10),
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginBottom: theme.spacing(5),
  },
  fieldInput: {
    marginTop: theme.spacing(3),
  },
  fieldButton: {
    marginTop: theme.spacing(4),
  },
  fieldSubscribe: {
    marginTop: theme.spacing(4),
    alignItems: 'center',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    zIndex: 10,
  },
  imageSvg: {
    position: 'absolute',
    opacity: 0.2,
  },
  modalLoading: {
    width: 200,
    height: 200,
  },
}));
