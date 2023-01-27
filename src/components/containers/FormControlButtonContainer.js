import { Box } from '@mui/system';
import Button from '@material-ui/core/Button';
import { usePageValues } from '../../hooks/PageControlContextProvider';

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()

    return (
        <Box sx={{  }}>
            <Button 
                color="primary" 
                variant="contained" 
                type="button"
                onClick={ () => dispatch( { type: 'PREV_FORM_PAGE' } ) }
            >
                Back
            </Button>
            <Button 
                color="primary" 
                variant="contained" 
                type="button"
                onClick={ () => dispatch( { type: 'NEXT_FORM_PAGE' } ) }
            >
                Next
            </Button>
        </Box>
    )
}

export default FormControlButtonContainer