import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Grid,
  CssBaseline,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AuthService from '../../services/Auth';
import { AuthDTO } from '../../model/AuthDTO';
import { useStyle } from './Style';
import Logo from '../../assets/Easy_Course_logo_com_cor.png';
import Securet from '../../assets/svg/secure_login.svg';
import Dialog from '../../components/Dialog';
import Toast from '../../components/Toast';

const Login = () => {
  const history = useHistory();
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:600px)');
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório!').email('Email inválido!'),
    password: Yup.string()
      .min(8, 'Insira pelo menos 8 caracteres!')
      .required('Campo obrigatório!'),
  });

  const initialValues = {
    email: 'leanderson@gmail.com',
    password: 'coelhocoelho',
  };

  function handlerRoute() {
    const userType = AuthService.userSession().type;
    if (userType === 'participant') {
      history.push('/participant');
    } else {
      history.push('/teacher');
    }
  }

  async function onFormSubmit(values) {
    try {
      setLoading(true);
      console.log(values);
      await AuthService.login(new AuthDTO(values.email, values.password));
      handlerRoute();
    } catch (err) {
      console.log('falha ao executar login');
      setToastMessage('Falha ao executar o login!');
      setToastSeverity('error');
      setOpenToast(true);
    } finally {
      setLoading(false);
    }
  }

  function handleRegisterRoute() {
    history.push('/register');
  }

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: onFormSubmit,
  });

  function onToastClose() {
    setOpenToast(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
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
      <Grid
        className={classes.container}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item xs={false} sm={4} md={7}>
          <img
            className={classes.image}
            src={Logo}
            width="286"
            height="53"
            alt=""
          />
        </Grid>
        <Grid alignItems="center" container direction="column">
          {matches && <img className={classes.imageSvg} src={Securet} alt="" />}
          <Grid item xs={12}>
            <Grid className={classes.fieldInput} item>
              <TextField
                value={formik.values.email}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                variant="outlined"
                label="Email"
              />
            </Grid>
            <Grid className={classes.fieldInput} item>
              <TextField
                value={formik.values.password}
                onChange={(e) =>
                  formik.setFieldValue('password', e.target.value)
                }
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
                variant="outlined"
                label="Senha"
              />
            </Grid>
            <Grid className={classes.fieldButton} item>
              <Button
                onClick={formik.handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid className={classes.fieldSubscribe} item>
            <Button onClick={handleRegisterRoute}>Cadastrar-se</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
