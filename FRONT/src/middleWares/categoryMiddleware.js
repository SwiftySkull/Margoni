/* eslint-disable no-console */
import axios from 'axios';

import { stringForUrl } from 'src/utils/utils';

import {
  LOAD_PAINTINGS_OF_CATEGORY,
  savePaintingsOfCategory,
} from 'src/actions/categoryActions';

// URL for the Axios requests
const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const categoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOAD_PAINTINGS_OF_CATEGORY:
      console.log(`${URL}/category/${action.id}`);
      axios.get(`${URL}/category/${action.id}`)
        .then((response) => {
          console.log(response.data);
          if (stringForUrl(response.data[0].name) !== action.select) {
            window.location = `/galerie/categorie/${stringForUrl(response.data[0].name)}/${response.data[0].id}`;
          }
          else {
            store.dispatch(savePaintingsOfCategory(response.data[0], response.data[1]['total results'], response.data[2]));
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

export default categoryMiddleware;