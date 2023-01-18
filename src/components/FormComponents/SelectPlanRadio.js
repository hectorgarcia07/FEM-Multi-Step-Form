import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import { ReactSVG } from "react-svg";

import RadioContainer from '../containers/RadioContainer';
import { useRadioGroup } from '@mui/material/RadioGroup';
import CustomRadio from './CustomRadio';

const Description = () => {
  return (
    <div>
      <p>Arcade</p>
      <p>$9/mo</p>
    </div>
  )
}

function SelectPlanRadio() {
  const theme = useTheme()

  const Advanced = theme.icons.advanced

  console.log(theme.icons.advanced)
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
        <RadioContainer value="arcade" control={<CustomRadio icon={ <ReactSVG src={theme.icons.arcade} /> }/>} label={<Description />} />
        <FormControlLabel value="advanced" control={<Radio  />} label="Male" />
        <FormControlLabel value="pro" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectPlanRadio