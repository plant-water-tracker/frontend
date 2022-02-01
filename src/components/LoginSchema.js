import  * as yup from 'yup';

const LoginSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("username is required")
    .min(3, "username is too short")
    .max(30, "username is too long"),
    password: yup
    .string()
    .trim()
    .required("password is required")
    .min(3, "Password must be longer")
    .max(30, "password is too long."),
})

export default LoginSchema;