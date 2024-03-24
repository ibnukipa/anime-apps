import {Leaves} from '../types';

export const Colors = {
  neutralText: '#222223',
  neutralSecondaryText: '#747474',
  neutralPlaceholderText: '#AAABAD',
  neutralDisabledText: '#AAABAD',
  neutralBorder: '#E3E3E4',
  neutralContainer: '#F3F5F6',
  neutralWhite: '#FFF',

  grayPlus2: '#222223',
  grayPlus1: '#747474',
  gray: '#AAABAD',
  grayMin1: '#C6C7C8',
  grayMin2: '#E3E3E4',
  grayMin3: '#EEEEEF',
  grayMin4: '#F7F7F7',

  victoriaBluePlus2: '#062848',
  victoriaBluePlus1: '#093E6F',
  victoriaBlue: '#0D599F',
  victoriaBlueMin1: '#7AA4CA',
  victoriaBlueMin2: '#B6CDE2',
  victoriaBlueMin3: '#DBE6F1',
  victoriaBlueMin4: '#E7EEF5',
};

export const ColorSchemes = {
  gray: 'gray',
  victoriaBlue: 'victoriaBlue',
};

export const ColorSchemeGradients = {
  Plus1: 'Plus1',
  Plus2: 'Plus2',
  Min1: 'Min1',
  Min2: 'Min2',
  Min3: 'Min3',
  Min4: 'Min4',
  '': '',
};

export type IColorSchemes = Leaves<typeof ColorSchemes>;

export type IColorSchemeGradients = Leaves<typeof ColorSchemeGradients>;

export type IColors =
  | Leaves<typeof Colors>
  | `${IColorSchemes}${IColorSchemeGradients}`;
