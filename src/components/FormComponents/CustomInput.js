import * as React from 'react';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { useField } from 'formik';

const Input = styled(InputUnstyled)(
  () => {
    const theme = useTheme()
    return (`
  .${inputUnstyledClasses.input} {
    padding: 0;
    width: 100%;
    font-size: 0.875rem;
    font-family: black;
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0.7rem;
    padding-left: 0.9rem;
    margin-bottom: 0.5rem;
    &[aria-invalid="true"]{
      border: 1px solid red;
      font-size: 20;
    }
    &::placeholder { /* Most modern browsers support this now. */
      color:yellow;
      letter-spacing: 0.05rem;
    }
    &:focus {
      outline: none !important;
      border:1px solid green;
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
    font-weight: bold;
    font-size: 0.7rem;
    margin-bottom: 4px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    &.invalid {
      color: tan;
    }
`)
});

const HelperText = styled((props) => {
  const theme = useTheme()

  const style = {
    margin: '0.3rem',
    color: theme.colors.error,
    fontSize: '0.8rem',
    whiteSpace: 'pre-wrap'
  }

  return props.errorText ? <p style={style}>{props.errorText}</p> : null;
})(() => {
  const theme = useTheme()

  return (`
    color: black;
    font-size: 0.875rem;
    margin: 0;
  `);
})

function CustomInput({ label, placeholder, maxLength, sx, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  
  return (
    <FormControl  error={!!errorText} {...field} sx={sx}>
      <Label htmlFor={props.name} error={!!errorText}>{label} </Label>
      <Input 
        placeholder={placeholder}
        name={props.name}
        id={props.name}
        slotProps={{ input: { maxLength } }}
      />
      <HelperText errorText={errorText} />
    </FormControl>
  );
}

export default CustomInput