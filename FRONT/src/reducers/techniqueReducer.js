import {
  SAVE_TECHNIQUES,
  SAVE_PAINTINGS_OF_TECHNIQUE,
} from 'src/actions/techniqueActions';

const initialState = {
  techniques: [],
  techniqueChosen: {},
  results: '0',
  paintings: [],
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

    case SAVE_PAINTINGS_OF_TECHNIQUE:
      return {
        ...state,
        techniqueChosen: action.techniqueChosen,
        results: action.results,
        paintings: action.paintings,
      };

    default:
      return state;
  }
}

export default techniqueReducer;
