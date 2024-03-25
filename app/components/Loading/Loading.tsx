import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {Icon, IconProps} from '../Icon';

const Loading: React.FC<Partial<IconProps>> = props => {
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  });

  return (
    <Animated.View
      style={{
        alignSelf: 'center',
        transform: [
          {
            rotate: rotateAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}>
      <Icon {...props} name={'loading'} />
    </Animated.View>
  );
};

export default memo(Loading);
