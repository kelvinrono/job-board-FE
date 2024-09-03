import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import Button from './Button';
import axios from 'axios';


function RegistrationForm() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', values);
      console.log(response);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => ( // Corrected here
        <Form>
          <InputField
            label="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmPassword && touched.confirmPassword}
          />
          <Button type="submit" disabled={isSubmitting} label="Register"> Register </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
