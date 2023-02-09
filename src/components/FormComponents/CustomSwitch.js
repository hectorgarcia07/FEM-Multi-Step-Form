import * as React from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { useSwitch } from '@mui/base/SwitchUnstyled';
import { useFormikContext } from 'formik';
import { useTheme } from '@mui/material';

const grey = {
  400: '#8c959f',
  500: '#6e7781',
  600: '#00ff00',
};

const CustomSwitch = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.colors.primary.marine_blue};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  //left
  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 12px;
    height: 12px;
    top: 4px;
    left: 5px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 21px;
      top: 4px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${theme.colors.primary.marine_blue};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
)

const SwitchInfoLabel = styled('div')(({ theme }) => ({
  padding: '2.5rem 1rem',

  ['&:hover']: {
      cursor: 'pointer'
  }

}));

const SwitchLabelContainer = styled('div')(
    ({ theme }) => ({
      marginBottom: '1rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        marginTop: '0.5rem'
      }

    }))

export default function UnstyledSwitches(props) {
  const { values,setFieldValue } = useFormikContext()
  const theme = useTheme()

  const updatePlanLength = ( value ) => {
    setFieldValue('planLength', value)
  }

  const label = { 
    slotProps: { 
      input: { 'aria-label': 'Plan Selection', 'name': 'planLength' },
    },
  };

  const style = {
    color:` ${ !values.planLength ? theme.colors.primary.marine_blue : theme.colors.neutral.cool_gray  }`
  }

  const style1 = {
    color:` ${ values.planLength ? theme.colors.primary.marine_blue : theme.colors.neutral.cool_gray  }`
  }

  return (
    <SwitchLabelContainer>
      <SwitchInfoLabel sx={style} onClick={() => updatePlanLength(false)} >Monthly</SwitchInfoLabel>
      <SwitchUnstyled 
        component={CustomSwitch} 
        {...label} 
        checked={values.planLength} 
        name='planLength' 
        onChange={(event) => setFieldValue('planLength', event.currentTarget.checked)}
       />
      <SwitchInfoLabel sx={style1} onClick={() => updatePlanLength(true)} >Yearly</SwitchInfoLabel>
    </SwitchLabelContainer>
  );
}