import { styled } from '@mui/material/styles';
import { usePageValues } from '../hooks/PageControlContextProvider';
import { useTheme } from '@mui/material/styles';

const Banner = () => {
    const [ pageState, dispatch] = usePageValues()
    const theme = useTheme()

    const StepLabel = styled('div')(({ theme }) => ({
        color: theme.colors.neutral.magnolia,
        fontSize: '0.7rem',
    }));

    const StepInfo = styled('div')(({ theme }) => ({
        color: theme.colors.neutral.white,
        fontSize: '0.9rem',
        fontWeight: 'bold'
    }));

    const UnorderedList = styled('ul')(({ theme }) => ({
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'space-around',
        position: 'static',
        zIndex: '10',
        width: '100%',
        margin: "2rem 0",

        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
            flexDirection: 'column',
            margin: '2.5rem 1rem',
            marginRight: '6rem'
        }
    }));

    const ListItem = styled('li')(({ theme }) => ({
        display: 'flex',
        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
            margin: '1rem 0rem',
            [`&:first-of-type`] :{
                marginTop: '0'
            }
        }
    }));

    const ListInfo = styled('div')(({ theme }) => ({
        display: 'none',
        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
            display: 'block',
            marginLeft: '0.5rem'
        }
    }));

    const ListNumber = styled('div')(({ theme }) => ({
        margin: '0 0.5rem',
        borderRadius: '50%',
        listStyle: 'none',
        border: '1px solid white',
        width: '33px',
        height: '33px',
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        fontWeight: '900',
    }));

    const ListContainer = styled('div')(({ theme }) => ({
        position: 'relative',
    }));

    const setStyle = (num) => {
        return {
            color: `${ pageState.curr_form_page === num ? theme.colors.primary.purplish_blue : 'white' }`,
            backgroundColor: `${ pageState.curr_form_page === num ? theme.colors.primary.light_blue : 'transparent' }`
        }
    }

    return (
        <ListContainer >
            <UnorderedList>
                <ListItem>
                    <ListNumber id='page-0-form' sx={setStyle(0)} >1</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 1</StepLabel>
                        <StepInfo>YOUR INFO</StepInfo>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber id='page-1-form' sx={setStyle(1)}>2</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 2</StepLabel>
                        <StepInfo>SELECT PLAN</StepInfo>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber id='page-2-form' sx={setStyle(2)}>3</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 3</StepLabel>
                        <StepInfo>ADD-ONDS</StepInfo>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber id='page-3-form' sx={setStyle(3)}>4</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 4</StepLabel>
                        <StepInfo>SUMMARY</StepInfo>
                    </ListInfo>
                </ListItem>
            </UnorderedList>
        </ListContainer>
    )
}

export default Banner