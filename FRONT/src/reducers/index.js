import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import categoryReducer from './categoryReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  category: categoryReducer,
});

export default rootReducer;
