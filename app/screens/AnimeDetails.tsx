import React from 'react';

import {containerStyle} from '../styles';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useAnimeStore} from '../stores';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootNavigationParams, RootNavigationProp} from '../types';
import {BlurView} from '@react-native-community/blur';
import {AnimeDetailCard, Icon, IconSize, Text} from '../components';

const AnimeDetails = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const route = useRoute<RouteProp<RootNavigationParams, 'AnimeDetails'>>();
  const anime = useAnimeStore(state => state.anime[route.params.id]);

  if (!anime) {
    return null;
  }

  return (
    <ImageBackground
      style={containerStyle.container}
      resizeMode={'cover'}
      source={{uri: anime.images.webp.large_image_url}}>
      <StatusBar barStyle={'light-content'} />
      <View style={containerStyle.spaceBetweenContainer}>
        <BlurView style={containerStyle.headerFloatingContainer}>
          <View
            style={containerStyle.headerRatingContainer}>
            <Text fontWeight={'medium'}>{anime.rating}</Text>
          </View>
          <Icon
            color={'neutralWhite'}
            onPress={navigation.goBack}
            size={IconSize.HUGE}
            name={'close'}
          />
        </BlurView>
        <AnimeDetailCard id={route.params.id} />
      </View>
    </ImageBackground>
  );
};

export default AnimeDetails;
