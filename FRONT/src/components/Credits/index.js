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
        <p>Création Web & Photos : <a href="https://www.linkedin.com/in/aurelien-b" target="_blank" rel="noreferrer">Aurélien Beneyton<em>↗️</em></a>.</p>
        <p>Web Design original : <a href="mailto:sondelair@sondelair.free.fr">Sondelair<em className="mail">✉</em></a>.</p>
        <br />
        <p>Contact  : <a href="mailto:denisemargoni@orange.fr">denisemargoni@orange.fr<em className="mail">✉</em></a></p>
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default Credits;
