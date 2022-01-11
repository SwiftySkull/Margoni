import {
  XXX,
} from 'src/actions/mainActions';

const initialState = {
  xxx: true,
  totalPaintings: 0,
  paintings: [],
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

    default:
      return state;
  }
}

export default mainReducer;
