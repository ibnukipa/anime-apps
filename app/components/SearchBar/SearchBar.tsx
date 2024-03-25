import React, {memo} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles.ts';
import {FontFamilyStyle} from '../Text';
import {Icon, IconSize} from '../Icon';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name={'search'} color={'victoriaBlueMin1'} />
      <TextInput style={[FontFamilyStyle['medium-normal'], styles.textInput]} />
      <Icon name={'close'} color={'victoriaBlueMin1'} size={IconSize.TINY} />
    </View>
  );
};

export default memo(SearchBar);
