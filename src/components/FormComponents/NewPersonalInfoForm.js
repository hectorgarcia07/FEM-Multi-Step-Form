import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import FormHelperText from '@mui/material/FormHelperText';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import clsx from 'clsx';

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
        alignItems: 'flex-start'
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

const InputLabelDetails = styled(
    ({ children, className, error }) => {
        console.log('SS',error)
      return (
        <p className={clsx(className, error ? 'invalid' : '')}>
          {children}
        </p>
      );
    },
  )(
    ({ theme }) => ({
        fontSize: `0.8rem`,
        color: `${ theme.colors.primary.purplish_blue }`,

        '&.invalid': {
            color: `${ theme.colors.primary.strawberry_red }`
        }
    })
)

const CustomInput = styled('input')(
    ({ theme }) => ({
        width: '100%',
        fontSize: '1rem',
        fontWeight: '600',
        border: `1px solid ${ theme.colors.neutral.light_gray }`,
        borderRadius: '8px',
        padding: '0.7rem',
        paddingLeft: '1rem',
        color: `${ theme.colors.primary.marine_blue }`,

        '&[aria-invalid*="true"]': {
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
    

const NewPersonalInfoForm = ({ field, form: { touched, errors }, ...props }) => {
    console.log("field", props)
    const error = [field.name] in touched && [field.name] in errors
    return (
        <CustomFormControl { ...field } error={ error } >
            <InputLabelContainer>
                <InputLabelDetails htmlFor={field.name}  error={ error }>{props.label}</InputLabelDetails>
                <HelperText id="component-error-text">{errors[field.name]}</HelperText>
            </InputLabelContainer>

            <InputUnstyled
                {...props}
                maxLength={3}
                slots={{ input: CustomInput }}
                aria-describedby="component-error-text"
            />
      </CustomFormControl>
    )
}

export default NewPersonalInfoForm