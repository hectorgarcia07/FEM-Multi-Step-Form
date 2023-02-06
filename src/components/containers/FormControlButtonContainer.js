import { Box } from '@mui/system';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()
    const theme = useTheme()

    const styles = {
        backgroundColor: `${ theme.colors.neutral.white }`,
        padding: '0.5rem 0rem',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            padding: '1rem 0'
        },
    }

    const BaseButton = styled('button')(({ theme }) => ({
        padding: '0.7rem 1rem',
        fontWeight: '600',

        ['&:hover']: {
            cursor: 'pointer'
        },

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            padding: '0.9rem 2rem',
            borderRadius: '10px',
            fontSize: '1rem'
        },
    }));

    const BackButton = styled(BaseButton)(({ theme }) => ({

        border: 'none',
        color: `${ theme.colors.neutral.cool_gray }`
    }));

    const NextButton = styled(BaseButton)(({ theme }) => ({
        color: `${ theme.colors.neutral.white }`,
        backgroundColor: `${ theme.colors.primary.marine_blue }`,
        borderRadius: '5px',

    }));

    return (
        <Box sx={styles}>
            <BackButton 
                type="button"
                onClick={ () => dispatch( { type: 'PREV_FORM_PAGE' } ) }
                name={'Back-Button'}
            >
                Go Back
            </BackButton>

            <NextButton 
                type="button"
                onClick={ () => dispatch( { type: 'NEXT_FORM_PAGE' } ) }
                name={'Next-Button'}
            >
                Next Step
            </NextButton>
        </Box>
    )
}

export default FormControlButtonContainer