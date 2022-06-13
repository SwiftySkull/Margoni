import {
  DISPLAY_MENU,
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
  SAVE_CATEGORY_SHUFFLED_PICTURES,
} from 'src/actions/categoryActions';

import {
  SAVE_PAINTINGS_OF_TECHNIQUE,
} from 'src/actions/techniqueActions';

import {
  SAVE_PAINTINGS_OF_SIZE,
} from 'src/actions/sizeActions';

const initialState = {
  modalStatus: false,
  menuStatus: false,
  totalPaintings: 0,
  paintings: [],
  searchingType: 0,
  painting: {},
  actualPage: 1,
  loading: false,
  sideLoading: true,
  multiplePaintings: false,
  multiplePaintingsName: [],
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    /** Display/hide the menu for mobile screen */
    case DISPLAY_MENU:
      return {
        ...state,
        menuStatus: !state.menuStatus,
      };

    /** Select the type of research made for the paintings depending on their category */
    case SAVE_PAINTINGS_OF_CATEGORY:
      return {
        ...state,
        searchingType: 1,
      };

    /** Select the type of research made for the paintings depending on their technique */
    case SAVE_PAINTINGS_OF_TECHNIQUE:
      return {
        ...state,
        searchingType: 2,
      };

    /** Select the type of research made for the paintings depending on their size */
    case SAVE_PAINTINGS_OF_SIZE:
      return {
        ...state,
        searchingType: 3,
      };

    /** Clear the informations of a painting when exiting the page */
    case CLEAR_PAINTING:
      return {
        ...state,
        painting: {},
        loading: true,
      };

    /** Save the informations of a specific painting */
    case SAVE_PAINTING:
      return {
        ...state,
        painting: action.painting,
        loading: false,
      };

    /** Display/hide the painting in full screen */
    case MODAL_STATUS:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };

    /** When severals pages in the research, select the actual page */
    case SELECT_PAGE:
      return {
        ...state,
        actualPage: action.page,
      };

    /** Display the loading page */
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };

    /** Hide the loading page */
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };

    /** Save the paintings and category shuffled for the sidebar */
    case SAVE_CATEGORY_SHUFFLED_PICTURES:
      return {
        ...state,
        sideLoading: false,
      };

    /** When there're multiple paintings with the same name when using the URL */
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
