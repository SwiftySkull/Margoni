/* eslint-disable no-console */
import axios from 'axios';

import { stringForUrl } from 'src/utils/utils';

import {
  savePaintingsOfSize,
  LOAD_PAINTINGS_BY_SIZE_FORMAT,
} from 'src/actions/sizeActions';

import {
  PAINTING_OF_PAGE,
  loaderOff,
} from 'src/actions/mainActions';

import {
  URL,
} from 'src/middleWares/mainMiddleware';

// URL for the Axios requests

/**
 * MiddleWare for the main and authentification area.
 */
const sizeMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    /** Get the paintings of the selected page and size */
    case PAINTING_OF_PAGE:
      if (action.choice === 'format') {
        axios.get(`${URL}/size/${action.selectId}/page/${action.page}`)
          .then((response) => {
            if (stringForUrl(response.data[0].format) !== action.select) {
              window.location = `/galerie/format/${stringForUrl(response.data[0].format)}/${response.data[0].id}/page/${action.page}`;
            }
            else {
              store.dispatch(savePaintingsOfSize(response.data[0], response.data[1]['total results'], response.data[2]));
              store.dispatch(loaderOff());
            }
          })
          .catch((error) => {
            console.log(error);
            window.location = '/error';
          });
      }
      next(action);
      break;

    /** Load the paintings of a specific size */
    case LOAD_PAINTINGS_BY_SIZE_FORMAT:
      axios.get(`${URL}/sizebyformat/${action.select}`)
        .then((response) => {
          window.location = `/galerie/format/${stringForUrl(response.data.format)}/${response.data.id}`;
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
