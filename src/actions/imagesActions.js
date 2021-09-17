import { SEARCH_IMAGES } from '../types/imagesTypes';

export const searchImages = (query, page) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID IeCjn9OyTne41SW4UBklyy96cNSkg5L_KCdLi3zsutI`,
        },
      }
    );
    const json = await response.json();
    dispatch({
      type: SEARCH_IMAGES,
      payload: json.results,
    });
  };
};
