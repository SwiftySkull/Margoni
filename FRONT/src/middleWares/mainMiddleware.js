/* eslint-disable no-console */
import axios from 'axios';

import {
  DISPLAY_PAINTINGS,
  xxx,
} from 'src/actions/mainActions';

// URL for the Axios requests
const URL = 'http://localhost:8000/api/paintings';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case DISPLAY_PAINTINGS:
      axios.get(URL)
        .then((response) => {
          console.log(response.data);
          store.dispatch(xxx(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
