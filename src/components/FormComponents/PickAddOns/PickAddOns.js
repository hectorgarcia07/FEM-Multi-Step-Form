import FormControlContainer from "../FormControlContainer"
import FormHeader from "../FormHeader"
import InfoParagraph from "../../InfoParagraph"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormikContext } from "formik";
import FormGroup from '@mui/material/FormGroup';
import { Box, styled } from '@mui/system';

const Label = styled('div')(
    ({ theme }) => ({
        color: theme.colors.primary.marine_blue,
        fontWeight: '900',
        fontSize: '0.85rem',
        marginBottom: '0.4rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            fontSize: '1rem'
        },
    })
)

const LabelContainer = styled('div')(    
    ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            marginLeft: '1rem',
        },
    })
)

const Description = styled('div')(
    ({ theme }) => ({
        color: theme.colors.neutral.cool_gray,
        fontSize: '0.7rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            fontSize: '0.9rem',
        },
    })
)

const PayDescription = styled('div')(
    ({ theme }) => ({
        color: theme.colors.primary.purplish_blue,
        fontSize: '0.8rem',
        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            fontSize: '.9rem'
        },
    })
)

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

const FormControlLabelContainer = styled(FormControlLabel)(
    ({ theme, control: { props: { checked } } }) => {
        return ({
            margin: '0',
            border: `1px solid ${ checked ? theme.colors.primary.purplish_blue : theme.colors.neutral.light_gray }`,
            display: 'static',
            padding: '0.5rem',
            borderRadius: '5px',

            "&:not(:last-child)": {
                marginBottom: '1rem'
            },
    
            "&.Mui-checked ": {
                border: '1px solid black'
            },
    
            [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
                padding: '1.3rem 1rem',
                paddingRight: '2rem'
            },
        })
    }
)

const CustomCheckbox = styled(Checkbox)(
    ({ theme }) => ({
        color: `${ theme.colors.neutral.light_gray }`,

        '&.Mui-checked': {
            color: `${ theme.colors.primary.purplish_blue }`,
        }
    })
)

const AddOnsContainer = styled(FormControlContainer)(
    ({ theme }) => ({
        marginBottom: '9rem',
        '&.Mui-checked': {
            color: `${ theme.colors.primary.purplish_blue }`,
        },

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
            marginBottom: '0',
        },
    })
)

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