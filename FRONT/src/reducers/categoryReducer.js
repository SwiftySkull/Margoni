import {
  SAVE_CATEGORIES,
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
    /**
     * Display or hide the sidebar menu
     */
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case SHUFFLED_PICTURES:
      return {
        ...state,
        shuffledPictures: action.picture,
      };

    default:
      return state;
  }
}

export default categoryReducer;
