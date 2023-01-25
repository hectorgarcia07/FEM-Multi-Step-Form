import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import FormContainer from '../containers/FormContainer';
import SelectPlanForm from './SelectPlanForm';

const FormLayout = () => {
    const theme = useTheme()
    const outerForm = {
        backgroundColor: `${ theme.colors.neutral.white }`,
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid transparent',
        margin: '0 0.6rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            paddingLeft: '5rem',
        },
    }

    return(
        <FormContainer >
            <Box sx={outerForm}>
                <SelectPlanForm />
            </Box>
           <Box sx={{  }}>Footer buttons</Box>
        </FormContainer>
    )
}

export default FormLayout