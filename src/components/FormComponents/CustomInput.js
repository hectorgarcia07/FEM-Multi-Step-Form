import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, useTheme } from '@mui/material';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { useField } from 'formik';

const Input = styled(InputUnstyled)(
  () => {
    const theme = useTheme()
    return (`
  .${inputUnstyledClasses.input} {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    border: 1px solid ${ theme.colors.neutral.light_gray };
    border-radius: 8px;
    padding: 0.7rem;
    padding-left: 1rem;
    color: ${ theme.colors.primary.marine_blue };

    &[aria-invalid="true"]{
      border: 1px solid red;
      font-size: 20;
    }
    &::placeholder { /* Most modern browsers support this now. */
      color: dark-grey;
      font-weight: 300
    }
    &:focus {
      outline: 1px solid ${ theme.colors.primary.purplish_blue };
      border: 1px solid transparent;
    }
    &:hover {
      border: 1px solid ${ theme.colors.primary.purplish_blue };

    }
    &:focus &:invalid {
      border: 1px solid red;
      outline: 1px solid red;
      border-radius: 5px;
    }
  }
`)},
);

const Label = styled(
  ({ children, className, htmlFor, error }) => {
    
    return (
      <label className={clsx(className, error ? 'invalid' : '')} htmlFor={htmlFor}>
        {children}
      </label>
    );
  },
)(() => {
  const theme = useTheme()
  return (`
    font-size: 0.8rem;
    color: ${ theme.colors.primary.purplish_blue };
    &.invalid {
      color: ${ theme.colors.primary.strawberry_red };
    }
`)
});

const HelperText = styled((props) => {
  const theme = useTheme()

  const style = {
    color: theme.colors.primary.strawberry_red,
    fontSize: '0.8rem',
    whiteSpace: 'pre-wrap'
  }

  return props.errorText ? <p style={style}>{props.errorText}</p> : null;
})(() => {
  const theme = useTheme()

  return (`
    color: red;
    font-size: 0.875rem;
    margin: 0;
  `);
})

function CustomInput({ label, placeholder, maxLength, sx, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.3rem',
  }
  
  return (
    <FormControl  error={!!errorText} {...field} sx={{ paddingBottom: '1.5rem' }}>
      <Box sx={style}>
          <Label htmlFor={props.name} error={!!errorText}>{label} </Label>
          <HelperText errorText={errorText} />
      </Box>
      <Input 
        placeholder={placeholder}
        name={props.name}
        id={props.name}
        slotProps={{ input: { maxLength } }}
      />
    </FormControl>
  );
}

export default CustomInput