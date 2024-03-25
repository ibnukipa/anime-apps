import {StyleSheet} from 'react-native';

import {Colors} from '../constants';

export const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.victoriaBluePlus2,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  spaceContainer: {
    padding: 8,
  },
  listContainer: {
    marginHorizontal: -8,
  },
  listColumnContainer: {
    justifyContent: 'space-between',
  },
  listLoadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
