import * as React from 'react';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import CustomInput from './CustomInput';
import FormControlContainer from './FormControlContainer';
import { useTheme } from '@mui/material';
import { useFormikContext } from 'formik';
import Button from '@mui/material/Button';
import NewPersonalInfoForm from './NewPersonalInfoForm';

const  PersonalInfoForm = () => {
  const theme = useTheme()
  const { values, touched, errors, ...formikContext } = useFormikContext()

  console.log( formikContext )
  console.log(values, touched, errors)

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
      <NewPersonalInfoForm
        id="email"
        name="email"
        label="Email"
        value={values.email}
        onChange={formikContext.handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <CustomInput
        required
        label="Name"
        name="name"
        type='text'
        placeholder="e.g. Stephen King"
        maxLength={28}
        value={ values.name }
      />
      
      <CustomInput
        label="Phone Number"
        name="phone"
        type='text'
        placeholder="e.g. +1 234 567 890"
        maxLength={15}
        value={ values.phone }
      />

      <Button>

      </Button>
    </FormControlContainer>
  );
}

export default PersonalInfoForm