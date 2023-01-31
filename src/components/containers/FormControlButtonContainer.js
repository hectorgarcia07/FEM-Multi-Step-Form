import { Box } from '@mui/system';
import Button from '@material-ui/core/Button';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()
    const theme = useTheme()

    console.log( pageState.curr_form_page )

    const styles = {
        backgroundColor: `${ theme.colors.neutral.white }`,
        padding: '0.5rem 1rem',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    }

    const BackButton = styled('button')(({ theme }) => ({
        visibility: `${ pageState.curr_form_page ? '' : 'hidden' }`
    }));

    const NextButton = styled('button')(({ theme }) => ({
        padding: '0.7rem 1rem',
        color: `${ theme.colors.neutral.white }`,
        backgroundColor: `${ theme.colors.primary.marine_blue }`,
        fontWeight: '600',
        borderRadius: '5px'
    }));

    return (
        <Box sx={styles}>
            <BackButton 
                color="primary" 
                variant="contained" 
                type="button"
                onClick={ () => dispatch( { type: 'PREV_FORM_PAGE' } ) }
            >
                Back
            </BackButton>

            <NextButton 
                color="primary" 
                variant="contained" 
                type="button"
                onClick={ () => dispatch( { type: 'NEXT_FORM_PAGE' } ) }
            >
                Next Step
            </NextButton>
        </Box>
    )
}

export default FormControlButtonContainer