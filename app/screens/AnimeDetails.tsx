import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Text} from '../components';
import {containerStyle} from '../styles';

const AnimeDetails = () => {
  return (
    <SafeAreaView edges={['left', 'right']} style={containerStyle.container}>
      <Text>Anime Details</Text>
    </SafeAreaView>
  );
};

export default AnimeDetails;
