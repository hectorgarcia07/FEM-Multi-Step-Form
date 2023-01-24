import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHeader from './FormHeader';
import { Box } from '@mui/system';
import CustomSwitch from './CustomSwitch'
import InfoParagraph from '../InfoParagraph';
import RadioContainer from '../containers/RadioContainer';
import CustomRadio from './CustomRadio';

const Description = ({ title, price}) => {
  const theme = useTheme()

  return (
    <Box>
      <Box sx={{ color: theme.colors.primary.marine_blue, fontWeight: '900' }}>{ title }</Box>
      <Box sx={{ color: theme.colors.neutral.cool_gray }}>{ price }</Box>
    </Box>
  )
}

function SelectPlanForm() {
  const theme = useTheme()

  console.log(theme.icons.advanced)
  const innerForm = {
    padding: '2rem 1.5rem',
    maxWidth: '22rem',
    margin: '0 auto',
    position: 'relative',      
  }

  return (
    <FormControl sx={innerForm}>
      <FormHeader id="plan-selection-label" >
        Select your plan
      </FormHeader>
      <InfoParagraph>
        You have the option of monthlhy or yearly billing
      </InfoParagraph>

      <RadioGroup
        aria-labelledby="plan-selection-label"
        defaultValue="arcade"
        name="plan-selection"
      >
        <RadioContainer value="arcade" control={<CustomRadio icon={ theme.icons.arcade }/>} label={<Description title={"Arcade"} price={"$9/mo"} />} />
        <RadioContainer value="advanced" control={<CustomRadio icon={ theme.icons.advanced }/>} label={<Description title={"Advanced"} price={"$12/mo"} />} />
        <RadioContainer value="pro" control={<CustomRadio icon={ theme.icons.pro }/>} label={<Description title={"Pro"} price={"$15/mo"} />} />
      </RadioGroup>

      <CustomSwitch  />
    </FormControl>
  );
}

export default SelectPlanForm