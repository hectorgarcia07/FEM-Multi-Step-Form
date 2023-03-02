import BaseButton from "./BaseButton";
import { styled } from '@mui/material/styles';
import { usePageValues } from '../../hooks/PageControlContextProvider';

const BackButton = styled(BaseButton)(({ theme }) => {
    const [ pageState, ] = usePageValues()

    return {
        visibility: `${ pageState.curr_form_page === 0 ? 'hidden' : 'visible' }`,
    
        border: 'none',
        color: `${ theme.colors.neutral.cool_gray }`,
    
        // eslint-disable-next-line no-useless-computed-key
        ['&:hover']: {
            color: `${ theme.colors.primary.marine_blue }`,
            backgroundColor: 'white'
        }
    }
});

export default BackButton