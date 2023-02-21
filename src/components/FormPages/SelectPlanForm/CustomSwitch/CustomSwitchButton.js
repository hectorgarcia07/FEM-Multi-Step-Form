import { styled } from '@mui/system';
import { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

const grey = {
    400: '#8c959f',
    500: '#6e7781',
    600: '#00ff00',
  };
  
const CustomSwitchButton = styled('span')(
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

  export default CustomSwitchButton