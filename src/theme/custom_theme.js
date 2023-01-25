import { createTheme } from '@mui/material/styles'
import mobileBackground from '../images/bg-sidebar-mobile.svg'
import desktopBackground from '../images/bg-sidebar-desktop.svg'

import iconAdvanced from '../images/icon-advanced.svg'
import iconArcade from '../images/icon-arcade.svg'
import iconCheckmark from '../images/icon-checkmark.svg'
import iconPro from '../images/icon-pro.svg'
import iconThankYou from '../images/icon-thank-you.svg'

export const custom_theme = createTheme({
    breakpoints: {
        values: {
            mobile: '375',
            desktop: '731'
        }
    },
    backgroundImg: {
        mobile: mobileBackground,
        desktop: desktopBackground
    },
    colors: {
      primary: {
        marine_blue: 'hsl(213, 96%, 18%)',
        purplish_blue: 'hsl(243, 100%, 62%)',
        pastel_blue: 'hsl(228, 100%, 84%)',
        light_blue: 'hsl(206, 94%, 87%)',
        strawberry_red: 'hsl(354, 84%, 57%)'
      },
      neutral: {
        cool_gray: 'hsl(231, 11%, 63%)',
        light_gray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
    icons: {
      advanced: iconAdvanced,
      arcade: iconArcade,
      checkmark: iconCheckmark,
      pro: iconPro,
      thankYou: iconThankYou
    }
  });
