import React from 'react'
import { Formik, Form } from 'formik'
import InputField from './InputField'
import Button from './Button'
import axios from 'axios'
import * as Yup from 'yup'

function LoginForm() {

    const initialValues = {
      username: '',
      password: '',
    }
    const validationSchema = Yup.object({
        username: Yup.string().email("Invalid Email format").required('Username is required'),
        password: Yup.string().required('Password is required'),
    })
    const handleSubmit = async () =>{
        try{
            const response = await axios.post('https://localhost:5000/api/auth/login', values)
            console.log("login successful",response.data)
            resetForm();

        }
        catch(err){
            console.log(err)
        }
        finally{
            setSubmitting(false);
        }
    }
  return (
    <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
                <InputField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                />
                <InputField
                label="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
                />
                <Button type="submit" disabled={isSubmitting}>Login</Button>
            </Form>
        )}
        </Formik>

    </div>
  )
}

export default LoginForm