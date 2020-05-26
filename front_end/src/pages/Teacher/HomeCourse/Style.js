import { makeStyles } from '@material-ui/core';
import TeacherSVG from '../../../assets/svg/home_teacher.svg';

export const useStyle = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),

    backgroundImage: `url(${TeacherSVG})`,
    backgroundRepeat: 'no-repeat',
  },
  containerCards: {
    justifyContent: 'space-around',
    padding: theme.spacing(4),
  },
  gridCard: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    backgroundColor: '#ffffff00',
  },
}));
