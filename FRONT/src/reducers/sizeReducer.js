import {
  SAVE_SIZES,
  SAVE_SIZE_CHOICE,
} from 'src/actions/sizeActions';

const initialState = {
  sizes: [],
  sizeChosen: [],
  results: 0,
  paintings: [],
};

/**
 * Reducer for the main events.
 */
function sizeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SIZES:
      return {
        ...state,
        sizes: action.sizes,
      };

    case SAVE_SIZE_CHOICE:
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
