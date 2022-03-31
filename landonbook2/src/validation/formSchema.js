import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(3, "username must be 3 characters long!!"),
    email: yup
        .string()
        .email("Must be an valid email")
        .required("email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be 6 characters long!"),
    agree: yup
        .boolean()
        .oneOf([true], "Must accept terms of conditions")


})

export default formSchema;