import { connect } from 'react-redux';

import {
  updateFieldValue,
  sendRequest,
  closeContactModal,
  submitAccepted,
} from 'src/actions/contactActions';

import Credits from 'src/components/Credits';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  contactName: state.contact.contactName,
  contactEmail: state.contact.contactEmail,
  contactSubject: state.contact.contactSubject,
  contactMessage: state.contact.contactMessage,
  requestSent: state.contact.requestSent,
  submitButton: state.contact.submitAccepted,
  errorStatus: state.contact.errorStatus,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  updateFieldValue: (val, field) => {
    dispatch(updateFieldValue(val, field));
  },

  sendRequest: () => {
    dispatch(sendRequest());
  },

  closeContactModal: () => {
    dispatch(closeContactModal());
  },

  submitAccepted: () => {
    dispatch(submitAccepted());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Credits);
