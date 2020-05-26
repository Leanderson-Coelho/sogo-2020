import React, { useState } from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';
import * as Yup from 'yup';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { useFormik } from 'formik';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import CourseService from '../../../services/Course';
import AuthService from '../../../services/Auth';
import { CourseDTO } from '../../../model/CourseDTO';
import { useStyle } from './Style';
import Toast from '../../../components/Toast';

const RegisterCourse = () => {
  const classes = useStyle();
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');
  const userSession = AuthService.userSession();

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Digite ao menos 6 caracteres!')
      .required('Campo Obrigatório!'),
    duration: Yup.number()
      .positive('Valor inválido!')
      .required('Campo obrigatório!'),
    vacancies: Yup.number()
      .positive('Valor inválido!')
      .required('Campo obrigatório!'),
    realizationDate: Yup.date().required('Campo obrigatório!'),
  });

  const initialValues = {
    name: '',
    duration: 0,
    vacancies: 0,
    realizationDate: new Date(),
  };

  async function onFormSubmit(values) {
    try {
      await CourseService.create(
        new CourseDTO(
          values.name,
          values.realizationDate.toLocaleString(),
          values.duration,
          values.vacancies,
          userSession.id,
          []
        )
      );
      setToastSeverity('success');
      setToastMessage('Mini curso criado com sucesso!');
      setOpenToast(true);
      formik.resetForm();
    } catch (err) {
      setToastMessage('Falha ao cadastrar mini curso!');
      setOpenToast(true);
      setToastSeverity('error');
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: onFormSubmit,
  });

  function onToastClose() {
    setOpenToast(false);
  }

  return (
    <div className={classes.content}>
      <Toast
        open={openToast}
        severity={toastSeverity}
        message={toastMessage}
        onClose={onToastClose}
      />
      <Container className={classes.container}>
        <Paper elevation={6}>
          <Grid
            className={classes.form}
            container
            alignItems="center"
            direction="column"
          >
            <Grid className={classes.gridItem} item>
              <TextField
                value={formik.values.name}
                onChange={(e) => formik.setFieldValue('name', e.target.value)}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
                variant="outlined"
                label="Nome"
              />
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid className={classes.gridItem} item>
                <KeyboardDateTimePicker
                  minDate={new Date()}
                  onChange={(e) => {
                    if (e) {
                      formik.setFieldValue('realizationDate', e);
                    }
                  }}
                  value={formik.values.realizationDate}
                  error={Boolean(formik.errors.realizationDate)}
                  format="yyyy/MM/dd hh:mm a"
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <Grid className={classes.gridItem} item>
              <TextField
                value={formik.values.duration}
                onChange={(e) =>
                  formik.setFieldValue('duration', Number(e.target.value))
                }
                error={Boolean(formik.errors.duration)}
                helperText={formik.errors.duration}
                type="number"
                variant="outlined"
                label="Duração"
              />
            </Grid>
            <Grid className={classes.gridItem} item>
              <TextField
                value={formik.values.vacancies}
                onChange={(e) =>
                  formik.setFieldValue('vacancies', Number(e.target.value))
                }
                error={Boolean(formik.errors.vacancies)}
                helperText={formik.errors.vacancies}
                type="number"
                variant="outlined"
                label="Vagas"
              />
            </Grid>
            <Grid className={classes.gridItemButton} item>
              <Button
                onClick={formik.handleSubmit}
                color="primary"
                variant="outlined"
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default RegisterCourse;
