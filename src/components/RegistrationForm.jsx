import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

function RegistrationForm() {
  const navigate = useNavigate();

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
      const response = await api.post('/auth/register', values);
      console.log(response);
      resetForm();
      navigate('/login');
    } catch (error) {
      console.error("response error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <InputField
            label="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : ''}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : ''}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? errors.password : ''}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
          />

          <div className="role-selector">
          <label>
              <input type="radio" name="role" value="job_seeker" checked={values.role === 'job_seeker'} onChange={handleChange} onBlur={handleBlur} />
              Job Seeker
            </label>
            <label>
              <input type="radio" name="role" value="employer" checked={values.role === 'employer'} onChange={handleChange} onBlur={handleBlur} />
              Employer
            </label>
          </div>
          <Button type="submit" disabled={isSubmitting} label="Register" className='register-btn'>Register</Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
