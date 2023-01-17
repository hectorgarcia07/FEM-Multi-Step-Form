import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import FormContainer from '../containers/FormContainer';
import SelectPlanRadio from './SelectPlanRadio';

const FormLayout = () => {
    const theme = useTheme();

    const innerForm = {
        padding: '2rem 1.5rem',
        maxWidth: '22rem',
        margin: '0 auto',
        position: 'relative',
        
    }

    const outerForm = {
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid transparent',
        margin: '0 0.6rem'
    }

    return(
        <>
            <FormContainer >
                <Box sx={outerForm}>
                    <SelectPlanRadio />
                </Box>
               <Box sx={{  }}>Footer buttons</Box>
            </FormContainer>
        </>
    )
}

export default FormLayout