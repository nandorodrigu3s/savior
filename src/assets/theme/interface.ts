import { IAppIcons } from '@assets/icons';
import { Home3DObjectColors } from '@system/common/interfaces';

export interface IBaseTheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    lightGrey: string;
    primaryGrey: string;
    highlight: string;
    light: string;
    dark: string;
    white: string;
    black: string;
    threeObjects: Home3DObjectColors;
  };
  size: {
    small: number;
    medium: number;
    large: number;
    veryLarge: number;
    verySmall: number;
    default: number;
    custom: number;
  };
  icons: IAppIcons | null;
  fontFamily: {
    ibmBold: string;
    ibmSemiBold: string;
    ibmRegular: string;
    ibmMedium: string;
    interBold: string;
    interSemiBold: string;
    interRegular: string;
    interMedium: string;
  };
}
