import {
  SHUFFLED_PICTURES,
} from 'src/actions/categoryActions';

const initialState = {
  categories: [],
  shuffledPictures: [],
};

/**
 * Reducer for the main events.
 */
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLED_PICTURES:
      return {
        ...state,
        categories: action.categories,
        shuffledPictures: action.picture,
      };

    default:
      return state;
  }
}

export default categoryReducer;
