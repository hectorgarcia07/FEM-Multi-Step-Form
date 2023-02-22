import { styled } from '@mui/material/styles';
import OptionsContainer from './OptionsContainer'

const AddOneSelectionContainer = styled(OptionsContainer)(({theme}) => ({
    marginBottom: '2rem',

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        marginBottom: '3rem'
    },
}))

export default AddOneSelectionContainer