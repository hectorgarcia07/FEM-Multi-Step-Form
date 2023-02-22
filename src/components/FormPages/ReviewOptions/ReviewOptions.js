import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import FormHeader from '../../FormControlContainer/FormHeader';
import { Box } from '@mui/system';
import InfoParagraph from '../../FormControlContainer/InfoParagraph';
import FormControlContainer from '../../FormControlContainer/FormControlContainer';
import ReviewOptionsContainer from './ReviewOptionsContainer';
import TotalContainer from "./TotalContainer"
import AddOnsSelection from './AddOnsSelection';
import PlanSelection from './PlanSelection';

const ReviewOptions = () => {
  const theme = useTheme()
  const innerForm = {
    marginBottom: '9rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      marginBottom: '4rem'
    }
  }

  return (
    <FormControlContainer sx={innerForm}>
      <FormHeader>
        Finishing up
      </FormHeader>
      <InfoParagraph>
        Double-check everything looks OK before confirming.
      </InfoParagraph>

      <ReviewOptionsContainer>
        <Box>
            <PlanSelection />
            <AddOnsSelection />
            <TotalContainer />
        </Box>

      </ReviewOptionsContainer>
    </FormControlContainer>
  );
}

export default ReviewOptions
