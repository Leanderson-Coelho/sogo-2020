import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../../services/Auth';
import { AuthDTO } from '../../model/AuthDTO';

const Login = () => {
  const history = useHistory();

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
    <div>
      <h3>Login</h3>
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
      <Link to="/protected">Protected</Link>
    </div>
  );
};

export default Login;
