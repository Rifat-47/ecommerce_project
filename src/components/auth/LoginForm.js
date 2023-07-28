import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './Login.module.css';
import { AuthContext } from '../store/auth_context';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const auth_context = useContext(AuthContext);
    const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validateForm = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    auth_context.onLogin(values);
    navigate('/profile');
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form className={classes['login-form']}>
        <div className={classes["form-group"]}>
          <label htmlFor="email">Email</label>
          <Field className={classes['form-control']} type="email" name="email" id="email" />
          <ErrorMessage className={classes['error-message']} name="email" component="div" />
        </div>

        <div className={classes["form-group"]}>
          <label htmlFor="password">Password</label>
          <Field className={classes['form-control']} type="password" name="password" id="password" />
          <ErrorMessage className={classes['error-message']} name="password" component="div" />
        </div>

        <button className={classes["submit-button"]} type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
