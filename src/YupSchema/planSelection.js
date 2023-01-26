import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const PlanSelection = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup.string().email().required("Please enter a valid email address"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    plan: yup.string().required(),
    planLength: yup.boolean().required(),
    addOns: yup.array().min(1).of(yup.string().required()).required(),
})

export default PlanSelection