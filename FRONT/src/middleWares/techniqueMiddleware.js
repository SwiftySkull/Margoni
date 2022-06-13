/* eslint-disable no-console */
import axios from 'axios';

import { stringForUrl } from 'src/utils/utils';

import {
  savePaintingsOfTechnique,
  LOAD_PAINTINGS_BY_TECHNIQUE_TYPE,
  LOAD_TECHNIQUE_SHUFFLED_PICTURES,
  saveTechniqueShuffledPictures,
} from 'src/actions/techniqueActions';

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
const techniqueMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    /** Load the techniques in order shuffled for the sidebar */
    case LOAD_TECHNIQUE_SHUFFLED_PICTURES:
      axios.get(`${URL}/getone/technique`)
        .then((response) => {
          store.dispatch(saveTechniqueShuffledPictures(response.data, action.techniques));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    /** Get the paintings of the selected page and technique */
    case PAINTING_OF_PAGE:
      if (action.choice === 'technique') {
        axios.get(`${URL}/technique/${action.selectId}/page/${action.page}`)
          .then((response) => {
            if (stringForUrl(response.data[0].type) !== action.select) {
              window.location = `/galerie/technique/${stringForUrl(response.data[0].type)}/${response.data[0].id}/page/${action.page}`;
            }
            else {
              store.dispatch(savePaintingsOfTechnique(response.data[0], response.data[1]['total results'], response.data[2]));
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

    /** Load the paintings of a specific technique */
    case LOAD_PAINTINGS_BY_TECHNIQUE_TYPE:
      axios.get(`${URL}/techniquebytype/${action.select.replace('-', ' ')}`)
        .then((response) => {
          window.location = `/galerie/technique/${stringForUrl(response.data.type)}/${response.data.id}`;
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

export default techniqueMiddleware;
