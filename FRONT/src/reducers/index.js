import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import categoryReducer from './categoryReducer';
import techniqueReducer from './techniqueReducer';
import galerieReducer from './galerieReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  category: categoryReducer,
  galerie: galerieReducer,
  technique: techniqueReducer,
});

export default rootReducer;
