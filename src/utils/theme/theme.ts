import { createTheme } from '@shopify/restyle';
import { DARK_COLORS } from './colors/dark';
import { LIGHT_COLORS } from './colors/light';

const getTheme = (darkMode?: boolean) =>
  createTheme({
    colors: darkMode ? DARK_COLORS : LIGHT_COLORS,
    spacing: {
      none: 0,
      xxxs: 2,
      xxs: 4,
      xs: 6,
      s: 8,
      sToStoM: 10,
      sToM: 12,
      sToMtoM: 14,
      m: 16,
      mToL: 20,
      l: 24,
      xl: 48,
      xxl: 96,
      xxxl: 160,
    },
    layout: {
      none: 0,
      xxxs: 2,
      xxs: 4,
      xs: 6,
      s: 8,
      sToStoM: 10,
      sToM: 12,
      sToMtoM: 14,
      m: 16,
      mToL: 20,
      l: 24,
      xl: 48,
      xxl: 86,
      xxxl: 112,
    },
    borderRadii: {
      none: 0,
      xxxs: 2,
      xxs: 4,
      xs: 6,
      s: 8,
      sToStoM: 10,
      sToM: 12,
      sToMtoM: 14,
      m: 16,
      l: 40,
      xl: 60,
      xxl: 500,
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
      largeTablet: 1024,
    },
    textVariants: {
      defaults: {
        color: 'primaryText',
        fontFamily: 'Roobert-Regular'
      },
      title: {
        fontSize: 28,
        fontFamily: 'Roobert-Bold'
      },
      listTitle: {
        fontSize: 17,
        fontFamily: 'Roobert-Bold'
      },
      videoCardUsername: {
        fontSize: 16,
        fontFamily: 'Roobert-Bold'
      },
      videoCardText: {
        fontSize: 16,
        color: 'secondaryText'
      },
      channelCardText: {
        fontSize: 14,
        color: 'secondaryText'
      }
    },
  });

export default getTheme;

export type Theme = ReturnType<typeof getTheme>;
