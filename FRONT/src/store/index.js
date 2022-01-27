import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainMiddleware from 'src/middleWares/mainMiddleware';
import sizeMiddleware from 'src/middleWares/sizeMiddleware';
import categoryMiddleware from 'src/middleWares/categoryMiddleware';
import techniqueMiddleware from 'src/middleWares/techniqueMiddleware';

import reducer from 'src/reducers';

/**
 * Combine all the MiddleWares.
 */
const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
    sizeMiddleware,
    categoryMiddleware,
    techniqueMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
