import { useFormikContext } from "formik";
import { Box } from '@mui/system';
import LabelContainer from './LabelContainer'
import Label from './Label'
import Description from "./Description";
import PayDescription from "./PayDescription";

const CheckBoxLabelContainer = ({ description }) => {
    const { values } = useFormikContext()

    return(
        <LabelContainer>
            <Box >
                <Label>{ description.label }</Label>
                <Description>{ description.labelDescription }</Description>
            </Box>
            <PayDescription>{ values.planLength ? description.price.year : description.price.month }</PayDescription>
        </LabelContainer>
    )
}

export default CheckBoxLabelContainer