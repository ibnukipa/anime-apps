import React, {useMemo, memo} from 'react';
import {Image, ImageStyle, Pressable} from 'react-native';

import {Colors, Icons} from '../../constants';
import styles from './styles.ts';
import {IconProps} from './types.ts';
import {IconSize} from './constants.ts';

const Icon: React.FC<IconProps> = ({
  color = 'neutralText',
  size = IconSize.REGULAR,
  name,
  style,
  onPress,
  wrapperStyle,
  isDisabled,
  ...props
}) => {
  const singularSource = useMemo(() => {
    return Icons[name];
  }, [name]);

  const tintStyle: ImageStyle = useMemo(() => {
    return {
      tintColor: Colors[color],
    };
  }, [color]);

  const sizeStyle: ImageStyle = useMemo(() => {
    switch (size) {
      case IconSize.TINY:
        return styles.tiny;
      case IconSize.SMALL:
        return styles.small;
      case IconSize.MEDIUM:
        return styles.medium;
      case IconSize.LARGE:
        return styles.large;
      case IconSize.HUGE:
        return styles.huge;
      case IconSize.GIGANTIC:
        return styles.gigantic;
      case IconSize.REGULAR:
      default:
        return styles.regular;
    }
  }, [size]);

  if (!name) {
    return null;
  }

  return (
    <Pressable disabled={isDisabled} onPress={onPress} style={wrapperStyle}>
      <Image
        style={[style, tintStyle, sizeStyle]}
        {...props}
        source={singularSource}
      />
    </Pressable>
  );
};

Icon.displayName = 'Icon';

export default memo(Icon);
