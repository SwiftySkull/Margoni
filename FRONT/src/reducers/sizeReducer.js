import {
  SAVE_SIZES,
  SIZE_CHOICE,
  SAVE_PAINTINGS_OF_SIZE,
} from 'src/actions/sizeActions';

const initialState = {
  sizes: [],
  sizeChosen: 0,
  results: 0,
  paintings: [],
};

/**
 * Reducer for the main events.
 */
function sizeReducer(state = initialState, action) {
  switch (action.type) {
    /** Save all the sizes available */
    case SAVE_SIZES:
      return {
        ...state,
        sizes: action.sizes,
      };

    /** Select a specifi size */
    case SIZE_CHOICE:
      return {
        ...state,
        sizeChosen: action.id,
      };

    /** Save the paintings of a specific size */
    case SAVE_PAINTINGS_OF_SIZE:
      return {
        ...state,
        sizeChosen: action.sizeChosen,
        results: action.results,
        paintings: action.paintings,
      };

    default:
      return state;
  }
}

export default sizeReducer;
