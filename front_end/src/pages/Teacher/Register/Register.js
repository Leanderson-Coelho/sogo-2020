import React, { useState } from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStyle } from './Style';
import TeacherService from '../../../services/Teacher';
import { TeacherDTO } from '../../../model/TeacherDTO';
import Toast from '../../../components/Toast';

const Register = () => {
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');
  const classes = useStyle();

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Digite ao menos 6 caracteres!')
      .required('Campo Obrigatório!'),
    email: Yup.string().email('Email inválido!').required('Campo obrigatório!'),
    registration: Yup.string()
      .min(4, 'Digite ao menos 4 caracteres!')
      .required('Campo obrigatório!'),
    password: Yup.string()
      .min(8, 'Digite ao menos 8 caracteres')
      .required('Campo obrigatório!'),
  });

  const initialValues = {
    name: '',
    email: '',
    registration: '',
    password: '',
  };

  async function onFormSubmit(values) {
    try {
      await TeacherService.create(
        new TeacherDTO(
          values.name,
          values.email,
          values.registration,
          values.password,
          'teacher'
        )
      );
      setToastSeverity('success');
      setToastMessage('Professor cadastrado com sucesso!');
      setOpenToast(true);
      formik.resetForm();
    } catch (err) {
      console.log('entrou no xesqdele', err);
      setToastMessage('Falha ao cadastrar professor!');
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
            <Grid className={classes.gridItem} item>
              <TextField
                value={formik.values.email}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                variant="outlined"
                label="Email"
              />
            </Grid>
            <Grid className={classes.gridItem} item>
              <TextField
                value={formik.values.registration}
                onChange={(e) =>
                  formik.setFieldValue('registration', e.target.value)
                }
                error={Boolean(formik.errors.registration)}
                helperText={formik.errors.registration}
                variant="outlined"
                label="Matricula"
              />
            </Grid>
            <Grid className={classes.gridItem} item>
              <TextField
                value={formik.values.password}
                onChange={(e) =>
                  formik.setFieldValue('password', e.target.value)
                }
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
                type="password"
                variant="outlined"
                label="Senha"
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

export default Register;
