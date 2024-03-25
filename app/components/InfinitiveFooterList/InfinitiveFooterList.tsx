import React, {memo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {Loading} from '../Loading';
import {InfinitiveFooterListProps} from './types.ts';
import styles from './styles.ts';

const InfinitiveFooterList: React.FC<InfinitiveFooterListProps> = ({
  isFetching,
  isLastPage,
}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: 50 + bottom,
          paddingBottom: bottom,
        },
        styles.container,
      ]}>
      {!isFetching && !isLastPage && (
        <View style={styles.captionContainer}>
          <Icon
            style={styles.captionIcon}
            color={'neutralWhite50'}
            name={'arrow'}
          />
          <Text color={'neutralWhite50'}>
            Scroll and release to load more...
          </Text>
        </View>
      )}
      {isFetching && !isLastPage && (
        <View style={styles.captionContainer}>
          <View style={styles.captionIcon}>
            <Loading color={'neutralWhite'} />
          </View>
          <Text>Loading...</Text>
        </View>
      )}
      {isLastPage && <Text>You're up-to-date.</Text>}
    </View>
  );
};

export default memo(InfinitiveFooterList);
