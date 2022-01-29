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

// URL for the Axios requests
const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const sizeMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case PAINTING_OF_PAGE:
      if (action.choice === 'format') {
        axios.get(`${URL}/size/${action.selectId}/page/${action.page}`)
          .then((response) => {
            if (stringForUrl(response.data[0].format) !== action.select) {
              window.location = `/galerie/format/${stringForUrl(response.data[0].format)}/${response.data[0].id}/page/${action.page}`;
            }
            else {
              setTimeout(() => {
                store.dispatch(loaderOff());
                store.dispatch(savePaintingsOfSize(response.data[0], response.data[1]['total results'], response.data[2]));
              }, 1000);
            }
          })
          .catch((error) => {
            console.log(error);
            window.location = '/error';
          });
      }
      next(action);
      break;

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
