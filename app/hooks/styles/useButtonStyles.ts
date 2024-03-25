import {useMemo} from 'react';
import {ViewStyle} from 'react-native';

import {ButtonSize, ButtonVariant, ButtonStyles} from '../../components';
import {Colors, IColors, IColorSchemes} from '../../constants';

export const useButtonStyle = (
  variant: ButtonVariant,
  isDisabled: boolean,
  colorScheme: IColorSchemes,
  size: ButtonSize,
) => {
  const curColorScheme = useMemo<IColorSchemes>(() => {
    return isDisabled ? 'gray' : colorScheme;
  }, [isDisabled, colorScheme]);

  const [mainColor, plus1Color, min2Color, min3Color] = useMemo<
    [string, string, string, string]
  >(() => {
    return [
      Colors[curColorScheme],
      Colors[`${curColorScheme}Plus1`],
      Colors[`${curColorScheme}Min1`],
      Colors[`${curColorScheme}Min2`],
    ];
  }, [curColorScheme]);

  const [childrenColor, childrenPressedColor] = useMemo<
    [IColors, IColors]
  >(() => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return [curColorScheme, `${curColorScheme}Plus1`];
      case ButtonVariant.TERTIARY:
        return [`${curColorScheme}Plus1`, `${curColorScheme}Plus2`];
      case ButtonVariant.PRIMARY:
      default:
        return ['neutralWhite', 'neutralWhite'];
    }
  }, [curColorScheme, variant]);

  const [sizeStyle, textSizeStyle] = useMemo(() => {
    switch (size) {
      case ButtonSize.SMALL:
        return [ButtonStyles.small, ButtonStyles.textSmall];
      case ButtonSize.XSMALL:
        return [ButtonStyles.xSmall, ButtonStyles.textSmall];
      case ButtonSize.TINY:
        return [ButtonStyles.tiny, ButtonStyles.textTiny];
      case ButtonSize.REGULAR:
      default:
        return [ButtonStyles.regular, ButtonStyles.text];
    }
  }, [size]);

  const [bgStyle, pressedBgStyle] = useMemo<[ViewStyle, ViewStyle]>(() => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return [
          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: mainColor,
          },
          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: plus1Color,
          },
        ];
      case ButtonVariant.TERTIARY:
        return [
          {
            backgroundColor: min3Color,
          },
          {
            backgroundColor: min2Color,
          },
        ];
      case ButtonVariant.PRIMARY:
      default:
        return [
          {
            backgroundColor: mainColor,
          },
          {
            backgroundColor: plus1Color,
          },
        ];
    }
  }, [mainColor, min2Color, min3Color, plus1Color, variant]);

  return {
    childrenColor,
    childrenPressedColor,
    bgStyle,
    pressedBgStyle,
    sizeStyle,
    textSizeStyle,
  };
};
