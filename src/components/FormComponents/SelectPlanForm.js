import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormHeader from './FormHeader';
import { Box } from '@mui/system';
import CustomSwitch from './CustomSwitch'
import InfoParagraph from '../InfoParagraph';
import RadioContainer from '../containers/RadioContainer';
import CustomRadio from './CustomRadio';
import FormControlContainer from './FormControlContainer';
import { useFormikContext } from 'formik';
import { styled } from '@mui/material/styles';

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
  const { values, setFieldValue } = useFormikContext()
  console.log(values)

  const innerForm = {
    marginBottom: '4rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '0'
    }
  }

  const RadioGroupContainer = styled(RadioGroup)(({ theme }) => ({
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      flexWrap: 'inherit'
    },
  }));

  return (
    <FormControlContainer sx={innerForm}>
      <FormHeader id="plan-selection-label" >
        Select your plan
      </FormHeader>
      <InfoParagraph>
        You have the option of monthlhy or yearly billing
      </InfoParagraph>

      <RadioGroupContainer
        aria-labelledby="plan-selection-label"
        defaultValue="pro"
        name="plan"
        value={`${ values.plan }`}
        onChange={(event) => {
          setFieldValue('plan', event.currentTarget.value)
        }}
      >
        <RadioContainer value="arcade" control={<CustomRadio icon={ theme.icons.arcade }/>} label={<Description title={"Arcade"} price={"$9/mo"}  />} />
        <RadioContainer value="advanced" control={<CustomRadio icon={ theme.icons.advanced } />} label={<Description title={"Advanced"} price={"$12/mo"} />} />
        <RadioContainer value="pro" control={<CustomRadio icon={ theme.icons.pro }/>} label={<Description title={"Pro"} price={"$15/mo"} />} />
      </RadioGroupContainer>

      <CustomSwitch  />
    </FormControlContainer>
  );
}

export default SelectPlanForm