import {Anime, Pagination} from '../types';

export const getAnimeSearchApi = (
  key: string = '',
  page: number = 1,
  limit: number = 15,
): Promise<Pagination<Anime> | null> => {
  return new Promise(async resolve => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${key}&page=${page}&limit=${limit}`,
    );
    if (!response?.ok || !response) {
      resolve(null);
    } else {
      const responseJson: Pagination<Anime> = await response?.json();
      resolve(responseJson);
    }
  });
};

const AnimeService = {
  getAnimeSearchApi,
};

export default AnimeService;
