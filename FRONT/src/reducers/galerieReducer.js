import {
  CHOOSE_GALERIE,
} from 'src/actions/galerieActions';

const initialState = {
  galeryChoice: 0,
};

/**
 * Reducer for the main events.
 */
function galerieReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_GALERIE:
      return {
        ...state,
        galeryChoice: action.id === state.galeryChoice ? 0 : action.id,
      };

    default:
      return state;
  }
}

export default galerieReducer;
