/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import SideBar from 'src/containers/SideBar';

import './credits.scss';

// == Composant
const Credits = () => {
  document.title = 'Crédits';

  return (
    <div id="credits">
      <div className="credits">
        <h2>Credits</h2>
        <p>Denise Margoni site officiel des œuvres peintes.</p>
        <p>Création et maintenance : Association "<span>Arts Vivants-Armor</span>" (AVA).</p>
        <p>Création Web : <a href="https://www.linkedin.com/in/aurelien-b" target="_blank" rel="noreferrer">Beneyton Aurélien<em>↗️</em></a>.</p>
        <p>Web Design original : <a href="mailto:sondelair@sondelair.free.fr">Delair<em className="mail">✉</em></a>.</p>
        <p>Partenaires : <a href="http://margoandco.free.fr/atelier/" target="_blank" rel="noreferrer">Margo and Co<em>↗️</em></a>, Sondelair.</p>
        <br />
        <p>Contact  : <a href="mailto:denisemargoni@orange.fr">denisemargoni@orange.fr<em className="mail">✉</em></a></p>
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default Credits;
