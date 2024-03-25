import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 0.5,
    marginHorizontal: 8,
  },
  container: {
    overflow: 'hidden',
    flex: 0.5,
    marginHorizontal: 8,
    minHeight: 250,
    borderRadius: 30,
    backgroundColor: Colors.victoriaBluePlus1,
    shadowColor: Colors.victoriaBluePlus2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  imageBackground: {
    flex: 1,
  },
  metadataContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  metadataTopContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    height: '15%',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  metadataBottomContainer: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    height: '35%',
    justifyContent: 'space-between',
  },
  metadataTitle: {
    fontSize: 14,
  },
  metadataContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metadataSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metadataIcon: {
    marginRight: 4,
  },
  metadataSubtitleHighlighted: {
    justifyContent: 'center',
    paddingHorizontal: 4,
    backgroundColor: Colors.neutralWhite,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  metadataSubtitle: {
    fontSize: 12,
  },
  metadataExtra: {
    fontSize: 10,
  },
});

export default styles;
