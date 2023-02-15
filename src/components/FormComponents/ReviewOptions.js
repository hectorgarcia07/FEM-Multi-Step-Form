import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import FormHeader from './FormHeader';
import { Box } from '@mui/system';
import InfoParagraph from '../InfoParagraph';
import FormControlContainer from './FormControlContainer';
import { useFormikContext } from 'formik';
import { styled } from '@mui/material/styles';
import { usePageValues } from '../../hooks/PageControlContextProvider';

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

const OptionsContainer = styled(Box)(({ theme }) => ({ 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
   
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        
    },
}));

const DescriptionContainer = styled(Box)(({theme}) => ({
    color: theme.colors.neutral.cool_gray, 
    fontSize: '0.9rem',
}))

const ChangeContainer = styled(DescriptionContainer)(({theme}) => ({
    color: theme.colors.neutral.cool_gray, 
    fontSize: '0.9rem',
    textDecoration: 'underline',
    textDecorationColor: 'black',
    ["&:hover"]:{
        cursor: 'pointer',
    },

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        paddingTop: '0.3rem',
    },
}))

const PlanSelection = () => {
    const { values: { plan, planLength }, setFieldValue } = useFormikContext()
    const theme = useTheme()
    const planUpper = plan.charAt(0).toUpperCase() + plan.slice(1)
    const planPrice = planLength ? pricePlan[plan].year : pricePlan[plan].month
    const planType = planLength ? 'yr' : 'mo'
    const [ pageState, dispatch ] = usePageValues()

    return (
        <OptionsContainer sx={{ 
            display: 'flex', 
            paddingBottom: '1rem', 
            borderBottom: `1px solid ${theme.colors.neutral.light_gray}`
        }}>
            <Box>
                <Box sx={{ 
                    color: theme.colors.primary.marine_blue, 
                    fontSize: '0.9rem',
                    fontWeight: '900'
                }}>
                    {`${planUpper} (Monthly)`}
                </Box>
                <ChangeContainer 
                    onClick={ () => dispatch( { type: 'CHANGE_PLAN_TYPE' } ) }
                >
                    Change
                </ChangeContainer>
            </Box>
            <Box sx={{ 
                color: theme.colors.primary.marine_blue, 
                fontSize: '0.9rem',
                fontWeight: '900'
            }}>
                { `$${planPrice}/${planType}` }
            </Box>
        </OptionsContainer>
    )
}

const SelectionContainer = styled(Box)(({theme}) => ({
    display: 'flex', 
    justifyContent: 'space-between',
    "&:not(:last-child)": {
        marginBottom: '1rem'
    },

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        paddingTop: '0.5rem',
    },
}))

const AddOneSelectionContainer = styled(OptionsContainer)(({theme}) => ({
    marginBottom: '2rem',

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        marginBottom: '3rem'
    },
}))

const AddOnsSelection = () => {
    const { values: { plan, planLength, addOns }, setFieldValue } = useFormikContext()
    const planType = planLength ? 'yr' : 'mo'
    const theme = useTheme()
    const serviceType = {
        0: "Online service",
        1: "Larger storage",
        2: "Customizable profile"
    }

    return (
        <AddOneSelectionContainer>
            {
                addOns.map( value => {
                    return (
                        <SelectionContainer key={`key-${value}`} >
                            <DescriptionContainer>
                                {`${serviceType[value]}`}
                            </DescriptionContainer>
                            <Box sx={{ color: theme.colors.primary.marine_blue, fontSize: '0.9rem' }}>
                                { `+$${planLength ? priceAddOns[value].year : priceAddOns[value].month}/${planType}` }
                            </Box>
                        </SelectionContainer>
                    )
                })
            }
        </AddOneSelectionContainer>
    )
}

const TotalPriceContainer = styled(Box)(({theme}) => ({
    color: theme.colors.primary.purplish_blue, 
    fontWeight: '900',

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        fontSize: '1.2rem'
    },
}))

const TotalContainer = () => {
    const { values: { plan, planLength, addOns }, setFieldValue } = useFormikContext()
    const planUpper = plan.charAt(0).toUpperCase() + plan.slice(1)

    const planType = planLength ? 'yr' : 'mo'
    const planPrice = planLength ? pricePlan[plan].year : pricePlan[plan].month
    const addOnsPrice = addOns.reduce( (total, value) => (planLength ? priceAddOns[value].month : priceAddOns[value].year) + total, 0 )
    const totalPrice = planPrice + addOnsPrice
    const theme = useTheme()

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <DescriptionContainer>
                {`Total (per ${ planLength ? 'year' : 'month'}`}
            </DescriptionContainer>
            <TotalPriceContainer >
                { `+$${totalPrice}/${planType}` }
            </TotalPriceContainer>
        </Box>
    )
}

const ReviewOptions = () => {
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
    marginBottom: '9rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '4rem'
    }
  }

  const ReviewOptionsContainer = styled('div')(({ theme }) => ({
    padding: '1rem',
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      padding: '1.5rem'
    },
  }));

  const PlanTypeContainer = styled('div')(({ theme }) => ({
    
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      
    },
  }));


  return (
    <FormControlContainer sx={innerForm}>
      <FormHeader>
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
