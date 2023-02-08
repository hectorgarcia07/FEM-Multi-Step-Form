import { Box } from '@mui/system';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useFormikContext } from 'formik';

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()
    const { errors, isValid, ...props } = useFormikContext()

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

        ['&:disabled']: {
            cursor: 'not-allowed',
            backgroundColor: 'grey'
        },

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            padding: '0.9rem 2rem',
            borderRadius: '10px',
            fontSize: '1rem'
        },
    }));

    const BackButton = styled(BaseButton)(({ theme }) => ({
        visibility: `${ pageState.curr_form_page === 0 ? 'hidden' : 'visible' }`,

        border: 'none',
        color: `${ theme.colors.neutral.cool_gray }`,

        ['&:hover']: {
            color: `${ theme.colors.primary.marine_blue }`,
            backgroundColor: 'white'
        }
    }));

    const NextButton = styled(BaseButton)(({ theme }) => ({
        color: `${ theme.colors.neutral.white }`,
        backgroundColor: `${ theme.colors.primary.marine_blue }`,
        borderRadius: '5px',

        ['&:hover']: {
            backgroundColor: `${ theme.colors.primary.purplish_blue }`
        }
    }));

    return (
        <Box sx={styles}>
            <BackButton 
                type="button"
                onClick={ () => dispatch( { type: 'PREV_FORM_PAGE' } ) }
                name={'Back-Button'}
                onMouseDown={ event => { event.preventDefault() }}
                disabled={ !isValid || !!Object.keys(errors).length}
            >
                Go Back
            </BackButton>

            <NextButton 
                type="button"
                onClick={ () => dispatch( { type: 'NEXT_FORM_PAGE' } ) }
                onMouseDown={ event => { event.preventDefault() }}
                name={'Next-Button'}
                disabled={ !isValid || !!Object.keys(errors).length }
            >
                Next Step
            </NextButton>
        </Box>
    )
}

export default FormControlButtonContainer