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
        <p>Ce site est le site officiel représentant l'oeuvre de Denise Margoni.</p>
        <p>Ce site a été créé et est maintenu par l'association "<span>Art Vivant Armor</span>".</p>
        <p>Créateur du site : <a href="https://www.linkedin.com/in/aurelien-b" target="_blank" rel="noreferrer">Beneyton Aurélien<em>↗️</em></a>.</p>
        <p>Design du site créé par <a href="mailto:sondelair@sondelair.free.fr">Delair Web<em className="mail">✉</em></a>.</p>
        <p>Partenaire : <a href="http://margoandco.free.fr/atelier/" target="_blank" rel="noreferrer">Margo and Co<em>↗️</em></a>.</p>
        <h2>Contact</h2>
        <p>Email : <a href="mailto:margoandco@margoandco.free.fr">margoandco@margoandco.free.fr<em className="mail">✉</em></a></p>
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default Credits;
