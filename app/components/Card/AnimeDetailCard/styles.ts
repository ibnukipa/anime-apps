import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingBottom: 24,
  },
  titleContainer: {
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 24,
    marginRight: 8,
    paddingTop: 20,
    paddingLeft: 24,
  },
  rankContainer: {
    backgroundColor: Colors.citrusYellow,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomStartRadius: 30,
  },
  rankText: {
    fontSize: 16,
  },
  metadataContainer: {
    flexDirection: 'row',
    marginTop: 12,
    paddingLeft: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    marginLeft: 8,
  },
  releaseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearText: {
    fontSize: 16,
    marginLeft: 8,
    backgroundColor: Colors.citrusYellow,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  synopsisContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  favoriteContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
});

export default styles;
