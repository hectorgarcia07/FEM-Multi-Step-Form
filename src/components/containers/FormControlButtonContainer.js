import { Box } from '@mui/system';
import Button from '@material-ui/core/Button';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import { useTheme } from '@mui/material/styles';

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()
    const theme = useTheme()

    const styles = {
        backgroundColor: `${ theme.colors.neutral.white }`,
        padding: '0.5rem 1rem',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    }

    return (
        <Box sx={styles}>
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