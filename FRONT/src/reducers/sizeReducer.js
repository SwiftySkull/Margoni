import {
  SAVE_SIZES,
} from 'src/actions/sizeActions';

const initialState = {
  sizes: [],
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

    default:
      return state;
  }
}

export default sizeReducer;
