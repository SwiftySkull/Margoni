import {
  SAVE_PAINTING,
  MODAL_STATUS,
  SELECT_PAGE,
  LOADER_ON,
  LOADER_OFF,
  CLEAR_PAINTING,
  SAVE_MULTIPLE_PAINTINGS,
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
  actualPage: 1,
  loading: false,
  multiplePaintings: false,
  multiplePaintingsName: [],
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

    case CLEAR_PAINTING:
      return {
        ...state,
        painting: {},
        loading: true,
      };

    case SAVE_PAINTING:
      return {
        ...state,
        painting: action.painting,
        loading: false,
      };

    case MODAL_STATUS:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };

    case SELECT_PAGE:
      return {
        ...state,
        actualPage: action.page,
      };

    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };

    case SAVE_MULTIPLE_PAINTINGS:
      return {
        ...state,
        multiplePaintings: true,
        multiplePaintingsName: action.paintings,
        loading: false,
      };

    default:
      return state;
  }
}

export default mainReducer;
