import * as yup from 'yup'

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Username must be at least 2 characters")
        .required("Username is Required"),
    size: yup
        .string()
        .min(3, "Password must be at least 3 characters")
        .required("Password is Required"),
    pepperoni: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions"),
    olives: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions"),
    pineapple: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions"),
    bacon: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions"),
    instructions: yup
        .string()

})

export default FormSchema;