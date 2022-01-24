/* eslint-disable no-console */
import axios from 'axios';

import {
  SIZE_CHOICE,
  saveSizeChoice,
} from 'src/actions/sizeActions';

// URL for the Axios requests
const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SIZE_CHOICE:
      axios.get(`${URL}/size/${action.id}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveSizeChoice(response.data[0], response.data[1]['total results'], response.data[2]));
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
