import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Text} from '../components';
import {containerStyle} from '../styles';
import {RootNavigationProp} from '../types';

const AnimeList = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const navigateToFavoriteAnime = useCallback(() => {
    navigation.navigate('AnimeFavorite');
  }, [navigation]);

  return (
    <SafeAreaView style={containerStyle.container}>
      <Text bold>Anime List</Text>

      <View style={{padding: 4}} />
      <Button onPress={navigateToFavoriteAnime}>Favorite Anime</Button>
    </SafeAreaView>
  );
};

export default AnimeList;
