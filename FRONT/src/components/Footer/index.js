// == Import npm
import React from 'react';

// == Import
import fblogo from '../../assets/images/download.png';

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <nav>
      <a href="http://margoandco.free.fr/atelier/">Margo and Co</a>
      <a href="mailto:sondelair@sondelair.free.fr">Delair Web</a>
      <a href="mailto:margoandco@margoandco.free.fr">Infos @ Mail</a>
      <a href="https://www.facebook.com/denise.margoni.5"><img src={fblogo} alt="fb" className="fb-logo" /><p>Denise Margoni</p></a>
    </nav>
  </div>
);

// == Export
export default Footer;
