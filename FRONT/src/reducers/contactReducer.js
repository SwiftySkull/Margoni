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
    case REQUEST_NOT_SENT:
      return {
        ...state,
        errorStatus: 502,
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        errorStatus: 400,
      };

    case SUBMIT_ACCEPTED:
      return {
        ...state,
        submitAccepted: true,
      };

    case UPDATE_FIELD_VALUE:
      return {
        ...state,
        contactName: action.field === 'contactName' ? action.val : state.contactName,
        contactEmail: action.field === 'contactEmail' ? action.val : state.contactEmail,
        contactSubject: action.field === 'contactSubject' ? action.val : state.contactSubject,
        contactMessage: action.field === 'contactMessage' ? action.val : state.contactMessage,
      };

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
