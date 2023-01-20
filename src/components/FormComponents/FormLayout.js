import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import FormContainer from '../containers/FormContainer';
import SelectPlanRadio from './SelectPlanRadio';

const FormLayout = () => {
    const outerForm = {
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid transparent',
        margin: '0 0.6rem'
    }

    return(
        <FormContainer >
            <Box sx={outerForm}>
                <SelectPlanRadio />
            </Box>
           <Box sx={{  }}>Footer buttons</Box>
        </FormContainer>
    )
}

export default FormLayout