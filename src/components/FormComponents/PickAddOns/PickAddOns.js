import FormControlContainer from "../FormControlContainer"
import FormHeader from "../FormHeader"
import InfoParagraph from "../../InfoParagraph"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Field } from 'formik';
import { useFormikContext } from "formik";

const PickAddOns = () => {
    const { values } = useFormikContext()

    return (
        <FormControlContainer>
            <FormHeader id="plan-selection-label" >
                Pick add-ons
            </FormHeader>
            <InfoParagraph>
                Add-ons help enhance your gaming experience.
            </InfoParagraph>

            <Field
                type="checkbox"
                name="online-service"
                value={1}
                key={'online-service'}
                as={
                    <FormControlLabel />
                }
                control={<Checkbox />}
                label={"Online service"}
            />
        </FormControlContainer>
    )
}

export default PickAddOns