import React, {memo} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Text} from '../../Text';
import {Button, ButtonSize} from '../../Button';
import styles from './styles.ts';
import {Props} from './types.ts';

const PrimaryHeader: React.FC<Props> = ({title, buttonTitle}) => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title} fontWeight={'bold'}>
          {title}
        </Text>
        <Button size={ButtonSize.TINY}>
          {buttonTitle}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default memo(PrimaryHeader);
