import { IAppIcons } from '../icons';

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
  icons: IAppIcons;
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
