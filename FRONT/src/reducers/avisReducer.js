import {
  SAVE_AVIS,
  SAVE_ALL_AVIS,
} from 'src/actions/avisActions';

const initialState = {
  avis: {},
  allAvis: [],
};

/**
 * Reducer for the main events.
 */
function avisReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_AVIS:
      return {
        ...state,
        avis: action.avis,
      };

    case SAVE_ALL_AVIS:
      return {
        ...state,
        allAvis: action.avis,
      };

    default:
      return state;
  }
}

export default avisReducer;
