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
  spaceBetweenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerFloatingContainer: {
    paddingRight: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerClose: {
    backgroundColor: Colors.neutralWhite,
  },
  headerRatingContainer: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
