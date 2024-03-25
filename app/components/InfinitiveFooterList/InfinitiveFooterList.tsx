import React, {memo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {Loading} from '../Loading';
import {InfinitiveFooterListProps} from './types.ts';
import styles from './styles.ts';
import {Button, ButtonSize} from '../Button';

const InfinitiveFooterList: React.FC<InfinitiveFooterListProps> = ({
  isFetching,
  isLastPage,
  isError,
  retry,
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
      {isError && (
        <View>
          <Text color={'neutralWhite50'}>
            Something went wrong. Please try again.
          </Text>
          <Button
            onPress={retry}
            style={styles.errorButton}
            size={ButtonSize.SMALL}>
            Retry
          </Button>
        </View>
      )}
      {!isFetching && !isLastPage && !isError && (
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
      {isFetching && !isLastPage && !isError && (
        <View style={styles.captionContainer}>
          <View style={styles.captionIcon}>
            <Loading color={'neutralWhite'} />
          </View>
          <Text>Loading...</Text>
        </View>
      )}
      {isLastPage && !isError && <Text>You're up-to-date.</Text>}
    </View>
  );
};

export default memo(InfinitiveFooterList);
