import {
  SAVE_PAINTING,
  MODAL_STATUS,
} from 'src/actions/mainActions';

import {
  SAVE_PAINTINGS_OF_CATEGORY,
} from 'src/actions/categoryActions';

import {
  SAVE_PAINTINGS_OF_TECHNIQUE,
} from 'src/actions/techniqueActions';

import {
  SAVE_PAINTINGS_OF_SIZE,
} from 'src/actions/sizeActions';

const initialState = {
  modalStatus: false,
  totalPaintings: 0,
  paintings: [],
  searchingType: 0,
  painting: {},
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
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

    case SAVE_PAINTINGS_OF_SIZE:
      return {
        ...state,
        searchingType: 3,
      };

    case SAVE_PAINTING:
      return {
        ...state,
        painting: action.painting,
      };

    case MODAL_STATUS:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };

    default:
      return state;
  }
}

export default mainReducer;
