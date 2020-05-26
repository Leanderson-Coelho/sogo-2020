import React, { useState, useEffect } from 'react';
import { Container, Paper, Grid, CircularProgress } from '@material-ui/core';
import { useStyle } from './Style';
import CourseCard from '../../../components/CourseCard';
import CourseService from '../../../services/Course';
import AuthService from '../../../services/Auth';
import Dialog from '../../../components/Dialog';
import Toast from '../../../components/Toast';
import { CourseDTO } from '../../../model/CourseDTO';

const Home = () => {
  const classes = useStyle();
  const [courses, setCourses] = useState([]);
  const [userId, setUserId] = useState(null);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');
  const [loading, setLoading] = useState(false);

  async function loadCourses() {
    const coursesResponse = await CourseService.openCourses();
    setCourses(coursesResponse);
  }

  useEffect(() => {
    setUserId(AuthService.userSession().id);
    loadCourses();
  }, []);

  async function onSubscribe(course) {
    try {
      if (course.vacancies >= 1) {
        setLoading(true);
        if (course.subscribers) {
          course.subscribers.push(userId);
        } else {
          course.subscribers = [userId];
        }
        course.vacancies -= 1;
        const data = new CourseDTO(
          course.name,
          course.realizationDate,
          course.duration,
          course.vacancies,
          course.teacher,
          course.subscribers,
          course.id
        );
        await CourseService.subscrible(data);
        loadCourses();
        setToastSeverity('success');
        setToastMessage('Inscrição realizada com sucesso!');
        setOpenToast(true);
      } else {
        setToastSeverity('warning');
        setToastMessage('Não há mais vagas disponíveis!');
        setOpenToast(true);
      }
    } catch (err) {
      setToastSeverity('error');
      setToastMessage('Falha ao realizar inscrição!');
      setOpenToast(true);
    } finally {
      setLoading(false);
    }
  }

  function onToastClose() {
    setOpenToast(false);
  }

  return (
    <div className={classes.content}>
      <Dialog open={loading}>
        <h2>Aguarde</h2>
        <CircularProgress />
      </Dialog>
      <Toast
        open={openToast}
        message={toastMessage}
        severity={toastSeverity}
        onClose={onToastClose}
      />
      <Container className={classes.container}>
        <Paper className={classes.paper} elevation={6}>
          <Grid className={classes.gridCards} justify="space-around" container>
            {courses.map((c) => (
              <Grid
                key={c.id}
                className={classes.gridItem}
                item
                xs={12}
                md={4}
                lg={3}
              >
                <CourseCard
                  course={c}
                  onSubscribe={onSubscribe}
                  registered={c.registered}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
