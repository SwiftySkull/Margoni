import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import categoryReducer from './categoryReducer';
import techniqueReducer from './techniqueReducer';
import galerieReducer from './galerieReducer';
import sizeReducer from './sizeReducer';
import avisReducer from './avisReducer';
import contactReducer from './contactReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  category: categoryReducer,
  galerie: galerieReducer,
  technique: techniqueReducer,
  size: sizeReducer,
  avis: avisReducer,
  contact: contactReducer,
});

export default rootReducer;
