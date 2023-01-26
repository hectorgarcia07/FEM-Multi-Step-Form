import { Box } from '@mui/system';
import Button from '@material-ui/core/Button';

const FormControlButtonContainer = ({ dispatchCurrFormPage }) => {
    return (
        <Box sx={{  }}>
            <Button 
                color="primary" 
                variant="contained" 
                type="button"
                onClick={ () => dispatchCurrFormPage( { type: 'PREV_FORM_PAGE' } ) }
            >
                Back
            </Button>
            <Button 
                color="primary" 
                variant="contained" 
                type="button"
                onClick={ () => dispatchCurrFormPage( { type: 'NEXT_FORM_PAGE' } ) }
            >
                Next
            </Button>
        </Box>
    )
}

export default FormControlButtonContainer