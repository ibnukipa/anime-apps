import {TextProps as RNTextProps} from 'react-native';

import {IColors} from '../../constants';

export interface TextProps extends RNTextProps {
  color?: IColors;
  bold?: boolean;
  fontWeight?: FontWeight;
}

export type FontWeight =
  | '100'
  | 'thin'
  | '200'
  | 'extraLight'
  | '300'
  | 'light'
  | '400'
  | 'regular'
  | '500'
  | 'medium'
  | '600'
  | 'semiBold'
  | '700'
  | 'bold'
  | '800'
  | 'extraBold'
  | '900'
  | 'black';

export type FontStyle = 'normal';

export type FontFamily = `${FontWeight}-${FontStyle}`;
