import * as yup from 'yup';

const MyPlantsSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Name is required')
    .min(3, 'Must be at least 3 characters!')
    .max(30, "you've exceeded the limit on characters"),
    password: yup
    .string()
    .trim()
    .required("password is required")
    .min(3, "Password must be longer")
    .max(30, "password is too long."),
    phone: yup
    .string()
    .required('your # is required')
    .max(8, 'must be your full phone #')
})

export default MyPlantsSchema;