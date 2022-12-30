import { Form, Formik } from 'formik';
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div className='body'>
            <h1>Register Formik Page</h1>

            <Formik

                initialValues={{
                    email: '',
                    name: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => { console.log(values) }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Must be 3+ characters')
                            .max(15, 'Up to 15 characters')
                            .required('Required'),
                        email: Yup.string()
                            .email('Must be email format')
                            .required('Required'),
                        password1: Yup.string()
                            .min(6, 'At least 6 characters')
                            .required('Required'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Passwords are not equals')
                            .required('Required'),
                    })
                }
            >

                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput
                                label="Nombre"
                                name="name"
                                placeholder="Nombre"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="email@xxx.com"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="xxxxx"
                            />

                            <MyTextInput
                                label="Confirm Password"
                                name="password2"
                                type="password"
                                placeholder="xxxxx"
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset} >Reset Form</button>

                        </Form>
                    )
                }

            </Formik>
        </div >
    )
}
