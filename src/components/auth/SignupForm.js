import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from "./SignupForm.module.css";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const history = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values) => {
        // Will andle form submission logic here
        console.log(values);
        history('/login');
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = 'First Name is required';
        }

        if (!values.lastName) {
            errors.lastName = 'Last Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateForm}
        >
            <Form className={classes['signup-form']}>
                <div className={classes['form-group']}>
                    <label htmlFor="firstName">First Name</label>
                    <Field className={classes['form-control']} type="text" id="firstName" name="firstName" />
                    <ErrorMessage className={classes['error-message']} name="firstName" component="div" />
                </div>

                <div className={classes['form-group']}>
                    <label htmlFor="lastName">Last Name</label>
                    <Field className={classes['form-control']} type="text" id="lastName" name="lastName" />
                    <ErrorMessage className={classes['error-message']} name="lastName" component="div" />
                </div>

                <div className={classes['form-group']}>
                    <label htmlFor="email">Email</label>
                    <Field className={classes['form-control']} type="email" id="email" name="email" />
                    <ErrorMessage className={classes['error-message']} name="email" component="div" />
                </div>

                <div className={classes['form-group']}>
                    <label htmlFor="password">Password</label>
                    <Field className={classes['form-control']} type="password" id="password" name="password" />
                    <ErrorMessage className={classes['error-message']} name="password" component="div" />
                </div>

                <div className={classes['form-group']}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field className={classes['form-control']} type="password" name="confirmPassword" id="confirmPassword" />
                    <ErrorMessage className={classes['error-message']} name="confirmPassword" component="div" />
                </div>

                <button className={classes["submit-button"]} type="submit">Sign Up</button>
            </Form>
        </Formik>
    )
}

export default SignupForm;