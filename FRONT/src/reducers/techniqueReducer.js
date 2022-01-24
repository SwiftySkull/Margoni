import {
  SAVE_TECHNIQUES,
} from 'src/actions/techniqueActions';

const initialState = {
  techniques: [],
};

/**
 * Reducer for the main events.
 */
function techniqueReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TECHNIQUES:
      return {
        ...state,
        techniques: action.techniques,
      };

    default:
      return state;
  }
}

export default techniqueReducer;
