// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import fblogo from 'src/assets/images/download.png';

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <nav>
      <p>
        <Link to="/plan-du-site">Plan du site</Link>
      </p>
      <p>
        <a href="mailto:elisabeth-margoni@denise-margoni.fr">
          Infos @ Mail<em className="mail">✉</em>
        </a>
      </p>
      <p className="fb">
        <a href="https://www.facebook.com/denise.margoni.5" target="_blank" rel="noreferrer">
          <img src={fblogo} alt="fb" className="fb-logo" />
          Denise Margoni<em>↗️</em>
        </a>
      </p>
      <p className="cred">
        <Link to="/contact">Contact</Link>
        /
        <Link to="/credits">Crédits</Link>
      </p>
      <p>
        <Link to="/mentions-legal">Mentions Légales</Link>
      </p>
      <p>©️ 2022 Saint-Brieuc</p>
    </nav>
  </div>
);

// == Export
export default Footer;
