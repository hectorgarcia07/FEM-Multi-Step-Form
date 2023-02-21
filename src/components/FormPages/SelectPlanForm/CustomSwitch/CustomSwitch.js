import * as React from 'react';
import SwitchUnstyled from '@mui/base/SwitchUnstyled';
import { useFormikContext } from 'formik';
import { 
  SwitchLabelContainer,
  SwitchInfoLabel,
  CustomSwitchButton
} from '..'

export default function CustomSwitch(props) {
  const { values, setFieldValue } = useFormikContext()

  const updatePlanLength = ( value ) => {
    setFieldValue('planLength', value)
  }

  const label = { 
    slotProps: { 
      input: { 'aria-label': 'Plan Selection', 'name': 'planLength' },
    },
  };

  return (
    <SwitchLabelContainer>
      <SwitchInfoLabel onClick={() => updatePlanLength(false)} >Monthly</SwitchInfoLabel>
      <SwitchUnstyled 
        component={CustomSwitchButton} 
        {...label} 
        checked={values.planLength} 
        name='planLength' 
        onChange={(event) => setFieldValue('planLength', event.currentTarget.checked)}
       />
      <SwitchInfoLabel onClick={() => updatePlanLength(true)} >Yearly</SwitchInfoLabel>
    </SwitchLabelContainer>
  );
}