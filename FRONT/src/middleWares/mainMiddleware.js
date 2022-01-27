/* eslint-disable no-console */
import axios from 'axios';

import {
  DISPLAY_PAINTINGS,
  LOAD_ELEMENTS,
  LOAD_PAINTING,
  savePainting,
  LOAD_PAINTING_BY_NAME,
} from 'src/actions/mainActions';

import {
  // shuffledPictures,
  loadCategoryShuffledPictures,
  // LOAD_CATEGORY_SHUFFLED_PICTURES,
} from 'src/actions/categoryActions';

import {
  saveTechniques,
  loadTechniqueShuffledPictures,
} from 'src/actions/techniqueActions';

import {
  saveSizes,
} from 'src/actions/sizeActions';

import {
  urlToString,
} from 'src/utils/utils';

// URL for the Axios requests
const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case DISPLAY_PAINTINGS:
      axios.get(`${URL}/paintings`)
        .then((response) => {
          // console.log(response.data);
          // store.dispatch(xxx(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    case LOAD_ELEMENTS:
      axios.get(`${URL}/categories`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(loadCategoryShuffledPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      axios.get(`${URL}/techniques`)
        .then((response) => {
          // console.log(response.data);
          // store.dispatch(saveTechniques(response.data));
          store.dispatch(loadTechniqueShuffledPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      axios.get(`${URL}/sizes`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveSizes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    // case LOAD_CATEGORY_SHUFFLED_PICTURES:
    //   axios.get(`${URL}/getone/category`)
    //     .then((response) => {
    //       // console.log(responseBis.data);
    //       store.dispatch(shuffledPictures(response.data, action.categories));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    //   next(action);
    //   break;

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

    case LOAD_PAINTING_BY_NAME:
      console.log(`${URL}/painting/title/${action.paintingName}`);
      axios.get(`${URL}/painting/title/${action.paintingName}`)
        .then((response) => {
          console.log(response.data);
          // TODO: Si plusieurs résultats pour une recherche URL comme "la colline"
          store.dispatch(savePainting(response.data[0]));
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
