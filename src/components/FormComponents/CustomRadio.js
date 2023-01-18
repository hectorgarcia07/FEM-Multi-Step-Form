import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import { useRadioGroup } from '@mui/material/RadioGroup';

const CustomRadio = styled(Radio)(({ theme, }) => {
    const radioGroup = useRadioGroup();
    console.log(radioGroup.value)
    return ({
        padding: '0',
        margin: '0',
        color: `${ theme.colors.primary.marine_blue }`
    })
});

export default CustomRadio