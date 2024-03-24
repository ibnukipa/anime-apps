import {PressableProps, ViewProps} from 'react-native';

import {IColorSchemes} from '../../constants';
import {ButtonSize, ButtonVariant} from './constants.ts';

export interface ButtonProps extends ViewProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  colorScheme?: IColorSchemes;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: PressableProps['onPress'];
}
