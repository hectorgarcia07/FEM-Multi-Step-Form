import DescriptionContainer from "./DescriptionContainer"
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles'
import { useFormikContext } from "formik"
import {
    priceAddOns
} from '../../../Plans'
import SelectionContainer from './SelectionContainer'
import AddOneSelectionContainer from "./AddOneSelectionContainer";

const AddOnsSelection = () => {
    const { values: {  planLength, addOns } } = useFormikContext()
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

export default AddOnsSelection