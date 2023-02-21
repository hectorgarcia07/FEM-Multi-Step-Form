import FormHeader from "../../FormControlContainer/FormHeader"
import InfoParagraph from "../../FormControlContainer/InfoParagraph"
import { useFormikContext } from "formik";
import FormGroup from '@mui/material/FormGroup';
import AddOnsContainer from "./AddOnsContainer";
import FormControlLabelContainer from "./FormControlLabelContainer";
import CustomCheckbox from "./CustomCheckbox";
import CheckBoxLabelContainer from "./CheckBoxLabelContainer/CheckBoxLabelContainer";

const PickAddOns = () => {
    const { values, handleChange, ...props } = useFormikContext()
    const CheckboxDetail = {
        onlineService: {
            label: 'Online service',
            labelDescription: 'Access to multiplayer games',
            price: {
                month: '+$1/mo',
                year: '+$10/yr'
            }
        },
        largerStorage: {
            label: 'Larger storage',
            labelDescription: 'Extra 1TB of cloud save',
            price: {
                month: '+$2/mo',
                year: '+$20/yr'
            }
        },
        customProfile: {
            label: 'Customizable profile',
            labelDescription: 'Custom theme on your profile',
            price: {
                month: '+$2/mo',
                year: '+$20/yr'
            }
        }
    }

    return (
        <AddOnsContainer>
            <FormHeader >
                Pick add-ons
            </FormHeader>
            <InfoParagraph>
                Add-ons help enhance your gaming experience.
            </InfoParagraph>

            <FormGroup>
                <FormControlLabelContainer
                    control={<CustomCheckbox checked={ values.addOns.includes("0") } />}
                    label={ <CheckBoxLabelContainer description={ CheckboxDetail.onlineService } /> }
                    value={0}
                    name="addOns"
                    onChange={handleChange}
                    sx={{ width: '100%'}}
                    disableTypography={true}
                />

                <FormControlLabelContainer
                    control={<CustomCheckbox checked={ values.addOns.includes("1") } />}
                    label={ <CheckBoxLabelContainer description={ CheckboxDetail.largerStorage }  /> }
                    value={1}
                    name="addOns"
                    onChange={handleChange}
                    disableTypography={true}
                />

                <FormControlLabelContainer
                    control={<CustomCheckbox checked={ values.addOns.includes("2") } />}
                    label={ <CheckBoxLabelContainer description={ CheckboxDetail.customProfile } /> }
                    value={2}
                    name="addOns"
                    onChange={handleChange}
                    disableTypography={true}
                />
            </FormGroup>
        </AddOnsContainer>
    )
}

export default PickAddOns