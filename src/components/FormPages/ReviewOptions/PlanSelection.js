import { useFormikContext } from "formik"
import { useTheme } from "@mui/material"
import { Box } from '@mui/material';
import { usePageValues } from "../../../hooks/PageControlContextProvider";
import {
    pricePlan
} from '../../../Plans'
import OptionsContainer from "./OptionsContainer";
import ChangeContainer from "./ChangeContainer";

const PlanSelection = () => {
    const { values: { plan, planLength } } = useFormikContext()
    const theme = useTheme()
    const planUpper = plan.charAt(0).toUpperCase() + plan.slice(1)
    const planPrice = planLength ? pricePlan[plan].year : pricePlan[plan].month
    const planType = planLength ? 'yr' : 'mo'
    const planTypeWord = planLength ? 'Yearley' : 'Monthly'
    const [ , dispatch ] = usePageValues()

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
                    {`${planUpper} (${planTypeWord})`}
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

export default PlanSelection