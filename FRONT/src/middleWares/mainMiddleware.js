/* eslint-disable no-console */
import axios from 'axios';

import {
  DISPLAY_PAINTINGS,
  LOAD_HOME_PAGE,
} from 'src/actions/mainActions';

import {
  saveCategories,
  shuffledPictures,
  loadShuffledPictures,
  LOAD_SHUFFLED_PICTURES,
} from 'src/actions/categoryActions';

// URL for the Axios requests
const URL = 'http://localhost:8000/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case DISPLAY_PAINTINGS:
      axios.get(`${URL}/paintings`)
        .then((response) => {
          console.log(response.data);
          // store.dispatch(xxx(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    case LOAD_HOME_PAGE:
      axios.get(`${URL}/categories`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveCategories(response.data));
          store.dispatch(loadShuffledPictures(response.data.length));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    case LOAD_SHUFFLED_PICTURES:
      axios.get(`${URL}/getone/category`)
        .then((responseBis) => {
          console.log(responseBis.data);
          store.dispatch(shuffledPictures(responseBis.data));
        })
        .catch((errorBis) => {
          console.log(errorBis);
        });

      next(action);
      break;
    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
