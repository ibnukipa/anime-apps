import React, {memo} from 'react';
import {ImageBackground, View} from 'react-native';
import {useAnimeStore} from '../../../stores';
import {Text} from '../../Text';
import {AnimeCardProps} from './types.ts';
import styles from './styles.ts';
import {BlurView} from '@react-native-community/blur';
import {Icon, IconSize} from '../../Icon';

const AnimeCard: React.FC<AnimeCardProps> = ({id}) => {
  const anime = useAnimeStore(state => state.anime[id]);

  if (!anime) {
    return <View style={styles.emptyContainer} />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode={'cover'}
        source={{uri: anime.images.jpg.large_image_url}}>
        <View style={styles.metadataContainer}>
          <BlurView
            blurType={'dark'}
            blurAmount={2}
            style={styles.metadataTopContainer}>
            <View style={styles.metadataSubtitleHighlighted}>
              <Text
                color={'neutralText'}
                style={styles.metadataSubtitle}
                fontWeight={'bold'}>
                {anime.type}
              </Text>
            </View>
            <View style={styles.metadataSubtitleHighlighted}>
              <Text
                color={'neutralText'}
                style={styles.metadataSubtitle}
                fontWeight={'bold'}>
                RANK: {anime.rank}
              </Text>
            </View>
          </BlurView>
          <BlurView blurAmount={5} style={styles.metadataBottomContainer}>
            <Text
              fontWeight={'semiBold'}
              numberOfLines={2}
              style={styles.metadataTitle}>
              {anime.title}
            </Text>
            <View style={styles.metadataContent}>
              <View>
                <Text style={styles.metadataSubtitle}>{anime.year}</Text>
              </View>
              <View style={styles.metadataSubtitleContainer}>
                <Icon
                  color={'citrusYellow'}
                  size={IconSize.TINY}
                  name={'star'}
                  style={styles.metadataIcon}
                />
                <Text style={styles.metadataSubtitle}>{anime.score}</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default memo(AnimeCard);
