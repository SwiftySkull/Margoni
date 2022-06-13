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
  /** Update the value of a field/input */
  updateFieldValue: (val, field) => {
    dispatch(updateFieldValue(val, field));
  },

  /** Send the form request after completing it */
  sendRequest: () => {
    dispatch(sendRequest());
  },

  /** Close the modal box message */
  closeContactModal: () => {
    dispatch(closeContactModal());
  },

  /** Show the submit button when the Captcha is validated */
  submitAccepted: () => {
    dispatch(submitAccepted());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Credits);
