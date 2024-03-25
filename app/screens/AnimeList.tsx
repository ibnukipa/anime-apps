import React, {useCallback, useState} from 'react';
import {FlatList, StatusBar, View} from 'react-native';

import {
  AnimeCard,
  IconSize,
  InfinitiveFooterList,
  Loading,
  PrimaryHeader,
  SearchBar,
} from '../components';
import {containerStyle} from '../styles';
import {Anime} from '../types';
import {useInfinitiveScroll} from '../hooks';
import {AnimeService} from '../services';
import {useAnimeStore} from '../stores';

const AnimeList = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const {add: insertAnime, favoriteAnime} = useAnimeStore();

  const {data, isLastPage, isFetching, isLoading, fetchMore} =
    useInfinitiveScroll<Anime>({
      fetcher: AnimeService.getAnimeSearchApi,
      insert: insertAnime,
      query: searchQuery,
    });

  const renderItem = useCallback(({item}: {item: number}) => {
    return <AnimeCard id={item} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={containerStyle.spaceContainer} />;
  }, []);

  return (
    <View style={containerStyle.container}>
      <StatusBar barStyle={'light-content'} />
      <PrimaryHeader
        title={'Anime'}
        buttonTitle={`${favoriteAnime.length} Favorites`}
      />
      <View style={containerStyle.innerContainer}>
        <SearchBar onChangeText={setSearchQuery} />
        {isLoading ? (
          <View style={containerStyle.listLoadingContainer}>
            <Loading color={'neutralWhite50'} size={IconSize.GIGANTIC} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={containerStyle.listContainer}
            columnWrapperStyle={containerStyle.listColumnContainer}
            numColumns={2}
            data={data}
            renderItem={renderItem}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.1}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={
              <InfinitiveFooterList
                isFetching={isFetching}
                isLastPage={isLastPage}
              />
            }
          />
        )}
      </View>
    </View>
  );
};

export default AnimeList;
