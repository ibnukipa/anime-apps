import React, {memo, useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, Pressable, View} from 'react-native';

import {Text} from '..';
import {Colors} from '../../constants';
import {useButtonStyle} from '../../hooks';
import {ButtonStyles} from './styles.ts';
import {ButtonProps} from './types.ts';
import {ButtonSize, ButtonVariant} from './constants.ts';

const Button: React.FC<ButtonProps> = ({
  colorScheme = 'victoriaBlue',
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.REGULAR,
  children,
  style,
  onPress,
  isLoading,
  isDisabled = false,
  ...props
}) => {
  const {
    childrenColor,
    childrenPressedColor,
    bgStyle,
    pressedBgStyle,
    sizeStyle,
    textSizeStyle,
  } = useButtonStyle(variant, isDisabled, colorScheme, size);
  const [isPressing, setIsPressing] = useState(false);

  const onPressIn = useCallback(() => {
    onPress && setIsPressing(true);
  }, [onPress]);

  const onPressOut = useCallback(() => {
    onPress && setIsPressing(false);
  }, [onPress]);

  const Children = useMemo(() => {
    if (typeof children === 'string') {
      return (
        <Text
          color={isPressing || isLoading ? childrenPressedColor : childrenColor}
          bold
          style={textSizeStyle}>
          {children}
        </Text>
      );
    }

    return children;
  }, [
    children,
    childrenColor,
    childrenPressedColor,
    isLoading,
    isPressing,
    textSizeStyle,
  ]);

  return (
    <View
      style={[
        ButtonStyles.wrapper,
        bgStyle,
        (isPressing || isLoading) && pressedBgStyle,
        style,
      ]}
      {...props}>
      <Pressable
        disabled={isDisabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[ButtonStyles.container, sizeStyle]}>
        {isLoading ? (
          <ActivityIndicator
            color={Colors[childrenColor]}
            size={size === ButtonSize.SMALL ? 'small' : undefined}
          />
        ) : (
          Children
        )}
      </Pressable>
    </View>
  );
};

Button.displayName = 'Button';

export default memo(Button);
