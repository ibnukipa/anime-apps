import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Text} from '../components';
import {containerStyle} from '../styles';

const AnimeFavorite = () => {
  return (
    <SafeAreaView edges={['left', 'right']} style={containerStyle.container}>
      <Text>Favorite Anime</Text>
    </SafeAreaView>
  );
};

export default AnimeFavorite;
