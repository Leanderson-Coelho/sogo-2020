import React from 'react';

import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, CssBaseline, TextField } from '@material-ui/core';
import AuthService from '../../services/Auth';
import { AuthDTO } from '../../model/AuthDTO';
import { useStyle } from './Style';
import Logo from '../../assets/Easy_Course_logo_com_cor.png';
import Securet from '../../assets/svg/secure_login.svg';

const Login = () => {
  const history = useHistory();
  const classes = useStyle();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório!').email('Email inválido!'),
    password: Yup.string()
      .min(4, 'Poucos caracteres!')
      .required('Campo obrigatório!'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  function onFormSubmit(values) {
    console.log(values);
    AuthService.login(new AuthDTO(values.email, values.password));
  }

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: onFormSubmit,
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <h3>Login</h3>
      <input
        onChange={(e) => formik.setFieldValue('email', e.target.value)}
        type="text"
      />
      <br />
      <input
        onChange={(e) => formik.setFieldValue('password', e.target.value)}
        type="text"
      />
      <br />
      <button type="button" onClick={formik.handleSubmit}>
        Login
      </button>
      <button type="button" onClick={() => AuthService.users()}>
        Users
      </button>
      <Link to="/protected">Protected</Link> */}
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
        <Grid container direction="column" xs={6} md={2} alignItems="stretch">
          <img className={classes.imageSvg} src={Securet} alt="" />

          <Grid className={classes.fieldInput} item>
            <TextField fullWidth variant="outlined" label="Email" value="" />
          </Grid>
          <Grid className={classes.fieldInput} item>
            <TextField fullWidth variant="outlined" label="Senha" value="" />
          </Grid>
          <Grid className={classes.fieldButton} item>
            <Button fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
