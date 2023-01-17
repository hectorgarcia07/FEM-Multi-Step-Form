import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';


const FormHeader = styled(FormLabel)(({ theme }) => ({
    fontSize: '1.5rem',
    color: `${ theme.colors.primary.marine_blue }`
}));

export default FormHeader