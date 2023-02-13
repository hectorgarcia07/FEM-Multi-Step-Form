import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import FormHeader from './FormHeader';
import { Box } from '@mui/system';
import InfoParagraph from '../InfoParagraph';
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

const PlanSelection = () => {
    const { values: { plan, planLength }, setFieldValue } = useFormikContext()
    const planUpper = plan.charAt(0).toUpperCase() + plan.slice(1)

    const price = {
        arcade: {
            month: 9,
            year: 90
        },
        advanced: {
            month: 12,
            year: 120,
        },
        pro: {
            month: 15,
            year: 150
        }
    }

    const planPrice = planLength ? price[plan].year : price[plan].month
    const planType = planLength ? 'yr' : 'mo'

    return (
        <Box>
            <Box>
                <Box>
                    {`${planUpper} (Monthly)`}
                </Box>
                <Box>
                    Change
                </Box>
            </Box>
            <Box>
                { `$${planPrice}/${planType}` }
            </Box>
        </Box>
    )
}

const AddOnsSelection = () => {
    const { values: { plan, planLength, addOns }, setFieldValue } = useFormikContext()
    const planUpper = plan.charAt(0).toUpperCase() + plan.slice(1)

    const price = {
        0: {
            month: 1,
            year: 10
        },
        1: {
            month: 2,
            year: 20,
        },
        2: {
            month: 2,
            year: 20
        }
    }
    const serviceType = {
        0: "Online service",
        1: "Larger storage",
        2: "Customizable profile"
    }

    const planType = planLength ? 'yr' : 'mo'

    return (
        <Box>
            {
                addOns.map( value => {
                    console.log(value)
                    return (
                        <Box>
                            <Box>
                                {`${serviceType[value]}`}
                            </Box>
                            <Box>
                                { `+${planLength ? price[value].year : price[value].year}/${planType}` }
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

const TotalContainer = () => {
    const { values: { plan, planLength, addOns }, setFieldValue } = useFormikContext()
    const planUpper = plan.charAt(0).toUpperCase() + plan.slice(1)

    const pricePlan = {
        arcade: {
            month: 9,
            year: 90
        },
        advanced: {
            month: 12,
            year: 120,
        },
        pro: {
            month: 15,
            year: 150
        }
    }

    const priceAddOns = {
        0: {
            month: 1,
            year: 10
        },
        1: {
            month: 2,
            year: 20,
        },
        2: {
            month: 2,
            year: 20
        }
    }

    const planType = planLength ? 'yr' : 'mo'
    const planPrice = planLength ? pricePlan[plan].year : pricePlan[plan].month
    const addOnsPrice = addOns.reduce( (total, value) => (planLength ? priceAddOns[value].year : priceAddOns[value].year) + total, 0 )
    const totalPrice = planPrice + addOnsPrice

    return (
        <Box>
            <Box>
                {`Total (per ${ planLength ? 'year' : 'month'}`}
            </Box>
            <Box>
                { `+${totalPrice}/${planType}` }
            </Box>
        </Box>
    )
}

const ReviewOptions = () => {
  const theme = useTheme()
  const { values, setFieldValue } = useFormikContext()
  console.log("Value", values)

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

  const ReviewOptionsContainer = styled('div')(({ theme }) => ({
    
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      
    },
  }));

  const PlanTypeContainer = styled('div')(({ theme }) => ({
    
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      
    },
  }));

  return (
    <FormControlContainer sx={innerForm}>
      <FormHeader id="plan-selection-label" >
        Finishing up
      </FormHeader>
      <InfoParagraph>
        Double-check everything looks OK before confirming.
      </InfoParagraph>

      <ReviewOptionsContainer>
        <PlanTypeContainer>
            <PlanSelection />
            <AddOnsSelection />
            <TotalContainer />
        </PlanTypeContainer>

      </ReviewOptionsContainer>
    </FormControlContainer>
  );
}

export default ReviewOptions
