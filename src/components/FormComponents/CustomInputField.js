import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import clsx from 'clsx';

const CustomFormControl = styled(FormControlUnstyled)(
    ({ theme }) => ({
        paddingBottom: '1.5rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            "&:not(:last-child)": {
                
            },
        },
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

const HelperText = styled(
    ({ children, error }) => {
        const sx = {
            color: `red`,
            fontSize:' 0.8rem',
            whiteSpace: 'pre-wrap',
            margin: '0'
        }
        return ( error ? <Box sx={sx}>{children}</Box> : null ) 
    },
  )(
    ({ theme }) => ({
        
    })
)

const InputLabelDetails = styled(
    ({ children, className, error }) => {
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
        },

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            paddingBottom: '0.5rem'
        },
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

const CustomInputField = ({ field, form: { touched, errors }, ...props }) => {
    const error = ([field.name] in touched ) && ([field.name] in errors)

    console.log("Field", field, "props", props )

    return (
        <CustomFormControl { ...field } error={ error } required >
            <InputLabelContainer>
                <InputLabelDetails htmlFor={field.name}  error={ error }>{props.label}</InputLabelDetails>
                <HelperText id={`${field.name}-error-text`} error={error}>{errors[field.name]}</HelperText>
            </InputLabelContainer>

            <InputUnstyled
                id={props.id}
                name={field.name}
                placeholder={props.placeholder}
                slots={{ input: CustomInput }}
                slotProps={{ input: { maxLength: props.maxLength } }}
                aria-describedby={`${field.name}-input-text`}
            />
      </CustomFormControl>
    )
}

export default CustomInputField