import React, {memo} from 'react';
import {Text as RNText} from 'react-native';

import {useTextStyle} from '../../hooks';
import {TextProps} from './types.ts';

const Text: React.FC<TextProps> = ({
  color = 'neutralWhite',
  style,
  bold,
  fontWeight = 'regular',
  ...props
}) => {
  const textStyle = useTextStyle(style, color, bold, fontWeight);
  return <RNText {...props} style={textStyle} />;
};

Text.displayName = 'Text';

export default memo(Text);
