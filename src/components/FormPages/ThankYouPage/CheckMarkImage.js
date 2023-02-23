import { styled } from '@mui/material/styles';

const CheckMarkImage = styled('img')(
    ({ theme }) => ({
        objectPosition: 'center center',
        display: 'block',
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        margin: '0 auto',


        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            width: '80px',
            height: '80px',
        },
    })
)

export default CheckMarkImage