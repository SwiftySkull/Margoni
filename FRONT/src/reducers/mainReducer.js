import {
  XXX,
} from 'src/actions/mainActions';

import {
  SAVE_PAINTINGS_OF_CATEGORY,
} from 'src/actions/categoryActions';

import {
  SAVE_PAINTINGS_OF_TECHNIQUE,
} from 'src/actions/techniqueActions';

const initialState = {
  xxx: true,
  totalPaintings: 0,
  paintings: [],
  searchingType: 0,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Display or hide the sidebar menu
     */
    case XXX:
      return {
        ...state,
        totalPaintings: action.totalPaintings,
        paintings: action.paintings,
      };

    case SAVE_PAINTINGS_OF_CATEGORY:
      return {
        ...state,
        searchingType: 1,
      };

    case SAVE_PAINTINGS_OF_TECHNIQUE:
      return {
        ...state,
        searchingType: 2,
      };

    default:
      return state;
  }
}

export default mainReducer;
