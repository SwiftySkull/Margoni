/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

// == Import
import SideBar from 'src/containers/SideBar';

import './credits.scss';

// == Composant
const Credits = ({
  sendRequest,
  updateFieldValue,
  contactName,
  contactEmail,
  contactSubject,
  contactMessage,
  submitButton,
  requestSent,
  closeContactModal,
  submitAccepted,
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
            <p className="message-modal" style={{ wordBreak: 'break-word' }}>aurelien.beneyton@gmail.com</p>
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
            <p className="message-modal" style={{ wordBreak: 'break-word' }}>aurelien.beneyton@gmail.com</p>
            <button type="button" className="button-modal" onClick={closeContactModal}>Retour à la navigation</button>
          </div>
        </div>
        )}
        <p>Vous pouvez aussi envoyer directement un email à l'adresse suivante : <a href="mailto:elisabeth-margoni@denise-margoni.fr">elisabeth-margoni@denise-margoni.fr<em className="mail">✉</em></a></p>
        <h2>Credits</h2>
        <p>Création et maintenance : Association "<span>Arts Vivants-Armor</span>" (AVA).</p>
        <p>Création Web & Photos : <a href="https://www.linkedin.com/in/aurelien-b" target="_blank" rel="noreferrer">Aurélien Beneyton<em>↗️</em></a>.</p>
        <p>Web Design original : <a href="mailto:sondelair@sondelair.free.fr">Sondelair<em className="mail">✉</em></a>.</p>
        <br />
      </div>
      <SideBar />
    </div>
  );
};

Credits.propTypes = {
  updateFieldValue: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
  contactName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactSubject: PropTypes.string.isRequired,
  contactMessage: PropTypes.string.isRequired,
  requestSent: PropTypes.bool.isRequired,
  closeContactModal: PropTypes.func.isRequired,
  submitAccepted: PropTypes.func.isRequired,
  submitButton: PropTypes.bool.isRequired,
  errorStatus: PropTypes.number.isRequired,
};

// == Export
export default Credits;
