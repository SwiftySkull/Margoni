/* eslint-disable no-console */
// import axios from 'axios';
import emailjs, { init } from '@emailjs/browser';

import {
  SEND_REQUEST,
  requestSent,
  requestNotSent,
  submitError,
} from 'src/actions/contactActions';

// import {
//   URL,
// } from 'src/middleWares/mainMiddleware';

// URL for the Axios requests

/**
 * MiddleWare for the main and authentification area.
 */
const contactMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    /** Send the contact request if validated */
    case SEND_REQUEST: {
      init('f15s27RrZoXbjheHP');
      const templateParams = {
        name: state.contact.contactName,
        email: state.contact.contactEmail,
        subject: state.contact.contactSubject,
        message: state.contact.contactMessage,
      };

      if (state.contact.submitAccepted) {
        emailjs.send('service_9mq03f8', 'template_00psvmv', templateParams)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            store.dispatch(requestSent());
          })
          .catch((error) => {
            console.log('FAILED...', error);
            store.dispatch(requestNotSent());
          });
      }
      else {
        store.dispatch(submitError());
      }
    }
      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default contactMiddleware;
