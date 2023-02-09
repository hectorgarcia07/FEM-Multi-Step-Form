import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRadioGroup } from '@mui/material/RadioGroup';

const RadioContainer = styled(FormControlLabel)(({ theme, value }) => {
    const radioGroup = useRadioGroup()
    const selected = value === radioGroup.value

    return ({
        padding: '1rem',
        alignItems: 'flex-start',
        color: `${ theme.colors.primary.marine_blue }`,
        border: `1px solid ${ selected ? theme.colors.primary.purplish_blue : theme.colors.neutral.light_gray }`,
        borderRadius: '10px',
        margin: '0',

        ["&:hover"]: {
            borderColor: `${ theme.colors.primary.purplish_blue }`
        },
        
        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '1rem',
            padding: '1rem 4rem 0.5rem 1rem',
            flexWrap: 'none'
        },
    })
}); 

export default RadioContainer