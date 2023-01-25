import { styled } from '@mui/material/styles';

const Banner = () => {
    const StepLabel = styled('div')(({ theme }) => ({
        color: theme.colors.neutral.magnolia,
        fontSize: '0.7rem',
    }));

    const StepInfo = styled('div')(({ theme }) => ({
        color: theme.colors.neutral.white,
        fontSize: '0.9rem',
        fontWeight: 'bold'
    }));

    const Image = styled('img')(({ theme }) => ({
        display: 'block',
        position: 'relative',
        content: `url(${theme.backgroundImg.mobile})`,

        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
            content: `url(${theme.backgroundImg.desktop})`,
        }
    }));

    const UnorderedList = styled('ul')(({ theme }) => ({
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'space-around',
        position: 'absolute',
        zIndex: '10',
        width: '100%',
        margin: "2.5rem 0",

        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
            flexDirection: 'column',
            margin: '2.5rem 1.5rem'
        }
    }));

    const ListItem = styled('li')(({ theme }) => ({
        display: 'flex',
        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
            '&:not(:first-of-type)': {
                margin: '1.2rem 0rem',

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
        margin: '0 0.6rem',
        borderRadius: '50%',
        listStyle: 'none',
        border: '1px solid white',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        fontWeight: '900',
        color: 'white'
    }));

    const ListContainer = styled('div')(({ theme }) => ({
        position: 'relative',
    }));

    return (
        <ListContainer >
            <UnorderedList>
                <ListItem>
                    <ListNumber>1</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 1</StepLabel>
                        <StepInfo>YOUR INFO</StepInfo>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber>2</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 2</StepLabel>
                        <StepInfo>SELECT PLAN</StepInfo>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber>3</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 3</StepLabel>
                        <StepInfo>ADD-ONDS</StepInfo>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber>4</ListNumber>
                    <ListInfo>
                        <StepLabel>STEP 4</StepLabel>
                        <StepInfo>SUMMARY</StepInfo>
                    </ListInfo>
                </ListItem>
            </UnorderedList>
            <Image />
        </ListContainer>
    )
}

export default Banner