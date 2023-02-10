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

const Description = ({ title, gamingPlan, name }) => {
  const theme = useTheme()
  const { values, setFieldValue } = useFormikContext()

  return (
    <Box  >
      <Box sx={{ color: theme.colors.primary.marine_blue, fontWeight: '900' }}>{ title }</Box>
      <Box sx={{ color: theme.colors.neutral.cool_gray }}>
        { values.planLength ? `${gamingPlan.yearly[name]}`: `${gamingPlan.monthly[name]}` }
      </Box>
      { values.planLength 
        ? 
        <Box sx={{ color: theme.colors.primary.marine_blue, fontSize: '0.8rem' }}>
          2 months free
        </Box>
        :
        null
      }
    </Box>
  )
}

function SelectPlanForm() {
  const theme = useTheme()
  const { values, setFieldValue } = useFormikContext()

  const gamingPlan = {
    monthly: {
      arcade: '$9/mo',
      advanced: '$12/mo',
      pro: '$15/mo'
    },
    yearly: {
      arcade: '$90/yr',
      advanced: '$120/ry',
      pro: '$150/yr'
    }
  }

  const innerForm = {

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '4rem'
    }
  }

  const RadioGroupContainer = styled(RadioGroup)(({ theme }) => ({
    margin: '0',

    "label:not(:last-child)": {
      marginBottom: '0.5rem'
    },
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      flexWrap: 'inherit',
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
        <RadioContainer value="arcade" control={<CustomRadio icon={ theme.icons.arcade }/>} label={<Description title={"Arcade"} gamingPlan={gamingPlan} name="arcade" />} />
        <RadioContainer value="advanced" control={<CustomRadio icon={ theme.icons.advanced } />} label={<Description title={"Advanced"} gamingPlan={gamingPlan} name="advanced" />} />
        <RadioContainer value="pro" control={<CustomRadio icon={ theme.icons.pro }/>} label={<Description title={"Pro"} gamingPlan={gamingPlan} name="pro" />} />
      </RadioGroupContainer>

      <CustomSwitch  />
    </FormControlContainer>
  );
}

export default SelectPlanForm