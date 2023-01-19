import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRadioGroup } from '@mui/material/RadioGroup';

const RadioContainer = styled(FormControlLabel)(({ theme, value }) => {
    const radioGroup = useRadioGroup()
    const selected = value === radioGroup.value
    console.log(value === radioGroup.value)

    return ({
        padding: '1rem',
        margin: '0.5rem 0',
        color: `${ theme.colors.primary.marine_blue }`,
        border: `1px solid ${ selected ? theme.colors.primary.purplish_blue : theme.colors.neutral.light_gray }`,
        borderRadius: '10px'
        
    })
}); 

export default RadioContainer