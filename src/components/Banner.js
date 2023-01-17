import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';

const Banner = () => {
    const theme = useTheme()

    const matches = useMediaQuery(`(max-width: ${theme.breakpoints.values.mobile}px)`);
    console.log(theme.breakpoints.values.mobile)

    const Image = styled('img')(({ theme }) => ({
        display: 'block',
        position: 'relative'
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
        margin: "2.5rem 0"
    }));

    const ListItem = styled('li')(({ theme }) => ({
        
    }));

    const ListInfo = styled('div')(({ theme }) => ({
        display: 'none'
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
        position: 'relative'
    }));

    return (
        <ListContainer >
            <UnorderedList>
                <ListItem>
                    <ListNumber>1</ListNumber>
                    <ListInfo>
                        <p>STEP 1</p>
                        <p>YOUR INFO</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber>2</ListNumber>
                    <ListInfo>
                        <p>STEP 2</p>
                        <p>SELECT PLAN</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber>3</ListNumber>
                    <ListInfo>
                        <p>STEP 3</p>
                        <p>ADD-ONDS</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <ListNumber>4</ListNumber>
                    <ListInfo>
                        <p>STEP 4</p>
                        <p>SUMMARY</p>
                    </ListInfo>
                </ListItem>
            </UnorderedList>
            <Image src={ theme.backgroundImg.mobile } />
        </ListContainer>
    )
}

export default Banner