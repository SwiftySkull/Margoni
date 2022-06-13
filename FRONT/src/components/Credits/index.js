/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

// == Import
import SideBar from 'src/containers/SideBar';

import './credits.scss';

// == Composant
/**
 * Component for the contact/credit page
 *
 * @param {function} sendRequest Send the form request after completing it
 * @param {function} updateFieldValue Update the value of a field/input
 * @param {string} contactName Name for the request
 * @param {string} contactEmail Email for the request
 * @param {string} contactSubject Subject for the request
 * @param {string} contactMessage Message for the request
 * @param {function} submitAccepted Show the submit button when the Captcha is validated
 * @param {boolean} submitButton Boolean to display/hide the submit button when Captcha is validated
 * @param {boolean} requestSent Boolean to hide/display the modal message of success
 * @param {function} closeContactModal Close the modal box message
 * @param {number} errorStatus Number of the error to display the correct error message
 */
const Credits = ({
  sendRequest,
  updateFieldValue,
  contactName,
  contactEmail,
  contactSubject,
  contactMessage,
  submitAccepted,
  submitButton,
  requestSent,
  closeContactModal,
  errorStatus,
}) => {
  document.title = 'Crédits';

  return (
    <div id="credits">
      <div className="credits">
        <h2>Contact</h2>
        <p className="official">Site officiel des œuvres peintes de Denise Margoni.</p>
        <p>Si vous souhaitez des renseignements, en apprendre plus sur la peinture de Denise Margoni, avoir accès à plus d'oeuvres, merci de remplir le formulaire ci-dessous.</p>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            sendRequest();
          }}
          className="request-form"
        >
          <label htmlFor="name" className="label label-name">
            Votre nom
            <input name="name" id="name" required onChange={(evt) => updateFieldValue(evt.target.value, 'contactName')} value={contactName} className="input input-name" />
          </label>
          <label htmlFor="email" className="label label-email">
            Votre adresse mail
            <input type="email" name="email" id="email" required onChange={(evt) => updateFieldValue(evt.target.value, 'contactEmail')} value={contactEmail} className="input input-email" />
          </label>
          <label htmlFor="subject" className="label label-subject">
            Sujet
            <input name="subject" id="subject" required onChange={(evt) => updateFieldValue(evt.target.value, 'contactSubject')} value={contactSubject} className="input input-subject" />
          </label>
          <label htmlFor="message" className="label label-message">
            Votre message (optionnel)
            <textarea name="message" id="message" onChange={(evt) => updateFieldValue(evt.target.value, 'contactMessage')} value={contactMessage} className="input input-message" />
          </label>
          <ReCAPTCHA
            sitekey="6LdNtcYeAAAAAHz96KIH6RavkNPPAssjz26-n7EM"
            onChange={submitAccepted}
            className="captcha"
          />
          <div>
            <button
              style={{ display: submitButton ? 'block' : 'none' }}
              type="submit"
              onSubmit={(evt) => {
                evt.preventDefault();
                sendRequest();
              }}
            >Submit
            </button>
          </div>
        </form>
        {requestSent && (
        <div className="contact-modal">
          <div className="modal">
            <button type="button" className="close-button-modal" onClick={closeContactModal}>
              +
            </button>
            <p className="message-modal">Demande de contact envoyée avec succès !</p>
            <button type="button" className="button-modal" onClick={closeContactModal}>Retour à la navigation</button>
          </div>
        </div>
        )}
        {errorStatus === 502 && (
        <div className="contact-modal">
          <div className="modal">
            <button type="button" className="close-button-modal" onClick={closeContactModal}>
              +
            </button>
            <p className="message-modal">Une erreur est survenue lors de l'envoie de la demande !</p>
            <p className="message-modal">Veuillez ré-essayer plus tard...</p>
            <p className="message-modal">Si le problème persiste, merci d'envoyer un mail à</p>
            <p className="message-modal" style={{ wordBreak: 'break-word' }}>support@denise-margoni.fr</p>
            <button type="button" className="button-modal" onClick={closeContactModal}>Retour à la navigation</button>
          </div>
        </div>
        )}
        {errorStatus === 400 && (
        <div className="contact-modal">
          <div className="modal">
            <button type="button" className="close-button-modal" onClick={closeContactModal}>
              +
            </button>
            <p className="message-modal">Une erreur est survenue lors de la validation de la demande !</p>
            <p className="message-modal">Si le problème persiste, merci d'envoyer un mail à</p>
            <p className="message-modal" style={{ wordBreak: 'break-word' }}>support@denise-margoni.fr</p>
            <button type="button" className="button-modal" onClick={closeContactModal}>Retour à la navigation</button>
          </div>
        </div>
        )}
        <p>Vous pouvez aussi envoyer directement un email à l'adresse suivante : <a href="mailto:elisabeth-margoni@denise-margoni.fr">elisabeth-margoni@denise-margoni.fr<em className="mail">✉</em></a></p>
        <h2>Credits</h2>
        <p>Création et maintenance : Association "<span>Arts Vivants-Armor</span>" (AVA).</p>
        <p>Création Web & Photos : <a href="https://www.developoulpe.fr/" target="_blank" rel="noreferrer">Developoulpe<em>↗️</em></a></p>
        <p>Web Design original : <a href="mailto:sondelair@sondelair.free.fr">Sondelair<em className="mail">✉</em></a>.</p>
        <br />
      </div>
      <SideBar />
    </div>
  );
};

Credits.propTypes = {
  /** Send the form request after completing it */
  sendRequest: PropTypes.func.isRequired,

  /** Update the value of a field/input */
  updateFieldValue: PropTypes.func.isRequired,

  /** Name for the request */
  contactName: PropTypes.string.isRequired,
  /** Email for the request */
  contactEmail: PropTypes.string.isRequired,
  /** Subject for the request */
  contactSubject: PropTypes.string.isRequired,
  /** Message for the request */
  contactMessage: PropTypes.string.isRequired,

  /** Show the submit button when the Captcha is validated */
  submitAccepted: PropTypes.func.isRequired,
  /** Boolean to display/hide the submit button when Captcha is validated */
  submitButton: PropTypes.bool.isRequired,

  /** Boolean to hide/display the modal message of success */
  requestSent: PropTypes.bool.isRequired,

  /** Close the modal box message */
  closeContactModal: PropTypes.func.isRequired,

  /** Number of the error to display the correct error message */
  errorStatus: PropTypes.number.isRequired,
};

// == Export
export default Credits;
