import { styled } from '@mui/material/styles';
import { ReactSVG } from "react-svg";
import Switch from '@mui/material/Switch';

const CustomSwitch = styled(({ icon, ...props }) => {
    console.log("icon", props)

    return (
        <Switch {...props} checkedIcon={ <ReactSVG src={icon} /> } icon={ <ReactSVG src={icon} /> }  />
    )
    
})(({ theme }) => {
    return ({
        padding: '0',
        marginRight: '1rem',
        color: `${ theme.colors.primary.marine_blue }`,        
    })
});

export default CustomSwitch