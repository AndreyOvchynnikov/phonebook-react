import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import s from './Form.module.css';

const schema = yup.object().shape({
    name: yup.string().required('required!').min(6, 'at least 6 characters'),
    number: yup.number().typeError('number').required('required').integer('integer')
})


const PhonebookForm = ({onSubmit}) => {

    const initialValues = {
        name: '',
        number: ''
    }

    const handleSubmit = (values, {resetForm}) => {
        const { name, number } = values
        const newContact = {
            name,
            number,
            id: crypto.randomUUID()
        }
        onSubmit(newContact);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
            
            <Form className={s.form}>
                <label htmlFor="name" className={s.formLabel}>Name:
                    <Field
                        className={s.formInput}    
                        type="text"
                        name="name"
                        required
                        autoComplete="off"
                    />
                    <ErrorMessage name="name" render={msg => <div className={s.error}>{msg}</div>}/>
                </label>
                <label htmlFor="number" className={s.formLabel}>Number:
                    <Field
                        className={s.formInput}        
                        type="tel"
                        name="number"
                        required
                        autoComplete="off"
                    />
                    <ErrorMessage name="number" render={msg => <div className={s.error}>{msg}</div>}/>
                </label>
                <button className={s.formButton} type="submit">Add contact</button>
            </Form>
            </Formik>
            
        )
    
}

export default PhonebookForm;

PhonebookForm.propTypes = {
    onSubmit: PropTypes.func
}