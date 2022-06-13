import {
  UPDATE_FIELD_VALUE,
  REQUEST_SENT,
  CLOSE_CONTAC_MODAL,
  SUBMIT_ACCEPTED,
  REQUEST_NOT_SENT,
  SUBMIT_ERROR,
} from 'src/actions/contactActions';

const initialState = {
  contactName: '',
  contactEmail: '',
  contactSubject: '',
  contactMessage: '',
  requestSent: false,
  errorStatus: 0,
  submitAccepted: false,
};

/**
 * Reducer for the main events.
 */
function contactReducer(state = initialState, action) {
  switch (action.type) {
    /** Display an error message if the request has not been sent because of network issue */
    case REQUEST_NOT_SENT:
      return {
        ...state,
        errorStatus: 502,
      };

    /** Display an error message if the request is invalid */
    case SUBMIT_ERROR:
      return {
        ...state,
        errorStatus: 400,
      };

    /** Display the submit button after completing Captcha */
    case SUBMIT_ACCEPTED:
      return {
        ...state,
        submitAccepted: true,
      };

    /** Update the value of the field */
    case UPDATE_FIELD_VALUE:
      return {
        ...state,
        contactName: action.field === 'contactName' ? action.val : state.contactName,
        contactEmail: action.field === 'contactEmail' ? action.val : state.contactEmail,
        contactSubject: action.field === 'contactSubject' ? action.val : state.contactSubject,
        contactMessage: action.field === 'contactMessage' ? action.val : state.contactMessage,
      };

    /** When request sent with success, reset the fields and display the success message */
    case REQUEST_SENT:
      return {
        ...state,
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: '',
        requestSent: true,
        submitAccepted: false,
      };

    /** Close the modal after sending a request */
    case CLOSE_CONTAC_MODAL:
      return {
        ...state,
        requestSent: false,
        errorStatus: 0,
      };

    default:
      return state;
  }
}

export default contactReducer;
