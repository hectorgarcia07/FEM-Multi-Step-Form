import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/system';

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

export default FormControlLabelContainer