import { useTheme } from '@mui/material/styles';
import FormContainer from '../containers/FormContainer';
import SelectPlanForm from './SelectPlanForm';
import PlanSelection from '../../YupSchema/planSelection'
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import React, { useState, useReducer, createContext } from 'react'
import FormStepReducer from '../../reducer/FormStepReducer'
import FormControlButtonContainer from '../containers/FormControlButtonContainer'

const FormLayout = () => {
    const theme = useTheme()
    const outerForm = {
        backgroundColor: `${ theme.colors.neutral.white }`,
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid transparent',
        margin: '0 0.6rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            paddingLeft: '5rem',
            border: '1px solid black'
        },
    }

    const [currFormPage, dispatchCurrFormPage] = useReducer(FormStepReducer, { curr_form_page: 0 });
    console.log(currFormPage)
    const formik = useFormik({
        validationSchema: PlanSelection,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    const Form = styled("form")(({ theme }) => ({
        
        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {

        }
    }));

    return(
        <FormContainer >
            <Form sx={outerForm} onSubmit={formik.handleSubmit} >
                <SelectPlanForm />
                <FormControlButtonContainer dispatchCurrFormPage={dispatchCurrFormPage} />                
            </Form>
        </FormContainer>
    )
}

export default FormLayout