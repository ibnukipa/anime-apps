import {StyleSheet} from 'react-native';

import {Radii} from '../../constants';

export const ButtonStyles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: Radii.large,
  },
  container: {
    borderRadius: Radii.large,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  regular: {
    minHeight: 56,
    paddingHorizontal: 16,
  },
  small: {
    minHeight: 44,
    paddingHorizontal: 16,
  },
  xSmall: {
    minHeight: 34,
    paddingHorizontal: 16,
  },
  tiny: {
    minHeight: 34,
    paddingHorizontal: 16,
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
  },
  textSmall: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  textTiny: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
});
