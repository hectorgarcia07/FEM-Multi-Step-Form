import * as React from 'react';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import CustomInput from './CustomInput';
import FormControlContainer from './FormControlContainer';
import { useTheme } from '@mui/material';
import { useFormikContext } from 'formik';
import Button from '@mui/material/Button';
import NewPersonalInfoForm from './NewPersonalInfoForm';
import { Field } from 'formik';

const  PersonalInfoForm = () => {
  const theme = useTheme()
  const { values, touched, errors, handleBlur, ...formikContext } = useFormikContext()

  console.log( formikContext )
  console.log("TOuched and errors", touched, errors)
  console.log('Error state', 'email' in touched && 'email' in errors )
  console.log()

  const innerForm = {
    marginBottom: '6rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '0'
    }
  }

  /*
    id="email"
    name="email"
    label="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
*/

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

        component={NewPersonalInfoForm} 
      />

      <Field 
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com" 
        label="Email"

        component={NewPersonalInfoForm} 
      />

      <Field 
        name="phone"
        id="phone"
        placeholder="e.g. +1 234 567 890" 
        label="Phone"
        maxLength={15}

        component={NewPersonalInfoForm} 
      />


      <Button>

      </Button>
    </FormControlContainer>
  );
}

export default PersonalInfoForm