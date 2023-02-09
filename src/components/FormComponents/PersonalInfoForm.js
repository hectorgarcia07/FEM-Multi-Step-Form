import * as React from 'react';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import CustomInputField from './CustomInputField';
import FormControlContainer from './FormControlContainer';
import { useTheme } from '@mui/material';
import { useFormikContext } from 'formik';
import { Field } from 'formik';

const  PersonalInfoForm = () => {
  const theme = useTheme()
  const { values, touched, errors, handleBlur, ...formikContext } = useFormikContext()

  const innerForm = {
    marginBottom: '4rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '0'
    }
  }

  return (
    <FormControlContainer sx={innerForm}>
      <FormHeader id="plan-selection-label" >
        Personal info
      </FormHeader>
      <InfoParagraph>
        Please provide your name, email address, and phone number.
      </InfoParagraph>

      <Field 
        name="name"
        id="name"
        placeholder="e.g. Stephen King" 
        label="Name"

        component={CustomInputField} 
      />

      <Field 
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com" 
        label="Email Address"

        component={CustomInputField} 
      />

      <Field 
        name="phone"
        id="phone"
        placeholder="e.g. +1 234 567 890" 
        label="Phone Number"
        maxLength={15}

        component={CustomInputField} 
      />
    </FormControlContainer>
  );
}

export default PersonalInfoForm