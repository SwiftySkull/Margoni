/* eslint-disable no-console */
import axios from 'axios';

import {
  LOAD_ELEMENTS,
  LOAD_PAINTING,
  savePainting,
  LOAD_PAINTING_BY_NAME,
  saveMultiplePaintings,
} from 'src/actions/mainActions';

import {
  loadCategoryShuffledPictures,
} from 'src/actions/categoryActions';

import {
  loadTechniqueShuffledPictures,
} from 'src/actions/techniqueActions';

import {
  saveSizes,
} from 'src/actions/sizeActions';

// URL for the Axios requests
export const URL = 'https://back.denise-margoni.fr/api';
// export const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    /**
     * Load the home page elements and the categories
     */
    case LOAD_ELEMENTS:
      axios.get(`${URL}/categories`)
        .then((response) => {
          store.dispatch(loadCategoryShuffledPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      axios.get(`${URL}/techniques`)
        .then((response) => {
          store.dispatch(loadTechniqueShuffledPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      axios.get(`${URL}/sizes`)
        .then((response) => {
          store.dispatch(saveSizes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    /** Load the informations of a specific painting by its ID */
    case LOAD_PAINTING:
      axios.get(`${URL}/painting/id/${action.id}`)
        .then((response) => {
          store.dispatch(savePainting(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    /** Load the informations of a specific painting by its name */
    case LOAD_PAINTING_BY_NAME:
      axios.get(`${URL}/painting/title/${action.paintingName}`)
        .then((response) => {
          if (response.data.length > 1) {
            store.dispatch(saveMultiplePaintings(response.data));
          }
          else {
            console.log(response.data);

            store.dispatch(savePainting(response.data));
          }
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
