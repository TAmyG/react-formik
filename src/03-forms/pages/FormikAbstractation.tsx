import { Formik, Form } from 'formik'
import * as Yup from 'yup';


import { MySelect, MyTextInput, MyCheckbox } from '../components';
import '../styles/styles.css'



export const FormikAbstractation = () => {



    return (
        <div>
            <h1>Formik Abstractation </h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => { console.log(values) }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must 15 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid format')
                        .required('Required'),
                    terms: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'This option is not allowed')
                        .required('Required')

                })}
            >

                {
                    formik => (
                        <Form>
                            <MyTextInput
                                label="firstName"
                                name="firstName"
                                placeholder="Firstname"
                            />

                            <MyTextInput
                                label="lastName"
                                name="lastName"
                                placeholder="Lastname"
                            />


                            <MyTextInput
                                label="Email Address"
                                name="email"
                                placeholder="email"
                                type='email'
                            />



                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick sometlhing</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>





                            <MyCheckbox label={'Terms and conditions'} name={'terms'} />


                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }

            </Formik>


        </div >
    )
}
