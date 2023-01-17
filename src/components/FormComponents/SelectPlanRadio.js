import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';

function SelectPlanRadio() {
    const innerForm = {
        padding: '2rem 1.5rem',
        maxWidth: '22rem',
        margin: '0 auto',
        position: 'relative',
        
    }

  return (
    <FormControl sx={innerForm}>
      <FormHeader id="demo-radio-buttons-group-label">Select your plan</FormHeader>
      <InfoParagraph>You have the option of monthlhy or yearly billing</InfoParagraph>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectPlanRadio