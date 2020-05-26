import React, { useState } from 'react';
import {
  CssBaseline,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ParticipantService from '../../services/Participant';
import { ParticipantDTO } from '../../model/ParticipantDTO';
import { useStyle } from './Style';
import Toast from '../../components/Toast';
import RegisterSVG from '../../assets/svg/register_participant.svg';

const Register = () => {
  const classes = useStyle();
  const history = useHistory();
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Insira ao menos 6 caracteres!')
      .required('Campo obrigatório!'),
    email: Yup.string().email('Email inválido!').required('Campo obrigatório!'),
    password: Yup.string()
      .min(8, 'Insira ao menos 8 caracteres!')
      .required('Campo obrigatório!'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  function onToastClose() {
    setOpenToast(false);
  }

  async function handlerSubmit(values) {
    try {
      console.log(values);
      await ParticipantService.create(
        new ParticipantDTO(
          values.name,
          values.email,
          values.password,
          'participant'
        )
      );
      setToastSeverity('success');
      setToastMessage('Participante cadastrado com sucesso!');
      formik.resetForm();
    } catch (err) {
      console.log(err);
      setToastMessage('Falha ao cadastrar participante');
      setToastSeverity('error');
    } finally {
      setOpenToast(true);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handlerSubmit,
  });

  return (
    <div className={classes.root}>
      <Toast
        severity={toastSeverity}
        open={openToast}
        message={toastMessage}
        onClose={onToastClose}
      />
      <Grid className={classes.title} item xs={12} md={6}>
        <Typography className={classes.titleText}>
          Cadastrar-se como participante
        </Typography>
      </Grid>
      <CssBaseline />
      <Grid
        className={classes.container}
        alignItems="center"
        container
        direction="column"
      >
        <Grid className={classes.form} item xs={12} md={12}>
          <Paper className={classes.paper} elevation={3}>
            <Grid className={classes.itemInput} item xs={12}>
              <TextField
                value={formik.values.name}
                onChange={(e) => formik.setFieldValue('name', e.target.value)}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
                label="Nome"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className={classes.itemInput} item>
              <TextField
                value={formik.values.email}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className={classes.itemInput} item>
              <TextField
                type="password"
                value={formik.values.password}
                onChange={(e) =>
                  formik.setFieldValue('password', e.target.value)
                }
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
                label="Senha"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className={classes.itemButton} item>
              <Button
                onClick={formik.handleSubmit}
                color="primary"
                variant="outlined"
                fullWidth
              >
                Cadastrar-se
              </Button>
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Button
                onClick={() => history.push('/')}
                className={classes.cancelButton}
              >
                Cacelar
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid direction="column" container alignItems="flex-end">
        <img src={RegisterSVG} alt="" />
      </Grid>
    </div>
  );
};

export default Register;
