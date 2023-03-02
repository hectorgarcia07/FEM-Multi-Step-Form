import { useFormikContext } from 'formik';
import {
    pricePlan,
    priceAddOns
} from '../../../Plans'
import { Box } from '@mui/system';
import DescriptionContainer from './DescriptionContainer';
import TotalPriceContainer from './TotalPriceContainer'

const TotalContainer = () => {
    const { values: { plan, planLength, addOns } } = useFormikContext()
    const planType = planLength ? 'yr' : 'mo'
    const planPrice = planLength ? pricePlan[plan].year : pricePlan[plan].month
    const addOnsPrice = addOns.reduce( (total, value) => (!planLength ? priceAddOns[value].month : priceAddOns[value].year) + total, 0 )
    const totalPrice = planPrice + addOnsPrice

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <DescriptionContainer>
                {`Total (per ${ planLength ? 'year' : 'month'}`}
            </DescriptionContainer>
            <TotalPriceContainer >
                { `$${totalPrice}/${planType}` }
            </TotalPriceContainer>
        </Box>
    )
}

export default TotalContainer