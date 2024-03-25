import {create} from 'zustand';
import {Anime} from '../types';

export type AnimeStoreState = {
  anime: Record<Anime['mal_id'], Anime>;
};

export type AnimeStoreAction = {
  add: (anime: Anime) => void;
};

export const useAnimeStore = create<AnimeStoreState & AnimeStoreAction>(
  set => ({
    anime: {},
    add: anime => {
      set(state => {
        state.anime[anime.mal_id] = anime;
        return state;
      });
    },
  }),
);
