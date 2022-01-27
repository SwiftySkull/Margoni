/* eslint-disable no-console */
import axios from 'axios';

import { stringForUrl } from 'src/utils/utils';

import {
  LOAD_PAINTINGS_OF_CATEGORY,
  savePaintingsOfCategory,
  LOAD_PAINTINGS_BY_CATEGORY_NAME,
  LOAD_CATEGORY_SHUFFLED_PICTURES,
  saveCategoryShuffledPictures,
} from 'src/actions/categoryActions';

import {
  PAINTING_OF_PAGE,
} from 'src/actions/mainActions';

// URL for the Axios requests
const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const categoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOAD_CATEGORY_SHUFFLED_PICTURES:
      axios.get(`${URL}/getone/category`)
        .then((response) => {
          // console.log(responseBis.data);
          store.dispatch(saveCategoryShuffledPictures(response.data, action.categories));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    case LOAD_PAINTINGS_OF_CATEGORY:
      axios.get(`${URL}/category/${action.id}`)
        .then((response) => {
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

    case PAINTING_OF_PAGE:
      if (action.choice === 'categorie') {
        console.log(`${URL}/category/${action.selectId}/page/${action.page}`);
        axios.get(`${URL}/category/${action.selectId}/page/${action.page}`)
          .then((response) => {
            if (stringForUrl(response.data[0].name) !== action.select) {
              window.location = `/galerie/categorie/${stringForUrl(response.data[0].name)}/${response.data[0].id}/page/${action.page}`;
            }
            else {
              store.dispatch(savePaintingsOfCategory(response.data[0], response.data[1]['total results'], response.data[2]));
            }
          })
          .catch((error) => {
            console.log(error);
            window.location = '/error';
          });
      }

      next(action);
      break;

    case LOAD_PAINTINGS_BY_CATEGORY_NAME:
      axios.get(`${URL}/categbyname/${action.select}`)
        .then((response) => {
          window.location = `/galerie/categorie/${stringForUrl(response.data.name)}/${response.data.id}`;
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
