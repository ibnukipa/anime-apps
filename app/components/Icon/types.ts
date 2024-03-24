import {ImageProps, PressableProps} from 'react-native';

import {IColors, IIcons} from '../../constants';
import {IconSize} from './constants.ts';

export interface IconProps extends ImageProps {
  name: IIcons;
  color?: IColors;
  size?: IconSize;
  onPress?: PressableProps['onPress'];
  wrapperStyle?: PressableProps['style'];
  isDisabled?: boolean;
}
