import BaseButton from "./BaseButton";
import { styled } from '@mui/material/styles';

const NextButton = styled(BaseButton)(({ theme }) => ({
    color: `${ theme.colors.neutral.white }`,
    backgroundColor: `${ theme.colors.primary.purplish_blue }`,
    borderRadius: '5px',

    // eslint-disable-next-line no-useless-computed-key
    ['&:hover']: {
        backgroundColor: `${ theme.colors.primary.light_blue }`,
        color: `black`
    }
}));

export default NextButton