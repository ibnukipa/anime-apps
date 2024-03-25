import React, {memo} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles.ts';
import {FontFamilyStyle} from '../Text';
import {Icon} from '../Icon';

const SearchBar: React.FC<{onChangeText: (text: string) => void}> = ({
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={'search'} color={'victoriaBlueMin1'} />
      <TextInput
        onChangeText={onChangeText}
        style={[FontFamilyStyle['medium-normal'], styles.textInput]}
      />
    </View>
  );
};

export default memo(SearchBar);
