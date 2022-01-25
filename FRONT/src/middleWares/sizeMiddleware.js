/* eslint-disable no-console */
import axios from 'axios';

import { stringForUrl } from 'src/utils/utils';

import {
  LOAD_PAINTINGS_OF_SIZE,
  savePaintingsOfSize,
} from 'src/actions/sizeActions';

// URL for the Axios requests
const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const sizeMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOAD_PAINTINGS_OF_SIZE:
      console.log(`${URL}/size/${action.id}`);
      axios.get(`${URL}/size/${action.id}`)
        .then((response) => {
          console.log(response.data);
          if (stringForUrl(response.data[0].format) !== action.select) {
            window.location = `/galerie/format/${stringForUrl(response.data[0].format)}/${response.data[0].id}`;
          }
          else {
            store.dispatch(savePaintingsOfSize(response.data[0], response.data[1]['total results'], response.data[2]));
          }
        })
        .catch((error) => {
          console.log(error);
          window.location = '/error';
        });

      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default sizeMiddleware;
