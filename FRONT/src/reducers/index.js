import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
