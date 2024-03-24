import {useMemo} from 'react';
import {StyleProp, TextStyle} from 'react-native';

import {Colors, IColors} from '../../constants';
import {FontFamilyStyle, FontWeight} from '../../components';

export const useTextStyle = (
  style: StyleProp<TextStyle>,
  color: IColors,
  bold: boolean = false,
  fontWeight: FontWeight = 'regular',
): StyleProp<TextStyle> => {
  const colorStyle: StyleProp<TextStyle> = useMemo(() => {
    return {
      color: Colors[color],
    };
  }, [color]);

  const fontFamilyStyle = useMemo(() => {
    return FontFamilyStyle[
      `${(bold ? 'bold' : undefined) || fontWeight}-normal`
    ];
  }, [fontWeight, bold]);

  return useMemo(() => {
    const styleProps: StyleProp<TextStyle> = [];
    if (style) {
      if (Array.isArray(style)) {
        styleProps.push(...style);
      } else {
        styleProps.push(style);
      }
    }

    styleProps.push(colorStyle);
    styleProps.push(fontFamilyStyle);
    return styleProps;
  }, [style, colorStyle, fontFamilyStyle]);
};
