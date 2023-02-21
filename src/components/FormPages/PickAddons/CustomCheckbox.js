import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';

const CustomCheckbox = styled(Checkbox)(
    ({ theme }) => ({
        color: `${ theme.colors.neutral.light_gray }`,

        '&.Mui-checked': {
            color: `${ theme.colors.primary.purplish_blue }`,
        }
    })
)

export default CustomCheckbox