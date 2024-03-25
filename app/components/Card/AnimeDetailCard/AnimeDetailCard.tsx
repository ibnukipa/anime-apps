import React, {memo} from 'react';
import {AnimeDetailCardProps} from './types.ts';
import {useAnimeStore} from '../../../stores';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../../Text';
import {BlurView} from '@react-native-community/blur';
import styles from './styles.ts';
import {View} from 'react-native';
import {Icon, IconSize} from '../../Icon';

const AnimeDetailCard: React.FC<AnimeDetailCardProps> = ({id}) => {
  const anime = useAnimeStore(state => state.anime[id]);

  return (
    <BlurView style={styles.container}>
      <SafeAreaView edges={['left', 'right', 'bottom']}>
        <View style={styles.titleContainer}>
          <Text fontWeight={'bold'} style={styles.title}>
            {anime.title}
          </Text>
          <View style={styles.rankContainer}>
            <Text
              color={'citrusYellowPlus1'}
              fontWeight={'semiBold'}
              style={styles.rankText}>
              RANK
            </Text>
            <Text
              color={'citrusYellowPlus2'}
              fontWeight={'bold'}
              style={styles.rankText}>
              {anime.rank}
            </Text>
          </View>
        </View>
        <View style={styles.metadataContainer}>
          <View style={styles.ratingContainer}>
            <Icon color={'citrusYellow'} name={'star'} />
            <Text
              color={'neutralWhite80'}
              style={styles.ratingText}
              fontWeight={'semiBold'}>
              {anime.score}
            </Text>
          </View>
          <View style={styles.releaseContainer}>
            <Text>{anime.type}</Text>
            <Text style={styles.yearText} color={'citrusYellowPlus2'}>
              {anime.year}
            </Text>
          </View>
        </View>
        <View style={styles.synopsisContainer}>
          <Text color={'neutralWhite80'} numberOfLines={8}>
            {anime.synopsis}
          </Text>
        </View>
      </SafeAreaView>
    </BlurView>
  );
};

export default memo(AnimeDetailCard);
