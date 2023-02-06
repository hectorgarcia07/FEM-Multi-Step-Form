import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useFormikContext } from 'formik';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

/*
    id="email"
    name="email"
    label="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
*/

const CustomFormControl = styled(FormControlUnstyled)(
    ({ theme }) => ({
        paddingBottom: '1.5rem'

    })
)

const InputLabelContainer = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.3rem',
    })
)

const InputLabelDetails = styled(InputLabel)(
    ({ theme }) => ({
        fontSize: `0.8rem`,
        color: `${ theme.colors.primary.purplish_blue }`,

        '& .Mui-error': {
            color: `${ theme.colors.primary.strawberry_red }`
        }
    })
)

const HelperText = styled(FormHelperText)(
    ({ theme }) => ({
        color: `${theme.colors.primary.strawberry_red}`,
        fontSize: '0.8rem',
        whiteSpace: 'pre-wrap',

        '& .Mui-error': {
            color: 'red',
            fontSize:' 0.875rem',
            margin: '0'
        }
    })
)

const CustomInput = styled(Input)(
    ({ theme }) => ({
        width: '100%',
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1.5',
        border: `1px solid ${ theme.colors.neutral.light_gray }`,
        borderRadius: '8px',
        padding: '0.7rem',
        paddingLeft: '1rem',
        color: `${ theme.colors.primary.marine_blue }`,

        '& .Mui-error': {
            border: '1px solid red',

        },

        [`&::placeholder`]: {
            color: 'dark-grey',
            fontWeight: '300'
        },
        ["&:focus"]: {
            outline: `1px solid ${ theme.colors.primary.purplish_blue }`,
            border: `1px solid transparent`
        },
        ["&:hover"]: {
            border: `1px solid ${ theme.colors.primary.purplish_blue }`
      
        }
    }))

const NewPersonalInfoForm = ({id, name, label, value, onChange, error, helperText}) => {

    return (
        <CustomFormControl error={error} >
            <InputLabelContainer>
                <InputLabelDetails htmlFor={id} >{label}</InputLabelDetails>
                <HelperText id="component-error-text">{helperText}</HelperText>
            </InputLabelContainer>

            <CustomInput
                id={id}
                aria-describedby="component-error-text"
                value={value}
                onChange={onChange}
                name={name}
            />
      </CustomFormControl>
    )
}

export default NewPersonalInfoForm