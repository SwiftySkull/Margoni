import {
  SAVE_TECHNIQUE_SHUFFLED_PICTURES,
  SAVE_PAINTINGS_OF_TECHNIQUE,
} from 'src/actions/techniqueActions';

const initialState = {
  techniques: [],
  shuffledPictures: [],
  techniqueChosen: {},
  results: '0',
  paintings: [],
};

/**
 * Reducer for the main events.
 */
function techniqueReducer(state = initialState, action) {
  switch (action.type) {
    /** Save the paintings of each technique shuffled */
    case SAVE_TECHNIQUE_SHUFFLED_PICTURES:
      return {
        ...state,
        techniques: action.techniques,
        shuffledPictures: action.picture,
      };

    /** Save the paintings of a specific technique */
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
