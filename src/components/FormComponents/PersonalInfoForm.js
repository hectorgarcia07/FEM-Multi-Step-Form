import * as React from 'react';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import CustomInput from './CustomInput';
import FormControlContainer from './FormControlContainer';
import { useTheme } from '@mui/material';

const  PersonalInfoForm = () => {
  const theme = useTheme()

  const innerForm = {
    marginBottom: '6rem',

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
      <CustomInput
        required
        label="Name"
        name="name"
        type='text'
        placeholder="e.g. Stephen King"
        maxLength={28}
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
    </FormControlContainer>
  );
}

export default PersonalInfoForm