import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

import '../styles/styles.css';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFiels: { [key: string]: any } = {};


for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Required');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Minimun ${(rule as any).value || 2} characters`)
        }

        if (rule.type === 'email') {
            schema = schema.email('check email format');
        }
    }

    requiredFiels[input.name] = schema;

}

const validationSchema = Yup.object({ ...requiredFiels })

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik

                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => { console.log(values) }}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(({ type, name, placeholder, label, options }) => {

                                    if (type === 'input' || type === 'password' || type === 'email') {
                                        return <MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                        />
                                    } else if (type === 'select') {
                                        return <MySelect
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map(
                                                    ({ id, label }) =>
                                                        (<option key={id} value={id}>{label} </option>)
                                                )
                                            }
                                        </MySelect>
                                    }

                                    return <span>Type: {type} not supported</span>
                                })
                            }
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
