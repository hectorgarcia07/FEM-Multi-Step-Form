import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  FormControlContainer,
  InfoParagraph,
  FormHeader
 } from '../../FormControlContainer';
import { useFormikContext } from 'formik';
import {
  CustomSwitch,
  CustomRadio,
  RadioContainer,
  Description,
  RadioGroupContainer
} from './'

function SelectPlanForm() {
  const theme = useTheme()
  const { values, setFieldValue } = useFormikContext()

  const innerForm = {
    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '4rem'
    }
  }

  return (
    <FormControlContainer sx={innerForm}>
      <FormHeader >
        Select your plan
      </FormHeader>
      <InfoParagraph>
        You have the option of monthlhy or yearly billing
      </InfoParagraph>

      <RadioGroupContainer
        defaultValue="pro"
        name="plan"
        value={`${ values.plan }`}
        onChange={(event) => {
          setFieldValue('plan', event.currentTarget.value)
        }}
      >
        <RadioContainer value="arcade" control={<CustomRadio icon={ theme.icons.arcade }/>} label={<Description title={"Arcade"}  name="arcade" />} />
        <RadioContainer value="advanced" control={<CustomRadio icon={ theme.icons.advanced } />} label={<Description title={"Advanced"}  name="advanced" />} />
        <RadioContainer value="pro" control={<CustomRadio icon={ theme.icons.pro }/>} label={<Description title={"Pro"} name="pro" />} />
      </RadioGroupContainer>

      <CustomSwitch  />
    </FormControlContainer>
  );
}

export default SelectPlanForm