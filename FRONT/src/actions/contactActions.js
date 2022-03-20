// ACTIONS TYPES

export const UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SENT = 'REQUEST_SENT';
export const CLOSE_CONTAC_MODAL = 'CLOSE_CONTAC_MODAL';
export const ERROR_STATUS = 'ERROR_STATUS';
export const SUBMIT_ACCEPTED = 'SUBMIT_ACCEPTED';
export const REQUEST_NOT_SENT = 'REQUEST_NOT_SENT';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';

// ACTIONS CREATORS

export const updateFieldValue = (val, field) => ({
  type: UPDATE_FIELD_VALUE,
  val,
  field,
});

export const sendRequest = () => ({
  type: SEND_REQUEST,
});

export const requestSent = () => ({
  type: REQUEST_SENT,
});

export const closeContactModal = () => ({
  type: CLOSE_CONTAC_MODAL,
});

export const errorStatus = (error) => ({
  type: ERROR_STATUS,
  errorStatus: error,
});

export const submitAccepted = () => ({
  type: SUBMIT_ACCEPTED,
});

export const requestNotSent = () => ({
  type: REQUEST_NOT_SENT,
});

export const submitError = () => ({
  type: SUBMIT_ERROR,
});
