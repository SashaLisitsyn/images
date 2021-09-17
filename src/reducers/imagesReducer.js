import { SEARCH_IMAGES } from '../types/imagesTypes';

const initialState = {
  imagesList: [],
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_IMAGES:
      return {
        ...state,
        imagesList: action.payload,
      };
    default:
      return state;
  }
};

export default imagesReducer;
