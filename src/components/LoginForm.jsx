import React from 'react'
import { Formik, Form } from 'formik'
import InputField from './InputField'
import Button from './Button'
import axios from 'axios'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const navigate = useNavigate()

    const initialValues = {
      email: '',
      password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email format").required('Username is required'),
        password: Yup.string().required('Password is required'),
    })
    const handleSubmit = async (values, {setSubmitting, resetForm}) =>{
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', values);            console.log("login successful",response.data)
            resetForm();
            toast.success(response.data.message);
            navigate('/')

        }
        catch(err){
            console.log(err)
            toast.warn(err.response.data.message)
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