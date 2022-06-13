import {
  SAVE_CATEGORY_SHUFFLED_PICTURES,
  SAVE_PAINTINGS_OF_CATEGORY,
} from 'src/actions/categoryActions';

const initialState = {
  categories: [],
  shuffledPictures: [],
  categoryChosen: {},
  results: '0',
  paintings: [],
};

/**
 * Reducer for the main events.
 */
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    /** Save the categories shuffled from the database */
    case SAVE_CATEGORY_SHUFFLED_PICTURES:
      return {
        ...state,
        categories: action.categories,
        shuffledPictures: action.picture,
      };

    /** Save the paintings of a specific category */
    case SAVE_PAINTINGS_OF_CATEGORY:
      return {
        ...state,
        categoryChosen: action.categoryChosen,
        results: action.results,
        paintings: action.paintings,
      };

    default:
      return state;
  }
}

export default categoryReducer;
