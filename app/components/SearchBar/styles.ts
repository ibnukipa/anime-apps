import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.victoriaBluePlus1,
    borderWidth: 1,
    borderColor: Colors.victoriaBlue,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    margin: 0,
    color: Colors.neutralWhite,
  },
});

export default styles;
