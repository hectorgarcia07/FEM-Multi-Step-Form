import * as yup from 'yup';

const phoneRegExp = /^\+[1-9] [0-9]{3} [0-9]{3} [0-9]{4}/

const PlanSelection = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    phone: yup.string().matches(phoneRegExp, 'Format: +1 123 123 1234').required('Format: +1 123 123 1234'),
    plan: yup.string().required('This field is required'),
    planLength: yup.boolean().required(),
    addOns: yup.array().min(1).of(yup.string().required()).required(),
})

export const initialValues = {
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    planLength: false,
    addOns: []
  }

export default PlanSelection