import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim('Any spaces in your first name will be removed')
        .required('You must enter a first name')
        .max(20, 'Your first name entry cannot be longer than 20 characters'),
    last_name: yup
        .string()
        .trim('Any spaces in your last name will be removed')
        .required('You must enter a last name')
        .max(20, 'Your last name entry cannot be longer than 20 characters'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('You must enter an email address'),
    password: yup
        .string()
        .required('You must enter a password')
        .min(5, 'Your password must be at least 5 characters'),
    confirmPassword: yup  //this breaks my checkbox and the error never goes away > need to debug this issue
        .string()    
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    tos: yup
        .boolean()
        .required('You must accept our Terms of Service')
});

export default formSchema;