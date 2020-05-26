import React from 'react';
import {
  Grid,
  Card,
  Typography,
  CardActions,
  Button,
  CardContent,
  makeStyles,
} from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  openVacancies: {
    color: '#2e6500',
    fontSize: 13,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    marginBottom: 10,
  },
}));

const CourseCard = (props) => {
  const classes = useStyle();
  const { course } = props;
  const { onSubscribe } = props;
  const { registered } = props;

  function onSubscribeLocal() {
    onSubscribe(course);
  }

  return (
    <Card>
      <CardContent>
        <div>
          <Grid container justify="flex-end">
            <Grid item>{course.realizationDate}</Grid>
          </Grid>
        </div>
        <h5 className={classes.title}>{course.name}</h5>
        <div>
          <img src="https://picsum.photos/270/115" alt="" />
        </div>
        <Typography className={classes.openVacancies} variant="h4">
          Vagas disponíveis: {course.vacancies}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={onSubscribeLocal}
              size="small"
              disabled={registered}
            >
              {registered ? 'Inscrito' : 'Inscrever-se'}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
