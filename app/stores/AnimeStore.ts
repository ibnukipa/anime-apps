import {create} from 'zustand';
import {Anime} from '../types';

export type AnimeStoreState = {
  anime: Record<Anime['mal_id'], Anime>;
  favoriteAnime: Array<number>;
};

export type AnimeStoreAction = {
  add: (anime: Anime) => void;
  addFavorite: (mal_id: number) => void;
  removeFavorite: (mal_id: number) => void;
};

export const useAnimeStore = create<AnimeStoreState & AnimeStoreAction>(
  (set, get) => ({
    anime: {},
    favoriteAnime: [],

    add: anime => {
      set(state => {
        state.anime[anime.mal_id] = anime;
        return state;
      });
    },
    addFavorite: mal_id => {
      const favoriteAnime = [...get().favoriteAnime];
      favoriteAnime.push(mal_id);
      set({favoriteAnime});
    },
    removeFavorite: mal_id => {
      const favoriteAnime = [
        ...get().favoriteAnime.filter(
          favoriteMalId => favoriteMalId !== mal_id,
        ),
      ];
      set({favoriteAnime});
    },
  }),
);
