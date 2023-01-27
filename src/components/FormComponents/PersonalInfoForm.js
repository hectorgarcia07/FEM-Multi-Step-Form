import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import CustomInput from './CustomInput';

const  PersonalInfoForm = () => {
  const theme = useTheme()

  const innerForm = {
    padding: '2rem 1rem',
    maxWidth: '21rem',
    margin: '0 auto',
    position: 'relative',      
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
            label="Name"
            name="name"
            type='text'
            placeholder="e.g. Stephen King"
            maxLength={28}
            sx={{ paddingTop: '1rem' }}
        />
        <CustomInput
            label="Email Address"
            name="email"
            type='email'
            placeholder="e.g. stephenking@lorem.com"
            maxLength={28}
        />
    </FormControl>
  );
}

export default PersonalInfoForm