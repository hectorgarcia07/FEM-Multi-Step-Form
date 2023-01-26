import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import { ReactSVG } from "react-svg";

const CustomRadio = styled(({ icon, ...props }) => {

    return (
        <Radio {...props} checkedIcon={ <ReactSVG src={icon} /> } icon={ <ReactSVG src={icon} /> }  />
    )
    
})(({ theme }) => {
    return ({
        padding: '0',
        marginRight: '1rem',
        color: `${ theme.colors.primary.marine_blue }`,        
    })
});

export default CustomRadio