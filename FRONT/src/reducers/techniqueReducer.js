import {
  SHUFFLED_PICTURES,
} from 'src/actions/techniqueActions';

const initialState = {
  categories: [],
  shuffledPictures: [],
};

/**
 * Reducer for the main events.
 */
function techniqueReducer(state = initialState, action) {
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

export default techniqueReducer;
