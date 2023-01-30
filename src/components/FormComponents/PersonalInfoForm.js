import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import CustomInput from './CustomInput';
import { useFormikContext, Formik, Form, Field } from 'formik';
import { useTheme } from '@mui/material/styles';

const  PersonalInfoForm = () => {
  const { values } = useFormikContext()
  const theme = useTheme()

  console.log(values)

  const innerForm = {
    padding: '2rem 1rem 0.5rem 1rem',
    maxWidth: '21rem',
    margin: '0 auto',
    position: 'relative',
    backgroundColor: `${ theme.colors.neutral.white }`,
  }

  return (
    <FormControl sx={innerForm}>
      <FormHeader id="plan-selection-label" >
        Personal info
      </FormHeader>
      <InfoParagraph>
        Please provide your name, email address, and phone number.
      </InfoParagraph>
      <CustomInput
        required
        label="Name"
        name="name"
        type='text'
        placeholder="e.g. Stephen King"
        maxLength={28}
        sx={{ paddingTop: '1rem' }}
      />
      <CustomInput
      required
        label="Email Address"
        name="email"
        type='email'
        placeholder="e.g. stephenking@lorem.com"
        maxLength={35}
      />
      <CustomInput
        label="Phone Number"
        name="phone"
        type='text'
        placeholder="e.g. +1 234 567 890"
        maxLength={15}
      />
    </FormControl>
  );
}

export default PersonalInfoForm